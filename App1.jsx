import { useState } from "react";
import AddJobForm from "./component/AddJobForm";
import JobColumn from "./component/JobColumn";
import './App1.css';

function App1() {
  const [jobs, setJobs] = useState([]);

 //new Job
  const addNewJob = (title) => {
    const newJob = {
      id: Date.now(),
      title: title,
      status: "Need to Start"
    };
    setJobs([...jobs, newJob]);
  };

 
  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

//change the status
  const updateJobStatus = (id, newStatus) => {
    setJobs(
      jobs.map(job =>
        job.id === id ? { ...job, status: newStatus } : job
      )
    );
  };

  return (
    <div>
      <h1>Job Manager</h1>

      <AddJobForm addNewJob={addNewJob} />

      <JobColumn
        status="Need to Start"
        jobs={jobs.filter(job => job.status === "Need to Start")}
        deleteJob={deleteJob}
        updateJobStatus={updateJobStatus}
      />

      <JobColumn
        status="In Progress"
        jobs={jobs.filter(job => job.status === "In Progress")}
        deleteJob={deleteJob}
        updateJobStatus={updateJobStatus}
      />

      <JobColumn
        status="Completed"
        jobs={jobs.filter(job => job.status === "Completed")}
        deleteJob={deleteJob}
        updateJobStatus={updateJobStatus}
      />
    </div>
  );
}

export default App1;

