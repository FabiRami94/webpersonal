
import React, { useState } from "react"
import styles from "./NavBar.module.css";
import { Link } from 'react-scroll';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './NavBar.module.css'
import ToggleButtonLenguage from "../ToggleButtonLenguage/ToggleButtonLenguage";
import { useSelector } from "react-redux";

const NavBar = () => {  

    const [clicked, setClicked] = useState(false);
    const toggle = useSelector((state) => state.toggle.toogleButtonLenguage);
    
    const handleClick = () => {
      setClicked(!clicked)
    }
    console.log(clicked)
    
    return(
        <main className={styles.mainStyle}>
            <div>
                <h1 className={styles.nombreGit}>FabiRami94.</h1>
            </div>
            <div className={`${styles.divLinks} ${clicked ? styles.active : ''}`}>
                <div 
                    style={{marginRight: toggle ? '35px' : '40px'}} 
                    className={styles.divChange}>
                    <Link 
                        onClick={handleClick}
                        className={styles.linksStyles} 
                        to='home'
                        smooth={true}
                        offset={-120}
                        duration={500}>      
                            <p className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Inicio`}
                            </p>
                            <p className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`Home`}
                            </p>            
                    </Link>
                </div>
                <div 
                    style={{marginRight: toggle ? '145px' : '140px'}}
                    className={styles.divChange}>
                    <Link 
                        onClick={handleClick}
                        className={styles.linksStyles} 
                        to='acerca'
                        smooth={true} 
                        offset={-120} 
                        duration={500}>
                            <p className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Acerca/Experiencia`}
                            </p>
                            <p className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`About/Experience`}
                            </p> 
                    </Link>
                </div>
                <div 
                    style={{marginRight: toggle ? '90px' : '35px'}} 
                    className={styles.divChange}>
                    <Link 
                        onClick={handleClick}
                        className={styles.linksStyles} 
                        to='habilidades' 
                        smooth={true} 
                        offset={-150} 
                        duration={500}>
                            <p className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Habilidades`}
                            </p>
                            <p className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`Skills`}
                            </p> 
                    </Link>
                </div>
                <div 
                    style={{marginRight: toggle ? '75px' : '65px'}} 
                    className={styles.divChange}>
                    <Link
                        onClick={handleClick}
                        className={styles.linksStyles} 
                        to='portafolio' 
                        smooth={true} 
                        offset={-60} 
                        duration={500}>
                            <p className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Portafolio`}
                            </p>
                            <p className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`Portfolio`}
                            </p> 
                    </Link>
                </div>
                <div 
                    style={{marginRight: toggle ? '60px' : '50px'}} 
                    className={styles.divChange}>
                    <Link 
                        onClick={handleClick}
                        className={styles.linksStyles} 
                        to='contacto'
                        smooth={true} 
                        offset={-120} 
                        duration={500}>
                            <p className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Contacto`}
                            </p>
                            <p className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`Contact`}
                            </p>
                    </Link>
                </div>
                <div className={styles.generalContainerIcon1}>
                    <a href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" target='_blank' rel="noreferrer">         
                        <div className={styles.buttonMedia}><BsLinkedin size={20}/></div>
                    </a>
                    <a href="https://github.com/FabiRami94" target="_blank" rel="noreferrer">
                        <div className={styles.buttonMedia}><BsGithub size={20}/></div>
                    </a>           
                </div>
                <div className={styles.toggleButton}>
                    <ToggleButtonLenguage></ToggleButtonLenguage>
                </div>
            </div>
            <div className={styles.generalContainerIcon2}>
                <a href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" target='_blank' rel="noreferrer">         
                    <div className={styles.buttonMedia}><BsLinkedin size={25}/></div>
                </a>
                <a href="https://github.com/FabiRami94" target="_blank" rel="noreferrer">
                    <div className={styles.buttonMedia}><BsGithub size={25}/></div>
                </a>           
            </div>
            <div 
                onClick={handleClick}
                className={`${styles.navIcon5} ${clicked ? styles.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
                <div className={`${styles.divBig} ${clicked ? styles.activeDiv : ''}`}></div>
        </main>
    )
}

export default NavBar;