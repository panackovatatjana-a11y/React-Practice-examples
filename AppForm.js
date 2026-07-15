
import React, { useState } from "react";
import "./AppForm1.css";
import FormButton from "./FormButton";

export const AppForm = () => {
  const[activity, setActivity]=useState("")
  const [status, setStatus]= useState("")
  const callChangeTextFunc=(e)=>{
    setActivity(e.target.value)
  }
  
  const callStatusChangeFun=(e)=>
    setStatus(e.target.value)
  console.log(activity)
  return (
    <div className="form-header">
      <form>
        <input
          type="text"
          className="bot-in"
          placeholder="Enter your name"
          value={activity}
          onChange={callChangeTextFunc}
        />

        <div className="formdetails">
          <div className="bottomline">
            <FormButton value="Read Emails" />
            <FormButton value="Web Parsing" />
            <FormButton value="Send Emails" />
          </div>

          <div>
            <select className="jobStatus" value={status} onChange={callStatusChangeFun}>
              <option value="Start">Start process</option>
              <option value="Stopped">Stop Process</option>
              <option value="Completed">Completed process</option>
            </select>
          </div>
         
          <button type="submit" className="tag">Web Parsing</button>
        
          <button type="submit" className="submitdata"> Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppForm;
