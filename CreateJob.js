import React from 'react';

const CreateJob = () => {
  let jobCount = 0;

  const handleAddJob = () => {
    jobCount++;
    console.log('New job count:', jobCount);
  };

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
};

export default CreateJob;


