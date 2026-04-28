import "../../styles/Header.css";

const navLinks = ["Home", "Events", "About", "Clients", "Resources"];
const activePage = "Home";

function Header() {
  return (
    <div id="Header">
      <img src="/images/ACM-Design-Logo.png" className="header__logo" alt="ACM Design" />
      <nav className="header__nav">
        <ul className="header__list">
          {navLinks.map(link => (
            <li key={link}>
              <a className={`header__link${link === activePage ? ' header__link--active' : ''}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="header__join">Join Us</a>
    </div>
  );
}
export default Header;
