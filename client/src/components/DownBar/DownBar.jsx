import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import styles from './DownBar.module.css'
import { useSelector } from "react-redux";

export default function DownBar () {

    const toggleColor = useSelector((state) => state.toggle.toogleButtonColorMode);
    
    return (
        <div style={!toggleColor ? { backgroundColor: 'rgb(9, 12, 24)'} : null}>
            <div className={styles.divSecundario}>
                <p style={toggleColor ? { color: 'black' } : { color: 'white' }} >Copyright © Portafolio Fabián Ramírez 2023 All rights reserved. V 1.2.0</p>
                <a href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" target='_blank' rel="noreferrer">         
                    <div 
                        style={toggleColor ? { color: 'black' } : null} 
                        className={styles.buttonMedia}><BsLinkedin size={20}/></div>
                </a>
                <a href="https://github.com/FabiRami94" target="_blank" rel="noreferrer">
                    <div 
                        style={toggleColor ? { color: 'black' } : null}
                        className={styles.buttonMedia}><BsGithub size={20}/></div>
                </a>           
            </div>  
        </div>
    )
}