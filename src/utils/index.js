export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

import freecodecamp from "../assets/freecodecamp.jpg";
import sololearn from "../assets/sololearn.jpg";
import teamleader from "../assets/teamleader.jpg";
import ai from "../assets/AI.jpg";

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Freelance",
        icon: "https://simpleicons.org/icons/react.svg",
        iconBg: "#383E56",
        date: "2023 - Present",
        points: [
            "Building responsive and interactive user interfaces using React.js and modern CSS frameworks.",
            "Translating designs and wireframes into high-quality code.",
            "Optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Freelance",
        icon: "https://simpleicons.org/icons/nodedotjs.svg",
        iconBg: "#E6DEDD",
        date: "2023 - Present",
        points: [
            "Designing and developing scalable server-side applications and APIs.",
            "Implementing robust database schemas and management using MongoDB and MySQL.",
            "Ensuring security and data protection settings.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Projects",
        icon: "https://simpleicons.org/icons/javascript.svg",
        iconBg: "#383E56",
        date: "2024 - Present",
        points: [
            "Developing end-to-end web solutions, from database design to frontend deployment.",
            "Integrating third-party services and APIs to enhance application functionality.",
            "Managing the complete software development lifecycle.",
        ],
    },
    {
        title: "AI Automate",
        company_name: "Specialization",
        icon: "https://simpleicons.org/icons/openai.svg",
        iconBg: "#E6DEDD",
        date: "2024 - Present",
        points: [
            "Implementing AI-driven automation workflows to streamline processes.",
            "Integrating Large Language Models (LLMs) into applications for enhanced user intelligence.",
            "Scripting automation tasks using Python.",
        ],
    },
    {
        title: "Software Engineering",
        company_name: "Adama Science and Technology University (ASTU)",
        icon: "https://img.icons8.com/color/48/000000/student-center.png", // Generic education icon
        iconBg: "#383E56",
        date: "2021 - Present",
        points: [
            "Studying core software engineering principles, algorithms, and data structures.",
            "Participating in collaborative projects and coding challenges.",
            "Specializing in web technologies and artificial intelligence.",
        ],
    },
];

export const certificates = [
    {
        name: "Full Stack Development",
        issuer: "freeCodeCamp",
        image: freecodecamp,
        date: "2023",
        details: "Comprehensive certification covering frontend libraries, backend API design, and deployment."
    },
    {
        name: "React + Redux",
        issuer: "SoloLearn",
        image: sololearn,
        date: "2023",
        details: "Validated expertise in React patterns, state management with Redux, and modern hooks."
    },
    {
        name: "Team Leadership",
        issuer: "Institute of Leadership",
        image: teamleader,
        date: "2022",
        details: "Core leadership skills, conflict resolution, and effective team management strategies."
    },
    {
        name: "Artificial Intelligence",
        issuer: "AI Institute",
        image: ai,
        date: "2024",
        details: "Foundational knowledge in AI concepts, machine learning models, and ethical AI application."
    },
];
