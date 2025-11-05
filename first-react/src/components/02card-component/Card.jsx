import profilePic from '/src/assets/devAvatar.webp'


function Card(){
  
return(
    <>
      <h1 style={{backgroundColor:"gray"}}>session 2 begins - Card component</h1>
    <div className="card">
        <img className="card-image" src={profilePic} alt="profile pic"></img>
        <h2 className="card-title">Learn React</h2>
        <p className="card-text">I practice React watching Bro Code 👍👍😁😁</p>
    </div>
    </>
);

}

export default Card