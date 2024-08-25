import { Link } from "react-router-dom";

const NavBar = () => {
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
              <Link to="/" className="nav-link fs-5">
                Home
              </Link>
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
                  <Link to="/about" className="dropdown-item">
                    The Collective
                  </Link>
                </li>
                <li>
                  <Link to="/shows" className="dropdown-item">
                    Lando-Koop
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Band 3
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Band 4
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/shows" className="nav-link fs-5">
                Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/music" className="nav-link fs-5">
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link fs-5">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
