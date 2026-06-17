import React, { useState } from 'react';

const AdvancedJobCounter = () => {
  const [jobCount, setJobCount] = useState(0);

  const handleAddJob = () => {
    setJobCount(jobCount + 1);
  };

  const handleRemoveJob = () => {
    setJobCount(jobCount > 0 ? jobCount - 1 : 0);
  };

  const handleResetJobs = () => {
    setJobCount(0);
  };

  return (
    <div>
      <h1>Advanced Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      
      <button onClick={handleAddJob}>Add Job</button>
      <button onClick={handleRemoveJob}>Remove Job</button>
      <button onClick={handleResetJobs}>Reset</button>
      
      {jobCount === 0 && <p>No jobs available</p>}
      {jobCount > 0 && jobCount < 5 && <p>You have {jobCount} job(s)</p>}
      {jobCount >= 5 && <p>You have many jobs!</p>}
    </div>
  );
};

export default AdvancedJobCounter;