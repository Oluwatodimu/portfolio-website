import { Link } from 'react-router-dom';
import styles from './Work.module.css';

// import images
import payuThumb from '../assets/payu-thumb.jpg';
import flutterwaveThumb from '../assets/flutterwave-thumb.jpg';
import polarisThumb from '../assets/polaris-thumb.jpg';
import stakefairThumb from '../assets/stakefair-thumb.jpg';
// import savespendrThumb from '../assets/savespendr-thumb.jpg';
// import fintrakThumb from '../assets/fintrak-thumb.jpg';
// import woodcoreThumb from '../assets/woodcore-thumb.jpg';

const companies = [
    {
        name: 'PayU',
        website: 'https://corporate.payu.com/',
        location: 'Amsterdam, North Holland',
        role: 'Backend Engineer (Full-time)',
        description:
            'Scaled a $150K+/day transaction platform 1.5× with an asynchronous, event-driven architecture while cutting latency 30% through caching and database optimizations. Designed real-time monitoring that halved critical incident response time and strengthened overall reliability through targeted DevOps improvements.',
        thumbnail: payuThumb,
    },
    {
        name: 'Flutterwave',
        website: 'https://flutterwave.com/ng/',
        location: 'San Fransisco, USA',
        role: 'Backend Engineer (Full-time)',
        description:
            'Developed secure, high-performance backend services for a global financial platform. Built centralized authorization, a compliance app screening 150K+ entities daily, and a real-time decisioning system handling millions of transactions for instant risk assessment and 50% lower costs. Boosted performance and resilience with advanced caching, parallel processing, and fault-tolerant design.',
        thumbnail: flutterwaveThumb,
    },
    {
        name: 'Polaris Digitech Limited',
        website: 'https://polarisdigitech.net/',
        location: 'Lagos, Nigeria',
        role: 'Backend Engineer (Full-time)',
        description:
            'Developed and maintained backend systems for enterprise GIS clients, creating CI/CD pipelines that automated build, test, and deployment to GCP App Engine, boosting release speed and reliability. Implemented key security upgrades for an Address Management Platform, cutting brute-force attack risk and improving overall performance.',
        thumbnail: polarisThumb,
    },
    {
        name: 'Stakefair',
        website: 'https://www.linkedin.com/company/stakefair/',
        location: 'Senkang, Singapore',
        role: 'Backend Engineer (Full-time)',
        description:
            'Played a pivotal role in developing financial services processing $2M+ in user transactions and in migrating from a monolithic system to microservices for improved scalability. Designed and implemented Docker-based containerization and automated CI/CD pipelines with GitHub Actions, increasing deployment frequency, stability, and overall system reliability.',
        thumbnail: stakefairThumb,
    },
    // {
    //     name: 'Woodcore',
    //     website: 'https://www.woodcore.co/',
    //     location: 'San Fransisco, USA',
    //     role: 'Backend Engineer (Contract)',
    //     description:
    //         'Built and maintained scalable backend services and REST APIs. Implemented secure authentication and authorization, containerized applications for efficient multi-environment deployment, and developed CI/CD pipelines for automated, zero-downtime releases. Set up monitoring and logging and deployed microservices on AWS ECS for scalable, reliable operations.',
    //     thumbnail: woodcoreThumb,
    // },
    // {
    //     name: 'Savespendr',
    //     website: 'https://savespendr-web.vercel.app/',
    //     location: 'Lagos, Nigeria',
    //     role: 'Backend Engineer, Lead (Contract)',
    //     description:
    //         'Orchestrated the full design, development, and infrastructure setup for the platform, architecting cloud infrastructure and deploying a containerized service on AWS ECS with Fargate. Built automated CI/CD pipelines and followed SOLID principles, thorough code reviews, and OWASP security standards to deliver a secure, scalable, and maintainable foundation.',
    //     thumbnail: savespendrThumb,
    // },
    // {
    //     name: 'Fintrak Software Limited',
    //     website: 'https://www.fintraksoftware.com/',
    //     location: 'Lagos, Nigeria',
    //     role: 'Backend Engineer (Full-time)',
    //     description:
    //         'Contributed to a leading credit scoring platform by designing and delivering robust RESTful APIs that powered key backend services. Built, trained, and optimized machine learning models to predict borrower risk, and improved data pipelines and system performance to support accurate, scalable credit assessments.',
    //     thumbnail: fintrakThumb,
    // },
];

function Work() {
    return (
        <>
            {/* 🔹 Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li aria-current="page">Work</li>
                </ol>
            </nav>

            {/* 🔹 Heading */}
            <h1 className={styles.heading}>Work Experience</h1>

            {/* 🔹 Work Grid */}
            <div className={styles.workGrid}>
                {companies.map((company, index) => (
                    <div key={index} className={styles.card}>
                        <img src={company.thumbnail} alt={`${company.name} thumbnail`} />
                        <div className={styles.cardContent}>
                            <h3>{company.name}</h3>
                            <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.companyLink}
                            >
                                Visit Website
                            </a>
                            <p className={styles.meta}>
                                <strong>Location:</strong> {company.location}
                            </p>
                            <p className={styles.meta}>
                                <strong>Role:</strong> {company.role}
                            </p>
                            <p>{company.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Work;
