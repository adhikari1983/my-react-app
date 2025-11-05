import React, { useState, useEffect } from "react";


function MyComponent05() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(()=>{
    //     document.title = `Count is ${count}`;
    // }); 

    // useEffect(()=>{
    //     document.title = `My counter program`;
    // }, []);

    useEffect(() => {
        document.title = `Count: is ${count} ${color}`;
    }, [count, color]);
    
    function addCount() {
        setCount(c => c + 1);

    }
    function subtractCount() {
        setCount(c => c - 1);
    }   

    function changeColor() { 
        setColor(c => c === "green" ? "red" : "green");
        document.body.style.backgroundColor = newColor;
    }
    return (
        <div>
            <p style={{color: color}}>Count : {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}
export default MyComponent05;
