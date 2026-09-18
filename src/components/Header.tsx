import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import NavMenu from './NavMenu';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/projects', label: 'Projects' },
  { to: '/blogs', label: 'Blogs' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Home">
          <span className={styles.dot} />
          todimu.dev
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className={styles.navCta}>
            Contact
          </NavLink>
        </nav>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      <NavMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
