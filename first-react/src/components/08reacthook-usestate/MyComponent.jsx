import React, { use, useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("guest");
    const[age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false);
 
    const updateName = () => {
        setName("bro code");
    }

    const updateAge = () => {
        setAge(25);
    }  

    const toggleStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age : {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>Employee Status :{isEmployed ? "Yes" : "No"} </p>
            <button onClick={toggleStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent;