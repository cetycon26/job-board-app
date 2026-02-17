import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ id, title, company, location, description }) {
  return (
    <div>
      <h5>{title}</h5>
      <h6>{company}</h6>
      <p> - {location}</p>
      <Link to={`/jobs/${job.id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  );
}
