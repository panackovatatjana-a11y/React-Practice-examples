import React, { useState, useEffect } from "react";
import JobManager from "./component/JobManager";
import JobFormPrc from "./component/JobFormPrc";   
import { JobColumn } from "./component/JobColumn";

import "./App.css";

// Correct image imports
import playIcon from "./assets/play.png";
import inprogressIcon from "./assets/in-progress.png";
import CompleteIcon from "./assets/Done.jpg";

// Load previous jobs from localStorage
const prevJob = localStorage.getItem("job");

const App = () => {
  const initialJobState = prevJob ? JSON.parse(prevJob) : [];
  const [job, setJobs] = useState(initialJobState);

  // Save jobs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("job", JSON.stringify(job));
  }, [job]);

  // Add new job
  const addJob = (jobDetails) => {
    setJobs((prev) => [...prev, jobDetails]);
  };

  // Delete job by index
  const callDeleteJobs = (jobUniqueNumber) => {
    const filteredJobs = job.filter((_, index) => index !== jobUniqueNumber);
    setJobs(filteredJobs);
  };

  return (
    <div className="App">

      {/* Job Form */}
      <JobFormPrc addJob={addJob} />

      <main className="header-func">

        <JobColumn
          title="Need to Complete"
          imgIcon={playIcon}
          status="Need to Complete"
          job={job}
          callDeleteJobs={callDeleteJobs}
        />

        <JobColumn
          title="In Progress"
          imgIcon={inprogressIcon}
          status="In Progress"
          job={job}
          callDeleteJobs={callDeleteJobs}
        />

        <JobColumn
          title="Completed"
          imgIcon={CompleteIcon}
          status="Completed"
          job={job}
          callDeleteJobs={callDeleteJobs}
        />

      </main>

      <JobManager/>

    </div>
  );
};

export default App;
