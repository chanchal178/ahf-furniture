
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div>
        <h2>AHF FURNITURE</h2>
        <p>Quality. Craftsmanship. Trust.</p>
      </div>

      <div className="footer-links">

        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/projects">Our Projects</Link>
        <Link to="/contact">Contact Us</Link>

      </div>

      <p className="copyright">
        © {new Date().getFullYear()} AHF Furniture.
        All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
