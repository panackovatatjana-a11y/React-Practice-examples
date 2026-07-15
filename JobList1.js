import React from "react";

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      <h3>Added Jobs:</h3>

      {jobs.length === 0 && <p>No jobs yet.</p>}

      {jobs.map((job, index) => (
        <div key={index} className="job-item">
          <strong>{job.title}</strong>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
