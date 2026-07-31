import { motion } from "framer-motion";
import { experience } from "../data/experience";
import "../styles/experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="container">

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h5>EXPERIENCE</h5>

          <h2>Professional Journey</h2>

          <p>
            My professional experience has strengthened my communication,
            coordination, stakeholder management, and problem-solving skills,
            while I continue building expertise in modern web development.
          </p>

        </motion.div>

        <div className="timeline">

          {experience.map((job, index) => (

            <motion.div
              key={job.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
            >

              <div className="timeline-dot">
                {job.icon}
              </div>

              <div className="experience-card">

                <span className="duration">
                  {job.duration}
                </span>

                <h3>{job.role}</h3>

                <h4>{job.company}</h4>

                <ul>

                  {job.responsibilities.map((item, i) => (

                    <li key={i}>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;