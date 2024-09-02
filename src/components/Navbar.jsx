import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const projectPaths = ["/thecollective", "/landokoop", "/band3", "/band4"];
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link fs-5"
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
                  <NavLink
                    to="/thecollective"
                    className="dropdown-item"
                  >
                    The Collective
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/landokoop"
                    className="dropdown-item"
                  >
                    Lando-Koop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/band3" className="dropdown-item">
                    Band 3
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/band4" className="dropdown-item">
                    Band 4
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to="/shows"
                className="nav-link fs-5"
              >
                Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/music"
                className="nav-link fs-5"
              >
                Music
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link fs-5"
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
