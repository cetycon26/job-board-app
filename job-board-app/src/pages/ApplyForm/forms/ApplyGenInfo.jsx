import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function ApplyGenInfo({ formData, handleChange, errors }) {
  return (
    <Stack spacing={2}>
      <TextField
        label="First Name"
        value={formData.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
        fullWidth
        error={errors.firstName}
        helperText={errors.firstName}
      />

      <TextField
        error={formData.lastName ? false : true}
        label="Last Name"
        value={formData.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        fullWidth
        helperText={formData.lastName ? null : "Last name cannot be blank"}
      />

      <TextField
        label="Email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        fullWidth
      />
    </Stack>
  );
}
