import { Link } from 'react-router-dom';
import styles from './Blogs.module.css';

const articles = [
    {
        title: 'Conversational SQL with Gemini Pro',
        link: 'https://medium.com/codex/conversational-sql-enabling-user-friendly-database-interactions-with-gemini-pro-2e26c9828723',
        excerpt: 'Enabling non-technical users to interact with MySQL databases by converting natural language to SQL using Gemini-Pro.',
        source: 'Medium',
        date: '2024',
    },
    {
        title: 'Building an Account Number Classifier with Spring Boot',
        link: 'https://medium.com/stakefair/building-an-account-number-classifier-with-spring-boot-1ab56f4df333',
        excerpt: 'Classifying Nigerian NUBAN account numbers into banks using Spring Boot, with applications in transaction routing and USSD.',
        source: 'Medium',
        date: '2024',
    },
];

function Blogs() {
    return (
        <>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li aria-current="page">Blogs & Articles</li>
                </ol>
            </nav>

            <div className={styles.pageContent}>
                <h1 className={`${styles.heading} pageHeading`}>Blogs & Articles</h1>
                <div className={styles.articlesGrid}>
                {articles.map((article, index) => (
                    <article key={index} className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3>{article.title}</h3>
                            <p className={styles.excerpt}>{article.excerpt}</p>
                            <div className={styles.meta}>
                                <span>{article.source}</span>
                                <span className={styles.sep}>·</span>
                                <span>{article.date}</span>
                            </div>
                        </div>
                        <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.readLink}
                        >
                            Read Article
                        </a>
                    </article>
                ))}
                </div>
            </div>
        </>
    );
}

export default Blogs;
