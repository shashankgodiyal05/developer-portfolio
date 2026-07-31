import {
  FaGlobe,
  FaServer,
  FaDatabase,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

export const certifications = [
  {
    id: 1,

    title: "Python Full Stack Development",

    institute: "Ducat India",

    duration: "2024 – 2025",

    description:
      "Successfully completed a one-year professional training program focused on full-stack web development through hands-on learning, practical assignments, and real-world projects.",

    modules: [
      {
        icon: FaGlobe,
        title: "Frontend Development",
        skills: [
          "HTML5",
          "CSS3",
          "Bootstrap",
          "JavaScript",
          "React",
        ],
      },

      {
        icon: FaServer,
        title: "Backend Development",
        skills: [
          "Python",
          "Django",
          "REST API Development",
        ],
      },

      {
        icon: FaDatabase,
        title: "Database",
        skills: [
          "MySQL",
        ],
      },

      {
        icon: FaTools,
        title: "Development Tools",
        skills: [
          "Git",
          "GitHub",
          "VS Code",
          "Postman",
        ],
      },

      {
        icon: FaLaptopCode,
        title: "Practical Learning",
        skills: [
          "Responsive Web Applications",
          "CRUD Operations",
          "Authentication",
          "REST API Integration",
          "Component-Based Development",
        ],
      },
    ],

    outcomes: [
      "Built responsive web applications using React.",
      "Developed backend applications with Django and Python.",
      "Created and consumed REST APIs.",
      "Worked with relational databases using MySQL.",
      "Used Git & GitHub for version control.",
      "Completed hands-on projects following full-stack development practices.",
    ],

    certificateLink: "#",
  },
];