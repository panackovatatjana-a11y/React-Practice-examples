import React from 'react';

const JobBoard = () => {
    const companyName = "TechCorporation";
    const jobCount = 5;
     //We can change this value to test different scenarios

    const getJobMessage = () => {
        return jobCount === 0
        ? `No jobs to schedule  today`
        : `Jobs running today from bot: ${jobCount}`;
        //Implement the function
        //If JobCount is 0, return  "No jobs to schedule today"
        //Otherwise, return "Jobs running today from a bot: ${jobCount}";
    };

    return (
        <div>
            <h1>{companyName}</h1>
            <p>{getJobMessage()}</p>
            {/*Bonus: simple calculation*/}
            <p>Expected jobs next week: {jobCount * 1.5}</p>

        </div>
    );
};

export default JobBoard;
