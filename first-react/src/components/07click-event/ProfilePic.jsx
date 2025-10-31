// click event - An intercation when user clicks on specific element on the web page.
// we can respond to clicks by passing a callback function to the onClick event handler attribute.
// we can define the callback function with or without parameter.
// we can also define the callback function with condition inside it.
// we can also access the event object in the callback function to get more information about the 
// event that occurred. e.g changing the border color of the ganeshHimal.webp image, when clicked.

function ProfilePic() {

    const handleClick = (e) => {
        (e).target.style = "border: 5px solid red";
    }
    return (
        <img onClick={(e) =>handleClick(e)} 
        src="./src/assets/ganeshHimal.webp" alt="profile-pic" width="200px" />
    )
}

export default ProfilePic;