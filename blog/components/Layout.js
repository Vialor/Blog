import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Backtotop from './Backtotop'
import styles from './layout.module.css'

export default function({ children }){
    return (
    <>
    <Navbar/>
    <div className={styles.mainSec}>
        <Sidebar className={styles.sideBar}/>
        <div className={styles.contentSec}>
            {children}
        </div>
    </div>
    <Backtotop className={styles.backtotop}/>
    </>
    );
}