import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <h2 style={{ backgroundColor: "gray", textAlign:'center', maxWidth:'200px', 
                padding:'10px 2px', marginLeft: '180px', borderRadius:'10px'}}>Counter</h2>
            <p className="counter-display">Count: {count}</p>
            <button className="counter-button" onClick={increment}>Increment</button>     
            <button className="counter-button" onClick={reset}>Reset</button>  
            <button className="counter-button" onClick={decrement}>Decrement</button>
           
        </div>
    );
}

export default Counter;