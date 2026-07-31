import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { certifications } from "../data/certifications";
import "../styles/certifications.css";

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="container">

        {/* Section Heading */}

        <motion.div
          className="cert-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h5>TRAINING & CERTIFICATION</h5>

          <h2>Professional Training</h2>

          <p>
            My technical foundation was built through structured learning,
            practical assignments, and hands-on full-stack projects that
            strengthened both frontend and backend development skills.
          </p>
        </motion.div>

        {/* Training Card */}

        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            {/* Header */}

            <div className="cert-header">

              <div className="cert-icon">
                <FaCertificate />
              </div>

              <div>

                <span className="cert-duration">
                  {cert.duration}
                </span>

                <h3>{cert.title}</h3>

                <h4>{cert.institute}</h4>

              </div>

            </div>

            {/* Description */}

            <p className="cert-description">
              {cert.description}
            </p>

            {/* Course Modules */}

            <div className="cert-section-title">
              <h5>Course Modules</h5>
            </div>

            <div className="modules-grid">

              {cert.modules.map((module, index) => {

                const Icon = module.icon;

                return (

                  <div
                    key={index}
                    className="module-card"
                  >

                    <h6>

                      <span className="module-icon">
                        <Icon />
                      </span>

                      {module.title}

                    </h6>

                    <div className="module-skills">

                      {module.skills.map((skill, i) => (

                        <span
                          key={i}
                          className="module-badge"
                        >
                          {skill}
                        </span>

                      ))}

                    </div>

                  </div>

                );

              })}

            </div>

            {/* Course Outcomes */}

            <div className="cert-section-title mt-5">
              <h5>Course Outcomes</h5>
            </div>

            <div className="outcomes-grid">

              {cert.outcomes.map((outcome, index) => (

                <div
                  key={index}
                  className="outcome-item"
                >

                  <FaCheckCircle className="outcome-icon" />

                  <span>{outcome}</span>

                </div>

              ))}

            </div>

            {/* Button */}

            <div className="text-center mt-5">

              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-info btn-lg"
              >

                View Certificate

                <FaExternalLinkAlt className="ms-2" />

              </a>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Certifications;