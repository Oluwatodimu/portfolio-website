import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

interface NavMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
];

function NavMenu({ isOpen, toggleMenu }: NavMenuProps) {
    return (
        <>
            <div
                className={`${styles.backdrop} ${isOpen ? styles.show : ''}`}
                onClick={toggleMenu}
                aria-hidden="true"
            />
            <nav className={`${styles.navMenu} ${isOpen ? styles.open : ''}`} aria-label="Mobile">
                <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
                    ✕
                </button>
                <ul>
                    {links.map((l) => (
                        <li key={l.to}>
                            <NavLink
                                to={l.to}
                                end={l.end}
                                onClick={toggleMenu}
                                className={({ isActive }) => (isActive ? styles.active : '')}
                            >
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default NavMenu;
