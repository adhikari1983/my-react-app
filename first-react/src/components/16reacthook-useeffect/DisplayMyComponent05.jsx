import styles from './MyComponent07.module.css';
import MyComponent05 from './MyComponent05.jsx';
import MyComponent06 from './MyComponentO6.jsx';

function DisplayMyComponent05() {
  return (
    <div>
      <h1 style={{ backgroundColor: "gray" }}>session 16 begins - React hook useEffect( )</h1>
      <p className={styles['info-text']}>
              <p>
                UseEffect() = React Hook that tells React to DO THIS CODE WHEN:  (pick one)<br/> 
              
                <ul>1. This component re-renders</ul>
                <ul>2. This component mounts</ul>
                <ul>3. The state of a value changes </ul>
              </p>
              
              <p>Uses : <br/>
                <ol> Event Listeners</ol>
                <ol> DOM manipulation</ol>
                <ol> Subscriptions (real-time updates) </ol>
                <ol> Fetching Data from an API </ol>
                <ol> Clean up when a component unmounts </ol>
              </p>
            </p>
      <MyComponent05 />
      <MyComponent06 />
    </div>)
};

export default DisplayMyComponent05;
