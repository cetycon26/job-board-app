import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ApplyDisclosure({ formData, handleChange }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={formData.authorized}
          onChange={(e) => handleChange("authorized", e.target.checked)}
        />
      }
      label="I am authorized to work in this country"
    />
  );
}
