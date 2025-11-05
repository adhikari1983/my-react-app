import ComponentD from "./ComponentD";
import React, { useContext } from "react";
import { UserContext } from "./ComponentA"; 

function ComponentC() {

  const user = useContext(UserContext);

  return (
    <div className="box">
      <h2>Component C</h2>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD />
    </div>
  );
}   
export default ComponentC;