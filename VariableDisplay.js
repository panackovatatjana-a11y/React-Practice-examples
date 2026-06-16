import React from 'react';

function VariableDisplay() {
    //Create your variable here
    let stringVar = "Welcome to React";
    let numberVar = 42;
    let booleanVar = false;
    let arrayVar = ["React", "JSX", "Variables"];
    let objectVar = { name: "John", age: 30, role: "Developer" };

    //Adding the conditional statement here

    if (Math.random() > 0.5) {
        stringVar = "Random react message";
    }

    //Simple function returning JSX

    function  shownote() {
        return <p>This is a JSX message from a function</p>;
    }

    return (
        <div>
            <h1>{stringVar}</h1>
            <p>Number: {numberVar}</p>
            <p>Boolean: {booleanVar.toString()}</p>
            <p>Array: {arrayVar.join(",")}</p>
            <p>Object Name: {objectVar.name}</p>
            <p>Object Age: {objectVar.age}</p>
            <p>Object Job: {objectVar.role}</p>

            {shownote()}
        </div>
    );
}

export default VariableDisplay;

