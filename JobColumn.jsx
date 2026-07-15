import React, { useState } from 'react';

const JobForm = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    category: '',
    status: 'To Start'
  });

  const categories = ['Read Emails', 'Web Parsing', 'Send Emails'];
  const statuses = ['To Start', 'In Progress', 'Completed'];

  const handleInputChange = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobDetails.title || !jobDetails.category) {
      alert("Please fill all fields");
      return;
    }

    console.log("Job added:", jobDetails);

    // Reset form
    setJobDetails({
      title: '',
      category: '',
      status: 'To Start'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="simple-form">
      <input
        type="text"
        name="title"
        value={jobDetails.title}
        onChange={handleInputChange}
        placeholder="Enter job title"
      />
      
      <select
        name="category"
        value={jobDetails.category}
        onChange={handleInputChange}
      >
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select
        name="status"
        value={jobDetails.status}
        onChange={handleInputChange}
      >
        {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>

      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
