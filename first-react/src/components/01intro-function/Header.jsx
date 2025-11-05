function Header() {

    return (
        <header>
            <h1 style={{ backgroundColor: "gray" }}>session 1 begins - Introduction</h1>

            <nav>
                <ul style={{
                    listStyle: 'none', // Removes the bullet points
                    padding: 0,         // Removes default padding
                    display: 'flex',    // ACTIVATES FLEXBOX
                    gap: '20px'         // Adds space between the list items
                }}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <hr></hr>
            </nav>
            <h1>React Introduction</h1>
            <b>
                React is a javscript library not the framework that's used to easily build and
                arrange user interfaces for web application.<br/>
                React focuses on building a web application using these thing called component.
                A component is a self contained sction of that code that function as function as
                a reusable building blocks.
            </b>
        </header>
    );

}

export default Header 