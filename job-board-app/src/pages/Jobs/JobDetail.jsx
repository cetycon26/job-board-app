import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "../../data/jobs";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <div className="">Job not found</div>;
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <h2><span>{job.company}</span><span> - {job.location}</span></h2>
      <p><span>${job.salaryRange[0].toLocaleString()} - ${job.salaryRange[1].toLocaleString()}</span> | <span>{job.employment}</span></p>
      <p>{job.description}</p>
      <Link to={`/apply/${job.id}`} className="btn btn-apply">
        <button>Apply</button>
      </Link>
    </div>
  );
}
