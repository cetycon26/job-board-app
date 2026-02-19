import React from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { jobs } from "../../data/jobs";
import "./Success.css";

export default function Success() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));

  return (
    <div className="success">
      <h1>
        You've applied for the role{" "}
        <span className="company_detail">{job.title}</span> at{" "}
        <span className="company_detail">{job.company}</span>!
      </h1>
      <p>Please be patient while we review your application.</p>
      <Button href="/">Return to Home</Button>
    </div>
  );
}
