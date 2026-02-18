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
        label="Last Name"
        value={formData.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        fullWidth
        error={errors.lastName}
        helperText={errors.lastName}
      />

      <TextField
        label="Email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        fullWidth
        error={errors.email}
        helperText={errors.email}
      />
    </Stack>
  );
}
