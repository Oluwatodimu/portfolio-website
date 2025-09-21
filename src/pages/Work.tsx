import styles from './Work.module.css';

// import images
import payuThumb from '../assets/payu-thumb.jpg';
import flutterwaveThumb from '../assets/flutterwave-thumb.jpg';
import polarisThumb from '../assets/polaris-thumb.jpg';
import stakefairThumb from '../assets/stakefair-thumb.jpg';
import savespendrThumb from '../assets/savespendr-thumb.jpg';
import fintrakThumb from '../assets/fintrak-thumb.jpg';

const companies = [
  {
    name: 'PayU',
    website: 'https://corporate.payu.com/',
    location: 'Amsterdam, North Holland',
    role: 'Backend Engineer (Full-time)',  
    description: 'As a Backend Engineer at PayU, I optimized and scaled a high-volume transaction processing middleware handling over $150K daily. My key achievements include reducing transaction latency by 30% through caching and database optimizations, and scaling system capacity by 1.5x by implementing an asynchronous, event-driven architecture. I also designed a real-time monitoring framework that slashed critical incident response time by 50%, while contributing to DevOps cycles to enhance overall system reliability and efficiency.',
    thumbnail: payuThumb,
  },
  {
    name: 'Flutterwave',
    website: 'https://flutterwave.com/ng/',
    location: 'San Fransisco, USA',
    role: 'Backend Engineer (Full-time)',
    description: 'Engineered and maintained high-performance, secure backend services for a global financial platform. Built a centralized authorization system to standardize secure access across all services. Developed a high-volume data processing application that screens over 150,000 entities daily for compliance. Built a real-time decisioning platform that processes millions of transactions daily, enabling instant risk assessment and reducing operational costs by 50%. Optimized system performance and resilience through advanced caching, parallel processing, and robust fault-tolerant design.',
    thumbnail: flutterwaveThumb,
  },
  {
    name: 'Polaris Digitech Limited',
    website: 'https://polarisdigitech.net/',
    location: 'Lagos, Nigeria',
    role: 'Backend Engineer (Full-time)',  
    description: 'As a Backend Engineer at Polaris Digitech Ltd, I developed and maintained robust backend systems for enterprise clients across GIS domains. I created CI/CD pipelines to automate build, test, and deployment processes to Google Cloud Platform (GCP) App Engine, significantly improving deployment efficiency and reliability. Additionally, I made critical security enhancements for an Address Management Platform, which successfully reduced the risk of brute-force attacks and improved system performance.',
    thumbnail: polarisThumb,
  },
  {
    name: 'Stakefair',
    website: 'https://www.linkedin.com/company/stakefair/',
    location: 'Senkang, Singapore',
    role: 'Backend Engineer (Full-time)',  
    description: 'As a Backend Engineer at Stakefair, I was a key contributor to the development of critical financial services that processed over $2M in user transactions. I played a vital role in the major architectural overhaul, assisting in the migration from a monolithic system to a microservices architecture. To help streamline our development process, I implemented containerization using Docker and contributed to building automated CI/CD pipelines with GitHub Actions, which enhanced our deployment frequency and system reliability.',
    thumbnail: stakefairThumb,
  },
  {
    name: 'Savespendr',
    website: 'https://savespendr-web.vercel.app/',
    location: 'Lagos, Nigeria',
    role: 'Backend Engineer, Lead (Contract)',  
    description: 'Orchestrated the end-to-end design, development, and infrastructure management for SaveSpendr. This included architecting the cloud infrastructure, deploying the application as a containerized service on AWS ECS, and establishing automated CI/CD pipelines. Development was guided by a strict adherence to code best practices (including code reviews and SOLID principles) and OWASP security guidelines, forming a highly secure and maintainable foundation for the platform.',
    thumbnail: savespendrThumb,
  },
  {
    name: 'Fintrak Software Limited',
    website: 'https://www.fintraksoftware.com/',
    location: 'Lagos, Nigeria',
    role: 'Backend Engineer (Full-time)',  
    description: 'As a Backend Engineer at FinTrak, I contributed to the development of a leading credit scoring platform. My key responsibilities included designing and delivering a suite of robust RESTful APIs that served as the backbone for the platform\'s services. Additionally, I built, trained, and optimized machine learning models focused on predicting borrower risk.',
    thumbnail: fintrakThumb,
  },
];

function Work() {
  return (
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
            <p className={styles.meta}><strong>Location:</strong> {company.location}</p>
            <p className={styles.meta}><strong>Role:</strong> {company.role}</p> {/* 🔹 changed */}
            <p>{company.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Work;
