import deleteIcon from "../assets/delete.png";

function JobColumn({ status, jobs, deleteJob, updateJobStatus }) {
  return (
    <section className="jobColumn">
      <h2>{status}</h2>

      {jobs.map(job => (
        <div key={job.id} className="jobCard">
          <p>{job.title}</p>

          <select
            value={job.status}
            onChange={(e) => updateJobStatus(job.id, e.target.value)}
          >
            <option>Need to Start</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <img
            src={deleteIcon}
            alt="delete"
            className="deleteIcon"
            onClick={() => deleteJob(job.id)}
          />
        </div>
      ))}
    </section>
  );
}

export default JobColumn;

