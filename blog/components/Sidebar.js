import styles from './sidebar.module.css';

export default function Sidebar(){
    return (
        <div className={styles.sideBar}>
            <img className={styles.sidePic} src="../public/img/avatar.ppm" alt="avatar"/>
            <a className={styles.listItem} href="#about-me">About Me</a>
            <a className={styles.listItem} href="#about-blog">About This Blog</a>
            <a className={styles.listItem} href="#contact">Contact</a>
        </div>
    );
}