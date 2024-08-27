import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const projectPaths = ["/about"]
  return (
    <nav className="navbar navbar-expand-lg mb-5 border-bottom shadow">
      <div className="container">
        <Link to="/" className="navbar-brand m-0">
          <h1 className="display-5">Joe Orlando Music</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-link fs-5"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                className="nav-link fs-5"
              >
                Projects
              </a>
              <ul className="dropdown-menu bg-black">
                <li>
                  <Link
                    to="/about"
                    className="dropdown-item text-body-secondary"
                  >
                    The Collective
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shows"
                    className="dropdown-item text-body-secondary"
                  >
                    Lando-Koop
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item text-body-secondary">
                    Band 3
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item text-body-secondary">
                    Band 4
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to="/shows"
                className="nav-link fs-5"
                activeClassName="active"
              >
                Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/music"
                activeClassName="active"
                className="nav-link fs-5"
              >
                Music
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link fs-5"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
