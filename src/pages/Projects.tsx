import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

// import thumbnails
import projectAThumb from '../assets/ayth-server.jpg';
import projectBThumb from '../assets/ai.jpg';
import projectCThumb from '../assets/nuban.jpg';

const projects = [
    {
        title: 'Authorization Server',
        link: 'https://github.com/Oluwatodimu/savespendr-v2',
        description:
            'Designed and implemented a secure, custom OAuth 2.0 authorization server supporting multiple grant types for user authentication and secure service to service REST communication within a microservices architecture, with role based access control (RBAC).',
        tools: ['Spring boot', 'Keycloak', 'Docker', 'MySQL'],
        thumbnail: projectAThumb,
    },
    {
        title: 'Conversational SQL with Gemini Pro',
        link: 'https://medium.com/codex/conversational-sql-enabling-user-friendly-database-interactions-with-gemini-pro-2e26c9828723',
        description:
            'Created an application that enables non-technical professionals to interact with MySQL databases, by converting their english phrases to SQL queries using a LLM Gemini-Pro.',
        tools: ['Python', 'Streamlit', 'MySQL', 'Gemini-Pro'],
        thumbnail: projectBThumb,
    },
    {
        title: 'NUBAN Account Number Classifier',
        link: 'https://medium.com/stakefair/building-an-account-number-classifier-with-spring-boot-1ab56f4df333',
        description:
            'Created an app that classifies Nigerian NUBAN account numbers into their respective banks using a Spring Boot service, enhancing transaction routing accuracy. Also showed another application of the classification algorithm in USSD apps',
        tools: ['Java', 'Spring Boot', 'USSD'],
        thumbnail: projectCThumb,
    },
];

function Projects() {
    return (
        <>
            {/* 🔹 Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li aria-current="page">Projects</li>
                </ol>
            </nav>

            {/* 🔹 Page Heading */}
            <h1 className={styles.heading}>Projects</h1>

            {/* 🔹 Project Cards */}
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <img
                            src={project.thumbnail}
                            alt={`${project.title} thumbnail`}
                            className={styles.cardImage}
                        />
                        <h3>{project.title}</h3>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectLink}
                        >
                            View Project
                        </a>
                        <p>{project.description}</p>
                        <div className={styles.tools}>
                            {project.tools.map((tool, idx) => (
                                <span key={idx} className={styles.badge}>
                                    {tool}
                                </span>
                            ))}
                        </div>
                        <div className={styles.socialLinks}>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://medium.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Medium"
                            >
                                <i className="fab fa-medium"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Projects;
