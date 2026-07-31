import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

import { projects } from "../data/projects";
import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="container">

        {/* Heading */}

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h5>PORTFOLIO</h5>

          <h2>Featured Projects</h2>

          <p>
            A selection of projects that showcase my frontend,
            full-stack and API integration skills using modern
            web technologies.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="row g-4">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              className="col-lg-6"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <div
                className={`project-card ${
                  project.featured ? "featured-card" : ""
                }`}
              >

                {/* Featured Badge */}

                {project.featured && (
                  <span className="featured-badge">
                    ⭐ Featured
                  </span>
                )}

                {/* Title */}

                <h3>{project.title}</h3>

                {/* Description */}

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="tech-stack">

                  {project.technologies.map((tech, i) => (

                    <span key={i} className="tech-badge">

                      {tech}

                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="project-buttons">

                  {project.isNextProject ? (

                    <a
                      href={project.buttonLink}
                      className="btn btn-info"
                    >
                      {project.buttonText}

                      <FaArrowRight className="ms-2" />

                    </a>

                  ) : (

                    <>

                      {project.liveLink && (

                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-info"
                        >
                          <FaExternalLinkAlt />

                          <span className="ms-2">

                            Live Demo

                          </span>

                        </a>

                      )}

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light"
                      >

                        <FaGithub />

                        <span className="ms-2">

                          GitHub

                        </span>

                      </a>

                    </>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;