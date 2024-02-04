
import React from "react";
import Skill from "../Skill/Skill";
import styles from './Skills.module.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { frontedSkills, backendSkills, noCodeSkills } from  '../../assets/dataHabilidades.js';
import { useSelector } from "react-redux";

const Skills = () => {

    const toggle = useSelector((state) => state.toggle.toogleButtonLenguage);

    return(
        <body >      
            <div style={{height: '2rem'}} className={styles.divChange}>
                <h1 className={`${styles.p3} ${!toggle && styles.transition}`}>
                    <span style={{color: 'white'}}>Mis</span>&nbsp;
                    <span style={{color: '#00AEF6'}}>Habilidades</span>
                </h1>
                <h1 className={`${styles.p4} ${toggle && styles.transition}`}>
                    <span style={{color: 'white'}}>My</span>&nbsp;
                    <span style={{color: '#00AEF6'}}>Skills</span>
                </h1>
            </div>       
            <div div className={styles.generalSkills}>
                <div className={styles.skills}>
                    <div className={styles.deployButton}>
                        <div style={{width: '12rem'}} className={styles.divChange}>
                            <h2 className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Habilidades No Code`}
                            </h2>
                            <h2 className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`No Code Skills`}
                            </h2>
                        </div>
                        <IoIosArrowDown size={40}/>
                    </div>
                    {noCodeSkills.map((habilidad) => (  
                        <Skill  image = {habilidad.image} 
                                name = {habilidad.name}
                                icon = {habilidad.icon}
                                link = {habilidad.link}
                                width = {habilidad.width}
                        ></Skill>
                    ))}
                </div>
                <div className={styles.skills}>
                    <div className={styles.deployButton}>
                        <div style={{width: '12rem'}} className={styles.divChange}>
                            <h2 className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Habilidades Fronted`}
                            </h2>
                            <h2 className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`Fronted Skills`}
                            </h2>
                        </div>
                        <IoIosArrowDown size={40}/>
                    </div>
                    {frontedSkills.map((habilidad) => (  
                        <Skill  image = {habilidad.image} 
                                name = {habilidad.name}
                                icon = {habilidad.icon}
                                link = {habilidad.link}
                                width = {habilidad.width}
                        ></Skill>
                    ))}
                </div>
                <div className={styles.skills}>
                    <div className={styles.deployButton}>
                        <div style={{width: '12rem'}} className={styles.divChange}>
                            <h2 className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Habilidades Backend`}
                            </h2>
                            <h2 className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`Backend Skills`}
                            </h2>
                        </div>
                        <IoIosArrowDown size={40}/>
                    </div>
                    {backendSkills.map((habilidad) => (  
                        <Skill  image = {habilidad.image} 
                                name = {habilidad.name}
                                icon = {habilidad.icon}
                                link = {habilidad.link}
                                width = {habilidad.width}
                        ></Skill>
                    ))}
                </div>
            </div>
        </body>
    )
};

export default Skills