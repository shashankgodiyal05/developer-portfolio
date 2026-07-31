import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Section Heading */}

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h5>CONTACT</h5>

          <h2>Let's Build Something Together</h2>

          <p>
            Whether you have a project, an opportunity, or simply want to
            connect, I'd be happy to hear from you.
          </p>
        </motion.div>

        <div className="row align-items-start gy-5">

          {/* LEFT SIDE */}

          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">

              <h3>Hi, I'm Shashank 👋</h3>

              <p>
                Thank you for taking the time to explore my portfolio.
                I'm passionate about building responsive, user-friendly web
                applications using React, Django, and modern web technologies.
                Whether you have a project in mind, a job opportunity, or
                simply want to connect, I'd be happy to hear from you.
              </p>

              {/* Contact Cards */}

              <div className="contact-grid">

                <a
                  href="mailto:godiyalshashank@gmail.com"
                  className="contact-card"
                >
                  <FaEnvelope className="contact-icon" />

                  <div>
                    <h6>Email</h6>
                    <span>godiyalshashank@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://github.com/shashankgodiyal05"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <FaGithub className="contact-icon" />

                  <div>
                    <h6>GitHub</h6>
                    <span>github.com/shashankgodiyal05</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/shashank-godiyal-9bbb46193/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <FaLinkedin className="contact-icon" />

                  <div>
                    <h6>LinkedIn</h6>
                    <span>Connect with me</span>
                  </div>
                </a>

                <div className="contact-card">
                  <FaMapMarkerAlt className="contact-icon" />

                  <div>
                    <h6>Location</h6>
                    <span>Vaishali, Ghaziabad, India</span>
                  </div>
                </div>

              </div>

              {/* Availability */}

              <div className="availability-card">

                <span className="status-dot"></span>

                <div>

                  <h5>Open to Opportunities</h5>

                  <p>
                    Looking for Frontend, React.js and Full Stack
                    Developer roles.
                  </p>

                </div>

              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <form className="contact-form">

              <h3>Send a Message</h3>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
              ></textarea>

              <button
                type="submit"
                className="btn btn-info"
              >
                <FaPaperPlane />

                <span>Send Message</span>

                <FaArrowRight />
              </button>

              <small>
                I usually respond within 24–48 hours.
              </small>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;