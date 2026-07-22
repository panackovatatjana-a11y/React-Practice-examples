import React, { useState } from "react";
import { JobColumn } from "./JobColumn";

import playIcon from "../assets/play.png";
import inprogressIcon from "../assets/in-progress.png";
import CompleteIcon from "../assets/Done.jpg";

function JobManager() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("Need to Complete");

  const toggleCategory = (category) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const addJob = (e) => {
    e.preventDefault();

    if (!title.trim()) return;
    if (categories.length === 0) return;

    const newJob = { title, categories, status };
    setJobs([...jobs, newJob]);

    setTitle("");
    setCategories([]);
    setStatus("Need to Complete");
  };

  return (
    <div className="job-manager">

      <form onSubmit={addJob} className="job-form">

        <input
          type="text"
          placeholder="Job activity"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="category-buttons">
          <button
            type="button"
            onClick={() => toggleCategory("Read Emails")}
            className={categories.includes("Read Emails") ? "selected-category" : ""}
          >
            Read Emails
          </button>

          <button
            type="button"
            onClick={() => toggleCategory("Send Emails")}
            className={categories.includes("Send Emails") ? "selected-category" : ""}
          >
            Send Emails
          </button>

          <button
            type="button"
            onClick={() => toggleCategory("Web Parsing")}
            className={categories.includes("Web Parsing") ? "selected-category" : ""}
          >
            Web Parsing
          </button>
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Need to Complete">Need to Complete</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit">Add Job</button>
      </form>

      <div className="job-columns">
        <JobColumn
          title="Need to Complete"
          imgIcon={playIcon}
          status="Need to Complete"
          job={jobs}
        />

        <JobColumn
          title="In Progress"
          imgIcon={inprogressIcon}
          status="In Progress"
          job={jobs}
        />

        <JobColumn
          title="Completed"
          imgIcon={CompleteIcon}
          status="Completed"
          job={jobs}
        />
      </div>

    </div>
  );
}

export default JobManager;


