import rocketLogo from '../assets/rocket.svg';
import todoLogo from '../assets/Logo.svg';

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={todoLogo} alt="" />
            </div>
        </header>
    )
}