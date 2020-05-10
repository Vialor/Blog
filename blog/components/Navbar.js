import Link from 'next/link'
import path from '../pages/path'
import styles from './navbar.module.css'

export default class Navbar extends React.Component{
    render(){
        alert(path.host);
        return (
            <nav className={styles.navbar}>
                {/* <a className={styles.navbarHeader} href="index">Vialor's Page</a> */}
                <Link href={path.host}><a className={styles.navbarHeader}>Vialor's Page</a></Link>
                <ul className={styles.nav}>
                    <li className={styles.navItem}><Link href="math"><a>Math</a></Link></li>
                    <li className={styles.navItem}><Link href="cs"><a>CS</a></Link></li>
                    <li className={styles.navItem}><Link href="fun"><a>Fun</a></Link></li>
                </ul>
            </nav>
        );
    }
}