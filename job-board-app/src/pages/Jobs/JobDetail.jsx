import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "../../data/jobs";
import Button from "@mui/material/Button";
import "./JobDetail.css";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <div className="">Job not found</div>;
  }

  return (
    <div>
      <header className="job_header">
        <div className="job_header_text">
          <h1>{job.title}</h1>
          <h2>
            <span>{job.company}</span>
            <span> - {job.location}</span>
          </h2>
        </div>
      </header>

      <p className="job_details">
        <span>
          ${job.salaryRange[0].toLocaleString()} - $
          {job.salaryRange[1].toLocaleString()}
        </span>{" "}
        | <span>{job.employment}</span>
        <p>{job.description}</p>
        <Link to={`/apply/${job.id}`} className="">
          <Button variant="contained">Apply</Button>
        </Link>
      </p>
    </div>
  );
}
