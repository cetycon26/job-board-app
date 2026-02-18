import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div>
      <h5>{job.title}</h5>
      <p><strong>{job.company}</strong></p>
      <p>{job.location}</p>

      <div className="job-tags">
        {job.details?.map((tag, id) => (
          <span key={id} className="job-tag">
            {tag}
          </span>
        ))}
      </div>

      <Link to={`/jobs/${job.id}`} className="btn btn-primary">
        View Details
      </Link>
      <Link to={`/apply/${job.id}`} className="btn btn-apply">
        Apply
      </Link>
    </div>
  );
}