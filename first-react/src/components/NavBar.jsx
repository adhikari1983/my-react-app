import { Link } from "react-router-dom";
// This NavBar.jsx is used in App.jsx to navigate b/w different components/pages.
// Tt listens to different routes defined in App.jsx and allows users to click 
// and navigate to those routes.

const navLinks = [
  { to: "/", name: "Home" },
  { to: "/card", name: "Card" },
  { to: "/display-buttons", name: "CSS Styling Types" },
  { to: "/props", name: "Props Demo" },
  { to: "/conditional", name: "Conditional Rendering" },
  { to: "/list", name: "Rendering Lists" },
  { to: "/button", name: "Click Events" },
  { to: "/usestate", name: "useState" },
  { to: "/counter", name: "Project : 1 Counter App" },
  { to: "/onchange", name: "OnChange" },
  { to: "/colorpicker", name: "Project : 2 Color Picker" },
  { to: "/usestate-arrays", name: "Update Arrays" },
  { to: "/usestate-objects", name: "Update Objects" },
  { to: "/usestate-array-of-objects", name: "Update Array of Objects" },
  { to: "/useeffect", name: "useEffect" },
  { to: "/usecontext", name: "useContext" },
  { to: "/useref", name: "useRef" },
];

function Navbar() {
  const navStyle = {
    display: "flex",
    flexDirection: "column", // vertical layout
    alignItems: "flex-start",
    gap: "0.75rem",
    background: "linear-gradient(135deg, #85a5c5ff, #5281bfff)", // soft gray-blue gradient
    padding: "1.5rem",
    borderRadius: "10px",
    width: "300px", // like a neat sidebar width
    minHeight: "70vh", // full height if used as a sidebar
    boxShadow: "0 2px 8px hsla(343, 40%, 50%, 0.10)",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#FFFFFF", // whit for text initially when the page loads for the first time or on refresh
    fontWeight: "500",
    fontSize: "1.5rem",
    width: "75%",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    //how to write text not to break but on smae line
    whiteSpace: "nowrap",
    // overflow: "hidden",
    // textOverflow: "ellipsis",
  };

  const linkHover = (e, hover) => {
    e.target.style.background = hover ? "#383899ff" : "transparent";
    e.target.style.color = hover ? "#659660ff" : "#FFFFFF";
  };

  return (
    <nav style={navStyle}>
      {/* Use .map() to iterate over the data and generate the JSX */}
      {
        navLinks.map((link) =>        // Essential for list items in React w/its key prop
          <Link
            key={link.to}
            to={link.to}
            style={linkStyle}
            onMouseOver={(e) => linkHover(e, true)}
            onMouseOut={(e) => linkHover(e, false)}
          >
            {link.name}
          </Link>
        )
      }
    </nav>


  );
  {/*return (
    <nav style={navStyle}>
       List of navigation links 
      <Link to="/" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        Home
      </Link>
      <Link to="/card" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        Card
      </Link>
      <Link to="/props" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        Props
      </Link>
      <Link to="/conditional" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        Conditional
      </Link>
      <Link to="/list" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        List
      </Link>
      <Link to="/button" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        Button
      </Link>
      <Link to="/usestate" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        useState
      </Link>
      <Link to="/onchange" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        onChange
      </Link>
      <Link to="/colorpicker" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        Color Picker
      </Link>
      <Link to="/useeffect" style={linkStyle} onMouseOver={(e) => linkHover(e, true)} onMouseOut={(e) => linkHover(e, false)}>
        useEffect
      </Link>
    </nav>);*/}
}

export default Navbar;
