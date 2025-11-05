import MyComponent07 from './MyComponent07.jsx';
import styles from './MyComponent07.module.css';

function DisplayMyComponent07() {
  return (
    <div>
      <h1 style={{ backgroundColor: "gray" }}>session 19 begins - React hook useRef( )</h1>
      <p className={styles['info-text']}>
        <p>UseState() = Re-renders the component when the state value changes.</p>
        
        <p>useRef()   = "use Reference" Does not cause re-renders when its value changes.
          <ul>1. Accessing/Interacting with DOM elements</ul>
          <ul>2. Handling Focus, Animations, and Transitions</ul>
          <ul> 3. Managing Timers and Intervals </ul></p>
      </p>

      <hr />
      <MyComponent07 />
    </div>)
};

export default DisplayMyComponent07;
