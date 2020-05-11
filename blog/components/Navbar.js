import Link from 'next/link'
import styles from './navbar.module.css'

export default class Navbar extends React.Component{
    render(){
        return (
            <nav className={styles.navbar}>
                <Link href="/"><a className={styles.navbarHeader}>Vialor's Page</a></Link>
                <ul className={styles.nav}>
                    <li className={styles.navItem}><Link href="/math"><a>Math</a></Link></li>
                    <li className={styles.navItem}><Link href="/cs"><a>CS</a></Link></li>
                    <li className={styles.navItem}><Link href="/fun"><a>Fun</a></Link></li>
                </ul>
            </nav>
        );
    }
}
