import PropTypes from "prop-types";


//function UserGreeting(props) { >>>>>  w/ props, & no default props 
function UserGreeting({ isLoggedIn = false, username = "Guest" }) { // >>> w/o props means destructuring it 
   /**
    if (props.isLoggedIn) {

        return (
            <h2>Welcome {props.username}</h2>
        )
    }
    else {
        return <h2>Please log in to continue</h2>
    }

    this ternary operater use is ver vervose
    return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> :
                              <h2 className="login-message">Please log in to continue</h2> 
    )*/

    //const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>  >>>  w/ props, & no default props 
    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>       // >>> w/o props means destructuring it 
    // if (props.isLoggedIn) {
    const loginMessage = <h2 className="login-message">Please log in to continue</h2>

    // return(props.isLoggedIn ? welcomeMessage : loginMessage)    >>>  w/ props, & no default props 
    return(isLoggedIn ? welcomeMessage : loginMessage)          // >>> w/o props means destructuring it 
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

export default UserGreeting