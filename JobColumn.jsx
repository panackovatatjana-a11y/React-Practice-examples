export const JobColumn = ({ title, imgIcon, status, job, callDeleteJobs }) => {
  return (
    <section className="columns1">
      <h2 className="hdStatus">{title}</h2>

      <img className="statusImgCs" src={imgIcon} alt="status-icon" />

      {job
        .filter(j => j.status === status)
        .map((j, index) => (
          <div key={index} className="jobItem">
            <p>{j.title}</p>
            <button onClick={() => callDeleteJobs(index)}>Delete</button>
          </div>
        ))}
    </section>
  );
};
