
import React from "react";
import Skill from "../Skill/Skill";
import styles from './Skills.module.css';
import habilidadesProgramacion from  '../../assets/dataHabilidades.js';
import skillsNoCode from "../../assets/dataSkillsNoCode.js";
import WebLinks from "../WebLinks/WebLinks.jsx";
import NoCodeTechnologies from "../../assets/NoCodeTechnologies.js";

const Skills = () => {

    return(
        <body >
            <div>
                <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '0px', paddingTop: '10px'}}>
                    <span style={{color: 'white'}}>Mis</span>&nbsp;
                    <span style={{color: '#00AEF6'}}>Habilidades No Code</span></h1>
            </div>
            <div className={styles.Skills}>
                {skillsNoCode.map((habilidad) => (  
                    <Skill  image = {habilidad.image} 
                            name = {habilidad.name}
                            icon = {habilidad.icon}
                            link = {habilidad.link}
                            width = {habilidad.width}
                    ></Skill>
                ))}
            </div>
            <div className={styles.Skills} style={{marginTop: '20px'}}>
                  {NoCodeTechnologies.map((proj) => (
                    <WebLinks 
                      key = {proj.id} 
                      image = {proj.image}
                      url = {proj.url}
                      technologies = {proj.technologies}
                    ></WebLinks>
                  ))}
            </div>
            <p style={{textAlign: 'center', color: 'white', marginTop: '0px'}}>
                Oprima para apreciar y visitar el portafolio No Code.</p> 
            <div>
                <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '20px', paddingTop: '10px'}}>
                    <span style={{color: 'white'}}>Mis</span>&nbsp;
                    <span style={{color: '#00AEF6'}}>Habilidades</span></h1>
            </div>
            <div className={styles.Skills}>
                {habilidadesProgramacion.map((habilidad) => (  
                    <Skill  image = {habilidad.image} 
                            name = {habilidad.name}
                            icon = {habilidad.icon}
                            link = {habilidad.link}
                            width = {habilidad.width}
                    ></Skill>
                ))}
            </div>
        </body>
    )
};

export default Skills