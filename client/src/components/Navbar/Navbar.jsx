
import React, { useState } from "react"
import styles from "./NavBar.module.css";
import { Link } from 'react-scroll';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './NavBar.module.css'

const NavBar = () => {  

    const [clicked, setClicked] = useState(false)
    
    const handleClick = () => {
      setClicked(!clicked)
    }
    console.log(clicked)
    
    return(
        <main className={styles.mainStyle}>
            <div>
                <h1 className={styles.nombreGit}>FabiRami94.</h1>
            </div>
            <div className={styles.divLinks}>
                <Link 
                    className={styles.linksStyles} 
                    to='home'
                    smooth={true}
                    offset={-120}
                    duration={500}>Home</Link>
                <Link 
                    className={styles.linksStyles} 
                    to='acerca'
                    smooth={true} 
                    offset={-120} 
                    duration={500}>Acerca/Experiencia</Link>
                <Link 
                    className={styles.linksStyles} 
                    to='habilidades' 
                    smooth={true} 
                    offset={-150} 
                    duration={500}>Habilidades</Link>
                <Link 
                    className={styles.linksStyles} 
                    to='portafolio' 
                    smooth={true} 
                    offset={-60} 
                    duration={500}>Portafolio</Link>
                <Link 
                    className={styles.linksStyles} 
                    to='contacto'
                    smooth={true} 
                    offset={200} 
                    duration={500}>Contacto</Link>
                <div className={styles.generalContainer}>
                <a href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" target='_blank' rel="noreferrer">         
                    <div className={styles.buttonMedia}><BsLinkedin size={20}/></div>
                </a>
                <a href="https://github.com/FabiRami94" target="_blank" rel="noreferrer">
                    <div className={styles.buttonMedia}><BsGithub size={20}/></div>
                </a>           
                </div>
                {/* <div 
                    onClick={handleClick}
                    className={`${styles.navIcon5} ${clicked ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`${styles.divBig} ${clicked ? ' active' : ''}`}></div> */}
            </div>
        </main>
    )
}

export default NavBar;