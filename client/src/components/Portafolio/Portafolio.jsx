import React from "react";
import styles from "./Portafolio.module.css";
import {    PiArrowFatLinesLeftFill,
            PiArrowFatLeftFill,
            PiArrowFatLinesRightFill,
            PiArrowFatRightFill } from "react-icons/pi"



const Portafolio = () => {

    return(
        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
            <button className={styles.button1}><PiArrowFatLinesLeftFill size={40}/></button>
            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                <button className={styles.button2}><PiArrowFatLeftFill size={25}/></button>
                <div className={styles.divLateral}></div>
                <div className={styles.divCentral}></div>
                <div className={styles.divLateral}></div>
                <button className={styles.button2}><PiArrowFatRightFill size={25}/></button>
            </div>
            <button className={styles.button1}><PiArrowFatLinesRightFill size={40}/></button>
        </div>
    )
}

export default Portafolio