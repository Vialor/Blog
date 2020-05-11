import styles from './layout.module.css'

export default function HomeLayout({children}){
    return (
    <div className={styles.mainSec}>
        <div className={styles.sideBar}>
        <img className={styles.sidePic} src="/static/img/avatar.ppm" alt="avatar"/>
            <a className={styles.listItem} href="#about-me">About Me</a>
            <a className={styles.listItem} href="#about-blog">About Blog</a>
            <a className={styles.listItem} href="#contact">Contact</a>
        </div>
        <div className={styles.contentSec}>
            {children}
        </div>
    </div>
    );
}