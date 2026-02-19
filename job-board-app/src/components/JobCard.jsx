import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./JobCard.css";

const applyButton = "#986A71";
const theme = createTheme({
  palette: {
    orange: {
      main: "#986A71",
    },
  },
});

export default function JobCard({ job }) {
  return (
    <div className="job_card">
      <h5 className="job_title">{job.title}</h5>
      <div className="job_company">
        {job.company} | {job.location}
      </div>

      <div className="job_tag_container">
        {(job?.details || []).map((tag, i) => (
          <span key={i} className="job_tag">
            {tag}
          </span>
        ))}
      </div>

      <Link to={`/jobs/${job.id}`} className="">
        <Button>View Details</Button>
      </Link>
      <Link to={`/apply/${job.id}`} className="btn btn-apply">
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </Link>
    </div>
  );
}

function InfoTag({ text, className = "" }) {
  return <span className={`info-tag ${className}`}>{text}</span>;
}
