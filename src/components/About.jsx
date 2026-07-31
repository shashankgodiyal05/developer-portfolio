import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";

import "../styles/about.css";

const cards = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    text: "Bachelor of Computer Applications (BCA)\nCCSU University (2021)",
  },
  {
    icon: <FaCertificate />,
    title: "Certification",
    text: "Python Full Stack Development\nDucat Institute (2022–2023)",
  },
  {
    icon: <FaBriefcase />,
    title: "Professional Experience",
    text: "Tech Mahindra & Avanati Overseas Pvt. Ltd.\nSupply Chain & Logistics Operations",
  },
  {
    icon: <FaLaptopCode />,
    title: "Career Goal",
    text: "Frontend Developer\nReact • Django • JavaScript",
  },
];

const stats = [
  {
    number: "5+",
    title: "Projects",
  },
  {
    number: "2+",
    title: "Years Professional Experience",
  },
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Open To Work",
  },
];

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h5 className="section-subtitle">
            ABOUT ME
          </h5>

          <h2 className="section-title">
            Aspiring Frontend Developer with a Strong Foundation in React & Django
          </h2>

        </motion.div>

        <div className="row align-items-center">

          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="about-text">

              I'm a <strong>BCA graduate</strong> and a
              <strong> Python Full Stack certified developer </strong>
              with hands-on experience building responsive web applications
              using <strong>React</strong>, <strong>JavaScript</strong>, 
              <strong> Django</strong>, <strong>REST APIs</strong> and
              <strong> MySQL</strong> through personal and self-driven projects.

            </p>

            <p className="about-text">

              Professionally, I have nearly two years of experience in
              backend supply chain and logistics operations at
              <strong> Tech Mahindra</strong> and currently at
              <strong> Avanati Overseas Pvt. Ltd. </strong>

              My work involves logistics coordination,
              email-based operations, stakeholder communication,
              operational reporting and maintaining data accuracy using Excel.

            </p>

            <p className="about-text">

              I'm currently focused on transitioning into a
              <strong> Frontend Developer</strong> role where I can combine my
              technical skills, problem-solving mindset and corporate experience
              to build modern, scalable and user-friendly web applications.

            </p>

          </motion.div>

          <motion.div
            className="col-lg-5 mt-5 mt-lg-0"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="row">

              {cards.map((card, index) => (

                <div className="col-md-6 mb-4" key={index}>

                  <div className="about-card">

                    <div className="card-icon">
                      {card.icon}
                    </div>

                    <h5>{card.title}</h5>

                    <p>
                      {card.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

        <motion.div
          className="row mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          {stats.map((item, index) => (

            <div className="col-6 col-md-3 mb-4" key={index}>

              <div className="stat-box">

                <h2>{item.number}</h2>

                <p>{item.title}</p>

              </div>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default About;