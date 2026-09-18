import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import styles from './Footer.module.css';

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
];

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <Link to="/" className={styles.logo}>
                    <span className={styles.dot} />
                    todimu.dev
                </Link>

                <nav className={styles.links} aria-label="Footer">
                    {links.map((l) => (
                        <Link key={l.to} to={l.to}>{l.label}</Link>
                    ))}
                </nav>

                <div className={styles.right}>
                    <div className={styles.socials}>
                        <a href="https://github.com/Oluwatodimu" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/todimu-i-1a83b7159/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://medium.com/@todimu_isewon" target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium /></a>
                    </div>
                    <span className={styles.meta}>© {new Date().getFullYear()} Todimu Isewon</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
