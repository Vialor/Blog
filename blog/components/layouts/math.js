import styles from './layout.module.css'

export default function MathLayout({children}){
    return (
    <div className={styles.mainSec}>
        <div className={styles.sideBar}>
            <img className={styles.sidePic} src="/static/img/avatar.ppm" alt="avatar"/>
        </div>
        <div className={styles.contentSec}>
            {children}
        </div>
    </div>
    );
}