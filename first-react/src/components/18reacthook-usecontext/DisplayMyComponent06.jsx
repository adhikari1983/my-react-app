import ComponentA from './ComponentA.jsx';
import styles from './MyComponent07.module.css';

function DisplayMyComponent06() {
  return (
    <div>
      <h1 style={{ backgroundColor: "gray" }}>session 18 begins - React hook useContext( )</h1>
      <p className={styles['info-text']}>
        <p>useContext() = React Hook that allows you to share values between multiple levels of 
          components without passing props through each level.</p>

        <p> PROVIDER COMPONENT<br /><br />
          1. import ꝣ createContext ꝣ from 'react';<br />
          2. export const MyContext = createContext();<br />
          3. ◄MyContext.Provider value= ꝣ value ꝣ► <br />
          &nbsp;	&nbsp;	&nbsp; ◄Child /►<br />
          &nbsp;	&nbsp;	&nbsp; ◄/MyContext.Provider►</p>
      </p>

      <p className={styles['info-text']}>
        <p> CONSUMER COMPONENTS <br/>
         1. import React, ꝣ useContext ꝣ from 'react';<br/>
         &nbsp;  &nbsp; import ꝣ MyContext ꝣ from './ComponentA';<br/>
         2. const value = useContext(MyContext);</p>
      </p>

      <ComponentA />
      
    </div>)
};

export default DisplayMyComponent06;
