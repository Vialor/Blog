import Link from 'next/link';

import styles from './navbar.module.css';

export default class Navbar extends React.Component{
    render(){
        return (
            <nav className={styles.navbar}>
                <a className={styles.navbarHeader} href="index">Vialor's Page</a>
                <ul className={styles.nav}>
                    <li className={styles.navItem}><Link href="math"><a className="navLink">Math</a></Link></li>
                    <li className={styles.navItem}><Link href="cs"><a className="navLink">CS</a></Link></li>
                    <li className={styles.navItem}><Link href="fun"><a className="navLink">Fun</a></Link></li>
                </ul>
            </nav>
        );
    }
}