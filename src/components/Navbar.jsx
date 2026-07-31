import { useState } from "react";
import "./../styles/navbar.css";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">

        <a className="navbar-brand fw-bold fs-3" href="#home">
          SG
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            expanded ? "show" : ""
          }`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <a
                href="/resume/Shashank_Godiyal_Resume.pdf"
                className="btn btn-primary px-4"
                download
              >
                Resume
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;