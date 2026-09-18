import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const skills = [
    { group: 'Languages', items: ['Java', 'TypeScript', 'Go', 'JavaScript', 'Python'] },
    { group: 'Backend', items: ['Spring Boot', 'NestJS', 'Kafka', 'Redis', 'REST APIs'] },
    { group: 'Cloud & DevOps', items: ['AWS ECS', 'Docker', 'Keycloak', 'NGINX', 'CI/CD'] },
    { group: 'Data', items: ['PostgreSQL', 'MySQL', 'RDS', 'Redis'] },
];

function Home() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <span className={styles.avail}>
                        <span className={styles.pulse} />
                        Available for backend &amp; infra work
                    </span>

                    <h1 className={styles.title}>
                        Backend &amp; <span className={styles.accent}>Infrastructure</span> Engineer
                    </h1>
                    <p className={styles.role}>// Todimu Isewon</p>

                    <p className={styles.lead}>
                        I architect and build resilient, high-scale backend systems that process large
                        volumes of data and events — cloud-native platforms that stay{' '}
                        <strong>scalable, secure, and performant</strong> under extreme load, from
                        initial concept to production deployment. My core expertise is in{' '}
                        <strong>Java</strong>, with strong proficiency in{' '}
                        <strong>JavaScript</strong>, <strong>TypeScript</strong>, and{' '}
                        <strong>Go</strong>.
                    </p>

                    <p className={styles.expertise}>
                        Core Expertise: Distributed Systems · Event-Driven Architecture · Cloud
                        Infrastructure · API Design · Performance Optimization
                    </p>

                    <div className={styles.ctaRow}>
                        <Link to="/work" className={styles.btnPrimary}>View My Work</Link>
                        <Link to="/contact" className={styles.btnGhost}>Get in Touch</Link>
                        <span className={styles.socials}>
                            <a href="https://github.com/Oluwatodimu" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/todimu-i-1a83b7159/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="https://medium.com/@todimu_isewon" target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium /></a>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.skillsBlock}>
                <div className={styles.wrap}>
                    <div className={styles.secHead}>
                        <span className="eyebrow">// stack</span>
                        <h2 className={styles.secTitle}>Skills &amp; Technology</h2>
                        <p className={styles.secSub}>
                            The tools I reach for when building and scaling backend platforms.
                        </p>
                    </div>

                    <div className={styles.skillsGrid}>
                        {skills.map((s) => (
                            <div key={s.group} className={styles.skillCard}>
                                <div className={styles.skillKey}>{s.group}</div>
                                <div className={styles.chips}>
                                    {s.items.map((it) => (
                                        <span key={it} className={styles.chip}>{it}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
