import React, { useState } from 'react';
import './JobFormPrc.css';

const JobFormPrc = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    status: 'To Start',
    categories: []
  });

  const categoryOptions = ['Read Emails', 'Web Parsing', 'Send Emails'];

  const [search, setSearch] = useState("");

  // Handle text + select inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prev => ({ ...prev, [name]: value }));
  };

  // 1. Toggle category selection (with max 3 limit)
  const handleCategoryToggle = (category) => {
    setJobDetails(prev => {
      const alreadySelected = prev.categories.includes(category);

      // BONUS: max 3 categories
      if (!alreadySelected && prev.categories.length >= 3) {
        alert("You can select a maximum of 3 categories.");
        return prev;
      }

      return {
        ...prev,
        categories: alreadySelected
          ? prev.categories.filter(c => c !== category) // remove
          : [...prev.categories, category] // add
      };
    });
  };

  // 6. Clear all categories
  const clearCategories = () => {
    setJobDetails(prev => ({ ...prev, categories: [] }));
  };

  // Submit with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // 5. Validation
    if (!jobDetails.title.trim()) {
      alert("Please enter a job title.");
      return;
    }

    if (jobDetails.categories.length === 0) {
      alert("Please select at least one category.");
      return;
    }

    // 4. Log job details including categories
    console.log("Submitted job details:", jobDetails);

    // Reset form
    setJobDetails({
      title: '',
      status: 'To Start',
      categories: []
    });
  };

  // BONUS: search filter
  const filteredCategories = categoryOptions.filter(cat =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <form onSubmit={handleSubmit}>
      
      {/* Job Title */}
      <input
        type="text"
        name="title"
        value={jobDetails.title}
        onChange={handleInputChange}
        placeholder="Enter job title"
      />

      {/* Status */}
      <select
        name="status"
        value={jobDetails.status}
        onChange={handleInputChange}
      >
        <option value="To Start">To Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      {/* BONUS: Search categories */}
      <input
        type="text"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Buttons */}
      <div className="category-buttons">
        {filteredCategories.map(category => {
          const selected = jobDetails.categories.includes(category);

          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryToggle(category)}
              className={selected ? "selected-category" : ""}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Selected Categories */}
      <div className="selected-list">
        {jobDetails.categories.length > 0 ? (
          <p>Selected Categories: {jobDetails.categories.join(', ')}</p>
        ) : (
          <p>No categories selected.</p>
        )}
      </div>

      {/* Clear Button */}
      <button type="button" onClick={clearCategories}>
        Clear Categories
      </button>

      {/* Submit */}
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobFormPrc;