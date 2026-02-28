import { Link } from 'react-router-dom';
import styles from './Work.module.css';

// import images
import flutterwaveThumb from '../assets/flutterwave-thumb.jpg';
import polarisThumb from '../assets/polaris-thumb.jpg';
import stakefairThumb from '../assets/stakefair-thumb.jpg';
// import savespendrThumb from '../assets/savespendr-thumb.jpg';
// import fintrakThumb from '../assets/fintrak-thumb.jpg';
// import woodcoreThumb from '../assets/woodcore-thumb.jpg';

const companies = [
    {
        name: 'Flutterwave',
        website: 'https://flutterwave.com/ng/',
        location: 'San Fransisco, USA',
        role: 'Backend Engineer (Full-time)',
        description:
            'Backend services for a global payments platform. Built centralized auth, compliance screening for 150K+ entities daily, and real-time decisioning that cut costs by 50%. Caching and fault-tolerant design.',
        thumbnail: flutterwaveThumb,
    },
    {
        name: 'Polaris Digitech Limited',
        website: 'https://polarisdigitech.net/',
        location: 'Lagos, Nigeria',
        role: 'Backend Engineer (Full-time)',
        description:
            'Backend systems for enterprise GIS clients. Built CI/CD pipelines for GCP App Engine and delivered security upgrades for an Address Management Platform, reducing brute-force attack risk.',
        thumbnail: polarisThumb,
    },
    {
        name: 'Stakefair',
        website: 'https://www.linkedin.com/company/stakefair/',
        location: 'Senkang, Singapore',
        role: 'Backend Engineer (Full-time)',
        description:
            'Financial services processing $2M+ in transactions. Led monolith-to-microservices migration and built Docker-based deployment with GitHub Actions CI/CD for improved reliability.',
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

            <div className={styles.pageContent}>
                <h1 className={`${styles.heading} pageHeading`}>Work Experience</h1>
                <div className={styles.workGrid}>
                {companies.map((company, index) => (
                    <div key={index} className={styles.card}>
                        <img
                            src={company.thumbnail}
                            alt={`${company.name} thumbnail`}
                            className={styles.cardImage}
                        />
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
            </div>
        </>
    );
}

export default Work;
