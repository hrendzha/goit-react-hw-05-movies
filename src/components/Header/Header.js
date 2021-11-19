import { NavLink } from 'react-router-dom';
import Container from '../Container';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <Container>
                <nav>
                    <ul className={s.navList}>
                        <li className={s.navItem}>
                            <NavLink
                                to="/"
                                exact
                                className={s.navLink}
                                activeClassName={s.activeNavLink}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className={s.navItem}>
                            <NavLink
                                to="/movies"
                                className={s.navLink}
                                activeClassName={s.activeNavLink}
                            >
                                Movies
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
