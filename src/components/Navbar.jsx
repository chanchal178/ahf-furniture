
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        AHF <span>FURNITURE</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/projects">Our Projects</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
