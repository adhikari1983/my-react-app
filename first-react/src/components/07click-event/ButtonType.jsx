import ProfilePic from "./ProfilePic";

function ButtonType() {
    //.....................w/o parameter ...........................
    const handleClick1 = () => {
        console.log("Button was clicked!");
    }

    //.....................w/parameter ...........................     
    const handleClick2 = (name) => {
        console.log(`${name} + clicked the button!`); // used template literals `` to embed variable in string.
    }
    //.....................w/the condition ...........................
    let count = 0;
    const handleClick3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name}  clicked the button ${count} times!`);
        } else {
            console.log(`${name}  stop clicking the button!`);
        }
    }
    //.....................for event handling...............................

    const handleClick4Event = (event) => {
        event.target.textContent = "ouch 😇";
    }
    return (
        <div>
            <h1 style={{backgroundColor:"gray"}}>session 7 begins - Click Event</h1>
            <button onClick={handleClick1}>Click me B1 😊</button>
            <button onClick={() => handleClick2("bro")}>Click me B2 😊</button>

            <p>when you have the parameter in call back function, you need to use arrow function to call it.</p>

            <button onClick={() => handleClick3("bro")}>Click me B3😊</button>
            
            <button onClick={(event) => handleClick4Event(event)}>Click me 4Event 😊</button>

            <button onDoubleClick={(event) => handleClick4Event(event)}>Click me 4DoubleClick 😊</button>

            <ProfilePic/>
        </div>
    )

}
export default ButtonType;