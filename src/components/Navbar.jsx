import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
      <nav className="container-fluid navbar navbar-expand-sm d-flex justify-content-around align-items-center mb-5 border-bottom" data-bs-theme="dark">
        <Link to="/" className="navbar-brand m-0">
          <h1 className="display-5">Joe Orlando Music</h1>
        </Link>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <Link to="/" className="nav-link fs-5 text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link fs-5 text-white">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/shows" className="nav-link fs-5 text-white">Shows</Link>
          </li>
          <li className="nav-item">
            <Link to="/music" className="nav-link fs-5 text-white">Music</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link fs-5 text-white">Contact</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;
