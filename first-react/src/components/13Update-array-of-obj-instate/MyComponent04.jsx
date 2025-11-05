import React, { useState } from "react";

function MyComponent04() {
    const [cars, setCars] = useState([]);
    const [carYear,setYear] = useState( new Date().getFullYear() );
    const [carMake,setMake] = useState("");
    const [carModel,setModel] = useState("");

    function handleAddCar() {
        const newCar = {  year: carYear, 
                          make: carMake, 
                          model: carModel };
        setCars(prevCars => [...prevCars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

        }

      function handleRemoveCar(index) {
        setCars(cars.filter((_element, i) => i !== index));
    }  
    function handleYearChange(event) {
        setYear(event.target.value);
    } 
    
    function handleMakeChange(event) {
        setMake(event.target.value);
    }
    function handleModelChange(event) {
        setModel(event.target.value);
    }


    return (
    <div>
            <h2>List of the Cars </h2>
        <ul>
            {cars.map((car, index) => (
                <li key={index} onClick={()=> handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
            </li>
            ))}
        </ul>
  
      <input type="number" value={carYear} placeholder="Enter the car year"
      onChange={handleYearChange}/><br/>

      <input type="text" value={carMake} placeholder="Enter the car make"
      onChange={handleMakeChange}/><br/>

      <input type="text" value={carModel} placeholder="Enter the car model"
      onChange={handleModelChange}/><br/>

      <button onClick={handleAddCar}>Add car</button>
    </div>
    )
}

export default MyComponent04;