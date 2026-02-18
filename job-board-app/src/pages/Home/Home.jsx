import React from "react";
import "./Home.css";
import {jobs} from '../../data/jobs';
import JobCard from "../../components/JobCard";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <hr/>
      <div className="job_container">
        {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      </div>
    </div>
  );
}
