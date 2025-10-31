//import styles from './Button1.module.css'
//css in react 3 ways: 
// 1.inline css -> on this file means this Button1.jsx
// 2.internal css -> using module e.g. Button1.module.css
// 3.external css -> using index.css

function Button1(){

    const styles = {
  backgroundColor: "hsl(200, 100%, 50%)",
  maxWidth: "150px",
  padding: "10px 20px",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
}

//return(<button className={styles.button}>Click me</button>)
return(
  <>
  <h1 style={{backgroundColor:"gray"}}>session 3 begins - css styling types</h1>
<button style={styles}>Click me</button>
  </>
)

}


export default Button1