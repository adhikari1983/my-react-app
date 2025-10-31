//🧩 Child Component: Student.jsx

import PropTypes from "prop-types";

/**
- props => are read only properties that are shared between components.
        => a parent component can send data to a child component. 
- props is like a method parameter in Java — it holds the data passed from the parent.
{props.name}, {props.age}, and {props.isStudent} display the data.
- The ternary props.isStudent ? "Yes" : "No" checks if isStudent is true or false.
*/ 
// function Student(props){ >>>✅ Before React 19 (React 18 and earlier) -> You’d define defaultProps outside the function:
//     return(              >>> props is one object, and React automatically merged your defaults into it before calling
//                          >>> your component.
//     <div className="student">
//         <p> Name : {props.name}</p>
//         <p> Age : {props.age}</p>
//         <p>Student: {props.isStudent ? "Yes" : "No"}</p>
//     </div>
//     );
// }

function Student({ name = "Guest", age = 0, isStudent = false }){ //>>> ✅ After React 19 (and going forward)
    return(                                  //>>> React stopped automatically merging defaultProps for function components —
                                             //>>> so now you define defaults directly inside the function parameter:
    <div className="student">               
        <p> Name : {name}</p>
        <p> Age : {age}</p>
        <p>Student: {isStudent ? "true" : "false"}</p>
    </div>
    );
}

/** 
- This tells React what type each prop should be.
- It’s a runtime type-check, similar to how Java checks variable types at compile time.
- If you pass the wrong type (like a string instead of a number), React will show a warning in the console, not an error. 
*/
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent: PropTypes.bool

}

/**
- These are fallback values if a parent component doesn’t pass the props.
- So if you write <Student /> without any props, it will display:
NOTE: React 19 simply stopped applying defaultProps on function components -> Deprecated.
*/ 
// Student.defaultProps = {
//     name : "Guest",
//     age : 0,
//     isStudent : false,
//}

export default Student