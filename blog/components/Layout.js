import Navbar from './navbar'
import Sidebar from './sidebar'
import Backtotop from './backtotop'
import styles from './layout.module.css'

export const title = "Vialor's Page | Yiyang Zhou";
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