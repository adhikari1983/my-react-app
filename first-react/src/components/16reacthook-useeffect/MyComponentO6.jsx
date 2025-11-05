//useEffect(function, [dependencies])
import React, { useEffect } from "react";

function MyComponentO6() {
   const[width, setWidth] = React.useState(window.innerWidth);
   const[height, setHeight] = React.useState(window.innerHeight);

   window.addEventListener('resize', handleResize);

    useEffect(() => {
       document.title = `Width: ${width}px, Height: ${height}px`; 
       console.log("Event listener added")  

       return(()=>{
           window.removeEventListener('resize', handleResize);
           console.log("Event listener removed")
       })
     }, [width, height]);

     useEffect(() => {
        document.title = `${width}px - ${height}px`;
     }, [width, height]);   

   function handleResize() {
       setWidth(window.innerWidth);
       setHeight(window.innerHeight);
   }


  return (
    <div>
      <p>Width : {width}px</p>
      <p>Height : {height}px</p>
    </div>
  );
}   

export default MyComponentO6;