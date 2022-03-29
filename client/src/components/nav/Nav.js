import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="header">
      <div className="header__links">
        <div className="header__container">
          <Link to="/" className="header__container-link">
            Home
          </Link>
        </div>
        <div className="header__container">
          <Link to="/About" className="header__container-link">
            About Me
          </Link>
        </div>
        <div className="header__container">
          <Link to="/Projects" className="header__container-link">
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Nav;