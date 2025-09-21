import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Let's Connect</h1>
      <p>I'm always interested in hearing about new opportunities and collaborations.</p>
      <a href="mailto:yourname@example.com" className={styles.email}>
        yourname@example.com
      </a>
    </div>
  );
}

export default Contact;
