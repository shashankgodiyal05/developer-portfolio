import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* Brand */}

        <div className="footer-brand">

          <h2>
            Shashank
            <span> Godiyal</span>
          </h2>

          <p>
            Building responsive and modern web applications
            using React, Django and JavaScript.
          </p>

        </div>

        {/* Social */}

        <div className="footer-social">

          <a
            href="mailto:godiyalshashank@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/shashankgodiyal05"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shashank-godiyal-9bbb46193/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Navigation */}

        <ul className="footer-links">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#experience">Experience</a></li>

          <li><a href="#certifications">Training</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Shashank Godiyal.
            All Rights Reserved.
          </p>

          <a
            href="#home"
            className="back-top"
          >
            Back to Top

            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;