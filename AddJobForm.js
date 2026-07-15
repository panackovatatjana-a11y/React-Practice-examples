import { useState } from "react";

function AddJobForm({ addNewJob }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addNewJob(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="addForm">
      <input
        type="text"
        placeholder="Job title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddJobForm;
