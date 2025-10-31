import UserGreeting from "./UserGreeting.jsx";

function ConditionalRendering(){

    return(
        <>
         <h1 style={{backgroundColor:"gray"}}>session 5 begins - Conditional rendering</h1>
        <UserGreeting isLoggedIn = {true} username="Brocode" />  
        <UserGreeting isLoggedIn = {true}/>
        <UserGreeting />
        </>
    )
}

export default ConditionalRendering