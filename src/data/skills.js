import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const skills = [
  {
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces.",
    categoryIcon: FaLaptopCode,
    items: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "#F7DF1E",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "#7952B3",
      },
    ],
  },

  {
    title: "Backend Development",
    description: "Developing REST APIs using Python and Django.",
    categoryIcon: FaServer,
    items: [
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "Django",
        icon: SiDjango,
        color: "#0C4B33",
      },
      {
        name: "REST API",
        icon: null,
        color: "#38BDF8",
      },
    ],
  },

  {
    title: "Database",
    description: "Managing relational databases efficiently.",
    categoryIcon: FaDatabase,
    items: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
    ],
  },

  {
    title: "Tools",
    description: "Development and collaboration tools.",
    categoryIcon: FaTools,
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#FFFFFF",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
    ],
  },
];