import "./NavBar.css";
import Button from "../button/Button";
import Logo from "../../Components/Logo/Logo";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navigation">
      {/* Logo Part */}
      <Logo />
      <ul>
        {/* Navigation Part */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <NavLink to="/contact">
          <Button>Get in Touch</Button>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
