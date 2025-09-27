import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './About.module.css';
import profilePic from './about-me.jpg'; // replace with the actual filename

function About() {
    return (
        <>
            {/* 🔹 Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li aria-current="page">About</li>
                </ol>
            </nav>

            <main className={styles.about}>
                <section className={styles.content}>
                    {/* Image block */}
                    <div className={styles.imageWrapper}>
                        <img
                            src={profilePic}
                            alt="Profile"
                            className={styles.profileImage}
                        />
                    </div>

                    {/* Text block */}
                    <div className={styles.textBlock}>
                        <h1 className={styles.heading}>About Me</h1>
                        <p className={styles.tagline}>
                            Engineering the Unseen: Backend Systems &amp; Infrastructure
                        </p>

                        <p className={styles.description}>
                            I&apos;m a backend engineer with over four years of experience building and optimizing
                            the core platforms that power financial technology leaders like{' '}
                            <a
                                href="https://corporate.payu.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.companyLink}
                            >
                                PayU
                            </a>{' '}
                            and{' '}
                            <a
                                href="https://flutterwave.com/ng/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.companyLink}
                            >
                                Flutterwave
                            </a>.
                        </p>

                        <p className={styles.description}>
                            My work revolves around solving complex problems of scale and security. I&apos;ve
                            built real-time transaction decisioning platforms engineered to handle high-volume request loads,
                            reduced latency by 30% through strategic caching and optimization, and migrated monolithic
                            architectures to event-driven microservices.
                        </p>

                        <p className={styles.description}>
                            I&apos;m passionate about writing clean, maintainable code and am deeply involved in the
                            entire lifecycle of a service, from design and development to
                            deployment and monitoring on AWS infrastructure.
                        </p>

                        <h2 className={styles.subheading}>Key Areas of Expertise:</h2>
                        <ul className={styles.expertiseList}>
                            <li>
                                <strong>High-Performance Backends:</strong> Java, Typescript, Go, Kafka, Redis.
                            </li>
                            <li>
                                <strong>Cloud &amp; DevOps:</strong> AWS (ECS Fargate, RDS, Lambda), Docker,
                                CI/CD.
                            </li>
                            <li>
                                <strong>Architecture:</strong> Microservices, Event-Driven Design, API Development,
                                System Resilience.
                            </li>
                        </ul>

                        <div className={styles.socialLinks}>
                            <a
                                href="https://github.com/Oluwatodimu"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/todimu-i-1a83b7159/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;
