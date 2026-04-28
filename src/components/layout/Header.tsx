import { Link } from "react-router-dom";
import "../../styles/Header.css";

function Header() {
  return (
    <nav id="Header">
      <Link to="/">
        <img src="/public/images/ACM-Design-Logo.png" alt="ACM Design Logo" />
      </Link>
      <ul className="Header-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
