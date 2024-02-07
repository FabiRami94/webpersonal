
import React, { useState } from "react";
import Skill from "../Skill/Skill";
import styles from './Skills.module.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { frontedSkills, backendSkills, noCodeSkills } from  '../../assets/dataHabilidades.js';
import { useSelector } from "react-redux";

const Skills = () => {

    const toggle = useSelector((state) => state.toggle.toogleButtonLenguage);
    const [buttonOpen, setButtonOpen] = useState({
        nocode: true,
        fronted: true,
        backend: true
    });

   
    const buttonOpenHandler = (section) => {
        setButtonOpen((prevButtonOpen) => ({
        ...prevButtonOpen,
        [section]: !prevButtonOpen[section]
        }));
    };

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
                    <div onClick={() => buttonOpenHandler('nocode')} className={styles.deployButton}>
                        <div style={{width: '12rem'}} className={styles.divChange}>
                            <h2 className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Habilidades No Code`}
                            </h2>
                            <h2 className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`No Code Skills`}
                            </h2>
                        </div>
                        {!buttonOpen['nocode'] ? <IoIosArrowDown size={40}/> : <IoIosArrowUp size={40}/> }
                    </div>
                    <div className={!buttonOpen['nocode'] ? `${styles.closeDiv}` : `${styles.openDiv}`}>
                        {noCodeSkills.map((habilidad) => (  
                            <Skill  image = {habilidad.image} 
                                    name = {habilidad.name}
                                    icon = {habilidad.icon}
                                    link = {habilidad.link}
                                    width = {habilidad.width}
                            ></Skill>
                        ))}
                    </div>
                </div>
                <div className={styles.skills}>
                    <div onClick={() => buttonOpenHandler('fronted')} className={styles.deployButton}>
                        <div style={{width: '12rem'}} className={styles.divChange}>
                            <h2 className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Habilidades Fronted`}
                            </h2>
                            <h2 className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`Fronted Skills`}
                            </h2>
                        </div>
                        {!buttonOpen['fronted'] ? <IoIosArrowDown size={40}/> : <IoIosArrowUp size={40}/> }
                    </div>
                    <div className={!buttonOpen['fronted'] ? `${styles.closeDiv}` : `${styles.openDiv}`}>
                    {frontedSkills.map((habilidad) => (  
                        <Skill  image = {habilidad.image} 
                                name = {habilidad.name}
                                icon = {habilidad.icon}
                                link = {habilidad.link}
                                width = {habilidad.width}
                        ></Skill>
                    ))}
                    </div>
                </div>
                <div className={styles.skills}>
                    <div onClick={() => buttonOpenHandler('backend')} className={styles.deployButton}>
                        <div style={{width: '12rem'}} className={styles.divChange}>
                            <h2 className={`${styles.p1} ${!toggle && styles.transition}`}>
                                {`Habilidades Backend`}
                            </h2>
                            <h2 className={`${styles.p2} ${toggle && styles.transition}`}>
                                {`Backend Skills`}
                            </h2>
                        </div>
                        {!buttonOpen['backend'] ? <IoIosArrowDown size={40}/> : <IoIosArrowUp size={40}/> }
                    </div>
                    <div className={!buttonOpen['backend'] ? `${styles.closeDiv}` : `${styles.openDiv}`}>
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
            </div>
        </body>
    )
};

export default Skills