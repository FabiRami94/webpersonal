import React from "react";
import Skill from "../Skill/Skill";
import styles from './Skills.module.css';
import habilidadesProgramacion from  '../../assets/dataHabilidades.js';

const Skills = () => {

    return(
        <body >
            <div>
                <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '0px', paddingTop: '10px'}}>
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