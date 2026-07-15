import React, { useState } from "react";
import AppForm from "./component/AppForm";
import JobList from "./component/JobList";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (jobDetails) => {
    setJobs(prev => [...prev, jobDetails]);
  };

  return (
    <div className="App">
      <h1>Job Management Application</h1>

      <AppForm addJob={addJob} />

      <JobList jobs={jobs} />
    </div>
  );
}

export default App;

