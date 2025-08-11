import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const projectPaths = ["/thecollective", "/landokoop", "/band3", "/band4"];
  const isProjectActive = projectPaths.includes(location.pathname);

  return (
    <nav className="navbar navbar-expand-lg mb-5 border-bottom shadow">
      <div className="container">
        <NavLink to="/" className="navbar-brand m-0">
          <h1 className="display-5">Joe Orlando Music</h1>
        </NavLink>
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
