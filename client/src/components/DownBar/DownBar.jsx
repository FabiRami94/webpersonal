import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import styles from './DownBar.module.css'

export default function DownBar () {
    
    return (
        <div className={styles.divGeneral}>
            <div className={styles.generalContainer}>
                <a href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" target='_blank' rel="noreferrer">         
                    <div className={styles.buttonMedia}><BsLinkedin size={40}/></div>
                </a>
                <a href="https://github.com/FabiRami94" target="_blank" rel="noreferrer">
                    <div className={styles.buttonMedia}><BsGithub size={40}/></div>
                </a>           
            </div>
        </div>
    )
}