import { motion } from "framer-motion";
import { skills } from "../data/skills";
import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="container">

        {/* Section Heading */}

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h5>MY SKILLS</h5>

          <h2>Skills & Technologies</h2>

          <p>
            Technologies and tools I use to build responsive,
            scalable and user-friendly web applications.
          </p>

        </motion.div>

        <div className="row g-4">

          {skills.map((category, index) => {

            const CategoryIcon = category.categoryIcon;

            return (

              <motion.div
                key={index}
                className={
                  category.title === "Frontend Development" ||
                  category.title === "Backend Development"
                    ? "col-12"
                    : "col-md-6"
                }
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >

                <div className="skill-card">

                  {/* Header */}

                  <div className="card-header-custom">

                    <div className="card-icon">

                      <CategoryIcon />

                    </div>

                    <div>

                      <h3>{category.title}</h3>

                      <p>{category.description}</p>

                    </div>

                  </div>

                  {/* Skills */}

                  <div className="skill-grid">

                    {category.items.map((skill, i) => {

                      const Icon = skill.icon;

                      return (

                        <motion.div
                          key={i}
                          className="skill-item"
                          whileHover={{
                            y: -6,
                            scale: 1.05,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                        >

                          <div
                            className="skill-icon"
                            style={{
                              color: skill.color,
                            }}
                          >
                            {Icon ? <Icon /> : "🔗"}
                          </div>

                          <span>{skill.name}</span>

                        </motion.div>

                      );

                    })}

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>
        


      </div>

    </section>
  );
}

export default Skills;