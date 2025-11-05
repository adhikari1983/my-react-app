import React, { useState } from "react";

function MyComponent03() {
    const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFruit() {
        const newFruit = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFruits(preFruits => [...preFruits, newFruit])
    }

    function handleRemoveFruit(index) {
        setFruits(fruits.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h2>Fruits List</h2>
            <ul>
                {fruits.map((fruit, index) => <li key={index} onClick={() => handleRemoveFruit(index)}>
                    {fruit}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter the food name" /><br />
            <button onClick={handleAddFruit}>Add Fruit</button><br />


        </div>)
}

export default MyComponent03;
