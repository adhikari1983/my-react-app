import React, { useState } from "react";


function MyComponent02() {
    const [car, setCar] = useState({ year: 2018, make: "Ford", model: "mustang" });

    function handleYearChange(event) {
        //setCar({...car, year: 2025 })
        //setCar({...car, year: event.target.value })
        setCar(prevCar =>({ ...prevCar, year: event.target.value }));
    }

    function handleMakeChange(event) {
        setCar(prevCar => ({ ...car, make: event.target.value }));
    }

    function handleModelChange(event) {
        setCar(prevCar =>  ({ ...car, model: event.target.value }));
    }
    return (
        <div>
            <p>My favorite car is : {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />

        </div>
    )
}
export default MyComponent02;
