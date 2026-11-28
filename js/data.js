const portfolioData = {
    brand: {
        name: "Kshitiz.pfolio",
        fullName: "Kshitiz Jauhari",
        roleTagline: "B.Tech CSE Undergrad · Full-Stack & Problem Solving",
        location: "Bareilly, Uttar Pradesh, India"
    },
    about: {
        short:
            "B.Tech Computer Science & Engineering student at Invertis University building practical web projects with JavaScript and the MERN stack while strengthening Java and DSA.",
        full:
            "I am a first-year B.Tech Computer Science and Engineering undergraduate (2026–2030) at Invertis University with a strong interest in software development, problem-solving, and technology. I explore web development using HTML, CSS, Tailwind, JavaScript, and the MERN stack, turning ideas into functional, practical projects while building core fundamentals in Java, OOP, DBMS, and data structures.",
        resumePath: "assets/resume.pdf"
    },
    certifications: [
        {
            title: "Frontend Developer (React)",
            issuer: "HackerRank",
            date: "Oct 2026"
        },
        {
            title: "FluentEdge AI Course",
            issuer: "WeXL",
            date: "Nov 2026"
        }
    ],
    skills: [
        {
            category: "Programming Languages",
            items: ["Java", "JavaScript"]
        },
        {
            category: "Web Development",
            items: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Node.js", "Express.js", "MongoDB"]
        },
        {
            category: "Core Concepts",
            items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Problem Solving"]
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "GitHub", "VS Code", "GitHub Copilot", "Postman", "Vercel"]
        }
    ],
    projects: [
        {
            id: "argus",
            featured: true,
            status: "Prototype · Team of 6",
            title: "ARGUS — Cybercrime Intelligence Prototype",
            summary:
                "Team prototype designed to support cybercrime complaint analysis and potential cash-withdrawal location assessment.",
            highlights: [
                "Developed a Node.js server and contributed to risk-scoring logic using mock data (predictive features under active development).",
                "Contributed to MongoDB database planning/setup and collaborated on Vercel deployment."
            ],
            techStack: [
                "JavaScript",
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "HTML5",
                "Tailwind CSS",
                "Context API",
                "Google Maps"
            ],
            image: "assets/argus",
            githubUrl: "https://github.com/kshitizjauhari18/SIH-PROJECT-ARGUS-",
            liveUrl: "https://sih-project-tau-woad.vercel.app/#dashboard"
        },
        {
            id: "upcoming-1",
            featured: false,
            status: "In Progress",
            title: "Upcoming Project 02",
            summary:
                "Currently in development — full-stack web application focusing on clean architecture and practical utility.",
            highlights: [],
            techStack: ["JavaScript", "Node.js", "MongoDB"],
            image: "",
            githubUrl: "",
            liveUrl: ""
        },
        {
            id: "upcoming-2",
            featured: false,
            status: "Planned",
            title: "Upcoming Project 03",
            summary:
                "Planned build as part of my 2026 development sprint. Details and live deployment coming soon.",
            highlights: [],
            techStack: ["HTML5", "CSS3", "JavaScript"],
            image: "",
            githubUrl: "",
            liveUrl: ""
        }
    ],
    contacts: {
        email: "kshitizjauhari@gmail.com",
        linkedin: "https://www.linkedin.com/in/kshitizjauhari/",
        github: "https://github.com/kshitizjauhari18",
        leetcode: "https://leetcode.com/u/kshitiz18max/"
    }
};