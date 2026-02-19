import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jobs } from "../../data/jobs";
import "./ApplyForm.css";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import ApplyGenInfo from "./forms/ApplyGenInfo";
import ApplyDisclosure from "./forms/ApplyDisclosure";
import ApplyConfirmation from "./forms/ApplyConfirmation";

const steps = ["General Information", "Voluntary Disclosure", "Confirmation"];

export default function ApplyForm() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    authorized: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateStep = () => {
    let newErrors = {};

    if (currentStep === 0) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(formData.email.trim())) {
        newErrors.email = "Invalid email format (user@example.com)";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }

    if (currentStep === steps.length - 1) {
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (!validateStep()) return;

    console.log("Submitting:", formData);

    navigate(`/apply/${job.id}/success`);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ApplyGenInfo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 1:
        return (
          <ApplyDisclosure formData={formData} handleChange={handleChange} />
        );
      case 2:
        return <ApplyConfirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="application">
      <h1 className="apply_title">
        Applying for {job.title} at {job.company}
      </h1>

      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div style={{ marginTop: "2rem" }}>{renderStep()}</div>

      <div style={{ marginTop: "2rem" }}>
        <Button disabled={currentStep === 0} onClick={handleBack}>
          Back
        </Button>

        <Button
          variant="contained"
          onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
          // disabled={!validateStep()}
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}
