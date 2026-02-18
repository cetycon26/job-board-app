import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function JobCard({ job }) {
  return (
    <div>
      <h5>{job.title}</h5>
      <p>
        <strong>{job.company}</strong>
      </p>
      <p>{job.location}</p>

      <div className="job-tags">
        {(job?.details || []).map((tag, i) => (
          <span key={i} style={{ border: "1px solid red", padding: "2px" }}>
            {tag}
          </span>
        ))}
      </div>

      <Link to={`/jobs/${job.id}`} className="">
        <Button>View Details</Button>
      </Link>
      <Link to={`/apply/${job.id}`} className="btn btn-apply">
        <Button>Apply</Button>
      </Link>
    </div>
  );
}

function InfoTag({ text, className = "" }) {
  return <span className={`info-tag ${className}`}>{text}</span>;
}
