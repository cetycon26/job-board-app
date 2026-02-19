import React from "react";
import "./Home.css";
import { jobs } from "../../data/jobs";
import JobCard from "../../components/JobCard";

export default function Home() {
  return (
    <div>
      <header className="header">
        <p className="header_text">Find the top jobs for your next career.</p>
        <p className="header_p">
          Connect with thousands of employers for part-time, full-time, remote,
          hybrid, and in-person roles.
        </p>
      </header>

      <hr />
      <div className="job_container">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
