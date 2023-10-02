import React from "react";
import Skill from "../Skill/Skill";
import styles from './Skills.module.css';
import habilidadesProgramacion from  '../../utils/dataHabilidades';

const Skills = () => {

    return(
        <div>
            <div>
                <h1 style={{display: 'flex', justifyContent: 'center'}}>
                    <span style={{color: 'white'}}>Mis</span>&nbsp;
                    <span style={{color: '#49b4b2'}}>Habilidades</span></h1>
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
        </div>
    )
};

export default Skills