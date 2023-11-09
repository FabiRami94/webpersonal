import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import styles from './DownBar.module.css'

export default function DownBar () {
    
    return (
        <div className={styles.divGeneral}>
            <div className={styles.divSecundario}>
                <p style={{color: "#f2f2f2"}} >Copyright © Portafolio Fabián Ramírez 2023 All rights reserved. V 1.1.0</p>
                <a href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" target='_blank' rel="noreferrer">         
                    <div className={styles.buttonMedia}><BsLinkedin size={20}/></div>
                </a>
                <a href="https://github.com/FabiRami94" target="_blank" rel="noreferrer">
                    <div className={styles.buttonMedia}><BsGithub size={20}/></div>
                </a>           
            </div>  
        </div>
    )
}