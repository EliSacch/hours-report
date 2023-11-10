// components
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../logo.svg';
// style
import styles from './styles/Navigation.module.css';

export default function Navigation({ handleOpen }) {


    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <LogoSvg />
                <h1>Hours Report</h1>
            </div>
            <div className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <button onClick={handleOpen}>Sign out</button>
            </div>
        </nav>
    )
}
