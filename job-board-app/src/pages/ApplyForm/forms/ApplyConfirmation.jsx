import React from "react";

export default function ApplyConfirmation({ formData }) {
  return (
    <div>
      <h3>Review Your Application</h3>
      <p>
        <strong>First Name:</strong> {formData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {formData.lastName}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Authorized:</strong> {formData.authorized ? "Yes" : "No"}
      </p>
    </div>
  );
}
