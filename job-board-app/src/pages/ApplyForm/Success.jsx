import React from "react";
import Button from "@mui/material/Button";

export default function Success({ formData }) {
    return (
        <div>
        <h1>Thank you for applying for the  at ! </h1>
        <p>Please be patient while we review your application.</p>
        <Button href="/">Return to Home</Button>
        </div>
    );
}