import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import NavMenu from './NavMenu';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Todimu Isewon</Link>
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
      <NavMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
