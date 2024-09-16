import { Link } from "react-router-dom";
import "../styles.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
