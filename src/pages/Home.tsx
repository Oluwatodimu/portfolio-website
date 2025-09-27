import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

function Home() {
    return (
        <>
            {/* 🔹 Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <ol>
                    <li aria-current="page">Home</li>
                </ol>
            </nav>

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Backend & Infrastructure Engineer</h1>
                    <h2 className={styles.name}>Todimu&nbsp;Isewon</h2>

                    <p className={styles.summary}>
                        I architect and build resilient, high-scale backend systems that process
                        large volumes of data and events. I specialize in designing and building
                        cloud-native platforms that are scalable, secure, and performant under
                        extreme load, from initial concept to production deployment.
                        My core expertise is in <strong>Java</strong>, with strong proficiency in
                        <strong> JavaScript</strong>, <strong>TypeScript</strong>, and <strong>Go</strong>.
                    </p>

                    <p className={styles.expertise}>
                        <strong>Core Expertise:</strong> Distributed Systems | Event-Driven Architecture |
                        Cloud Infrastructure | API Design | Performance Optimization
                    </p>

                    <div className={styles.socialLinks}>
                        <a href="https://github.com/Oluwatodimu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/todimu-i-1a83b7159/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://medium.com/@todimu_isewon" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
                    </div>

                    <Link to="/work" className={styles.workButton}>View My Work</Link>
                </div>
            </div>
        </>
    );
}

export default Home;
