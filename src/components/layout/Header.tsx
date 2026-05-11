import { Link, useLocation } from "react-router-dom";
import "../../styles/Header.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Events", path: "/events" },
  { label: "About", path: "/about" },
  { label: "Clients", path: "/clients" },
  { label: "Resources", path: "/resources" },
];

function Header() {
  const location = useLocation();

  return (
    <div id="Header">
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src="/images/ACM-Design-Logo.png" className="header__logo" alt="ACM Design" />
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`header__link${location.pathname === path ? ' header__link--active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a className="header__join">Join Us</a>
    </div>
  );
}

export default Header;
