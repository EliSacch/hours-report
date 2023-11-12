// hooks
import { useAuthContext } from '../hooks/useAuthContext';
// components
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../logo.svg';
// style
import styles from './styles/Navigation.module.css';

export default function Navigation({ handleOpen }) {
    const { user } = useAuthContext();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <LogoSvg />
                <Link to="/"><h1>Hours Report</h1></Link>
            </div>
            <div className={styles.links}>
                
                {!user && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                    </>
                )}
                {user && (
                    <>
                    <p>Hi, {user.displayName}</p>
                    <button onClick={handleOpen}>Logout</button>
                    </>
                )}

            </div>
        </nav>
    )
}
