import { Link } from 'react-router-dom';
import styles from './NavMenu.module.css';

function NavMenu({ isOpen, toggleMenu }) {
  return (
    <nav className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close Menu">
        ✕
      </button>
      <ul>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/work" onClick={toggleMenu}>Work</Link>
        </li>
        <li>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
