import styles from './Button.module.css';

function Styling01() {

  // You can use regular JS comments here (outside the return)
  //return(<button className={styles.button}>Click me</button>)

  return (
    <>
      <p className={styles['info-text']}>
        <b>  1. Inline CSS -</b> directly in the component using style attribute/inline style.<br />

        {/* This is the correct JSX way to comment out an element.
                    It uses curly braces and the JavaScript block comment syntax.
                */}
        {/* <p style={{ backgroundColor: "gray" }}>inline css</p> */}

        <p> Styles applied directly to the element using the style attribute, requiring a JavaScript object.</p>

        <b> 2. Internal CSS - </b> using module css file & import "styles" from .module.css to .jsx .
        e.g import styles from './Button.module.css' to Styling01.jsx<br />
        <p>Styles defined in a file named *.module.css and imported as an object (styles). Classes are unique/scrambled.</p>


        <b>  3. External CSS -</b> using global css file e.g. index.css <br />
        <p>Styles defined in a simple .css file (like index.css) that affect the entire application.</p>
      </p>
    </>
  )

}

export default Styling01