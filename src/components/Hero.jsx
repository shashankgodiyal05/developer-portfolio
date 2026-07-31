import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload, FaGithub } from "react-icons/fa";
import CodeEditor from "./CodeEditor";

import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

        <div className="blur blur1"></div>

        <div className="blur blur2"></div>

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT */}

          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h5 className="text-info">Hello, I'm</h5>

            <h1 className="display-3 fw-bold">

              Shashank

              <span className="text-info"> Godiyal</span>

            </h1>

            <TypeAnimation
              sequence={[
                "React Developer",
                2000,
                "Python Developer",
                2000,
                "Frontend Developer",
                2000,
                "Django Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing"
            />

            <p className="mt-4 hero-text">

              Python Full Stack certified developer with hands-on
              experience building responsive web applications using
              React, Django, JavaScript, and REST APIs.

              Currently working at Avanati Overseas Pvt. Ltd.
              Previously worked at Tech Mahindra in Supply Chain
              Operations.

            </p>

            <div className="mt-4 d-flex gap-3">

              <a href="#contact" className="btn btn-info btn-lg">

                Hire Me

              </a>

              <a
                href="/resume/Shashank_Godiyal_Resume.pdf"
                download
                className="btn btn-outline-light btn-lg bg-grey "
              >

                <FaDownload />

                Resume

              </a>

              <a
                href="https://github.com/shashankgodiyal05"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info btn-lg"
              >

                <FaGithub />

              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
                className="col-lg-6 mt-5 mt-lg-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                >
                <CodeEditor />
                
            </motion.div>

        </div>

      </div>

      <div className="hero-wave">
  <svg
    viewBox="0 0 1440 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#0b1220"
      d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,69.3C1200,85,1320,107,1380,117.3L1440,128L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"
    />
  </svg>
</div>


    </section>
  );
}

export default Hero;