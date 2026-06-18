import React, { useState } from 'react';
    const DynamicForm = () => {
    console.log("Component rendered"); // Shows every render
    //  1. Initialize state here
    const [inputValue, setInputValue] = useState("");
    const [submittedItems, setSubmittedItems] = useState([]);
    const minLength = 3; // Valuation rule
    
    //  2. Update state on input change
    const handleInputChange = (event) => {
    console.log("Input changes", event.target.value);
//Update state based on input change
        setInputValue(event.target.value);
    };

// 3. Reset input

const handleReset = () => {
    console.log("Input reset");
    setInputValue("");
    // Reset the input value
};

// Bonus submit input to list
const handleSubmit = () => {
    if (inputValue.length < minLength) {
        console.log("Validation failed");
        return;
    }
    console.log("Item submitted:", inputValue);
    setSubmittedItems([...submittedItems, inputValue]);
    setInputValue("");
};
const isValid = inputValue.length >= minLength;



return (
    <div>
    <h1>Dynamic Form</h1>

    <input type="text"
           value={inputValue}
           onChange={handleInputChange}
           placeholder="Type something..."
    />
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleSubmit}>Submit</button>

    {/* Validation message */}
    {!isValid && inputValue.length > 0 && (
        <p style={{color: "red"}}>Input must be at least {minLength} characters long</p>
    )}

    { /* 4. Display current input*/ }
     <div>
       <h2>Current Input</h2>
       <p>{inputValue}</p>
       <p>Character Count: {inputValue.length}</p>
     </div>

     {/* Bonus: Submitted items */}
     <div>
        <h2>Submitted Items</h2>
        <ul>
            {submittedItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
     </div>

    </div>
);



};

export default DynamicForm;
