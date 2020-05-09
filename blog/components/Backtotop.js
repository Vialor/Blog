import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import styles from './backtotop.module.css'
export default function Backtotop(){
    return <FontAwesomeIcon icon={faArrowUp} className={styles.backtotop}/>

    // onclick = {function(){
	// 	toTopTimer = setInterval(function(){
	// 		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
									
	// 		var Speed = Math.floor(-osTop / 6);
	// 		document.documentElement.scrollTop = document.body.scrollTop = osTop + Speed;
	// 		shouldStop = false; // should'nt stop if this did the scrolling

	// 		if (osTop == 0) {
	// 			clearInterval(toTopTimer);
	// 		}
	// 	},30);
	// }}
}
