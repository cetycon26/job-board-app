import React from "react";
import {jobs} from '../../data/jobs';
import JobCard from "../../components/JobCard";

export default function JobList() {
  return (
    <div className="container mt-4">
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
