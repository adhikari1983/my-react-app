//👨‍👩‍👧 Parent Component: PropsDemo.jsx

import Student from './Student.jsx'


/**
- The parent component renders multiple Student components with different props.
- The last one passes an empty string and null, which will trigger a PropTypes warning because age should be a number, not null.
 */
function PropsDemo(){
    return(
      <div>
        <h1 style={{backgroundColor:"gray"}}>session 4 begins - Props</h1>
            <Student name= "Shiva" age={30} isStudent={true}/>  
            <Student name= "Mahadev" age={1000} isStudent={false}/>
            <Student name= "Shandy" age={35} isStudent={false}/>
            <Student />      
      </div>
    );
}

export default PropsDemo