import Navbar from '../navbar'
import Backtotop from '../backtotop'
import styles from './main.module.css'
import Head from 'next/head'

export default function MainLayout({children}){
    return (
    <>
    <Head>
    <link rel="icon" 
      type="image/png" 
      href="/static/img/avatar.ppm"/>
    <title>Vialor's Page | Yiyang Zhou</title>
    </Head>
    <Navbar/>
    {children}
    <Backtotop className={styles.backtotop}/>
    </>
    );
}