
import React, { useState } from "react";
import Skill from "../Skill/Skill";
import styles from './Skills.module.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { frontedSkills, backendSkills, noCodeSkills } from  '../../assets/dataHabilidades.js';
import { useSelector } from "react-redux";

const Skills = () => {

    const toggle = useSelector((state) => state.toggle.toogleButtonLenguage);
    const toggleColor = useSelector((state) => state.toggle.toogleButtonColorMode);
    const textShadow = '1px 1px 2px black';

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
        <body style={!toggleColor ? { backgroundColor: 'rgb(9, 12, 24)'} : null} >      
            <div style={{height: '2rem'}} className={styles.divChange}>
                <h1 className={`${styles.p3} ${!toggle && styles.transition}`}>
                    <span style={!toggleColor ? {color: 'white'} : {color: 'black'}}>Mis</span>&nbsp;
                    <span style={
                            toggleColor ? 
                            {textShadow, color: '#00AEF6', marginTop: '0.8rem'} : 
                            {color: '#00AEF6', marginTop: '0.8rem'}}>Habilidades</span>
                </h1>
                <h1 className={`${styles.p4} ${toggle && styles.transition}`}>
                    <span style={!toggleColor ? {color: 'white'} : {color: 'black'}}>My</span>&nbsp;
                    <span style={
                            toggleColor ? 
                            {textShadow, color: '#00AEF6', marginTop: '0.8rem'} : 
                            {color: '#00AEF6', marginTop: '0.8rem'}}>Skills</span>
                </h1>
            </div>       
            <div className={styles.generalSkills}>
                <div 
                    style={toggleColor ? {backgroundColor: 'rgb(14, 18, 41, 0.8)'} : null}  
                    className={styles.skills}>
                    <div 
                        style={toggleColor ? {color: 'black'} : null} 
                        onClick={() => buttonOpenHandler('nocode')} 
                        className={styles.deployButton}>
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
                <div 
                    style={toggleColor ? {backgroundColor: 'rgb(14, 18, 41, 0.8)'} : null} 
                    className={styles.skills}>
                    <div 
                        style={toggleColor ? {color: 'black'} : null}
                        onClick={() => buttonOpenHandler('fronted')} 
                        className={styles.deployButton}>
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
                <div 
                    style={toggleColor ? {backgroundColor: 'rgb(14, 18, 41, 0.8)'} : null} 
                    className={styles.skills}>
                    <div 
                        style={toggleColor ? {color: 'black'} : null}
                        onClick={() => buttonOpenHandler('backend')} 
                        className={styles.deployButton}>
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