import { useState } from 'react';
import styles from './Header.module.css';
import NavMenu from './NavMenu';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Menu</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
      <NavMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
