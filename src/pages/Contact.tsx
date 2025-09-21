import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';
// If using Next.js you can use next/image instead, but plain <img> works too
import contactPhoto from './contact-me.jpg'; // adjust filename/path to your image

function Contact() {
    return (
        <main className={styles.contact}>
            <section className={styles.content}>
                {/* === Image column (left) === */}
                <div className={styles.imageWrapper}>
                    <img
                        src={contactPhoto}
                        alt="Contact"
                        className={styles.profileImage}
                    />
                </div>

                {/* === Text column (right) === */}
                <div className={styles.textBlock}>
                    <h1 className={styles.heading}>Get in Touch</h1>
                    <p className={styles.description}>
                        I’d love to hear from you! Whether it’s about opportunities,
                        collaborations, or just a tech chat, feel free to reach out.
                    </p>
                    <a href="mailto:todiwon23@gmail.com" className={styles.email}>
                        todiwon23@gmail.com
                    </a>
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
    );
}

export default Contact;
