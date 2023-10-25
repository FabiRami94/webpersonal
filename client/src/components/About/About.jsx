import React from "react";
import styles from "./About.module.css"

export default function About () {

    return(
        <body className={styles.divGeneral}>
                <div className={styles.divImagen}>
                    <img alt="PorfesionalImage"/>
                    <h1>imagen foto</h1>
                </div>
                <div className={styles.divTexto}>
                    <h1>Fabián Ramírez</h1>
                    <h4 style={{color: '#00AEF6'}}>Full Stack Developer</h4>
                    <p>Programador enfocado en el desarrollo web como Full Satck Developer. 
                        Mis conocimientos incluyen metodologías agiles, GIT, además de experiencia 
                        práctica en el desarrollo de Front-end y Back-end utilizando tecnologías 
                        como JavaScript, HTML, CSS, React, Node.js, Express, Postgres y Sequelize. </p>
                    <p>Mis habilidades blandas incluyen capacidad de trabajo en equipo, pensamiento 
                        analítico, adaptabilidad, aprendizaje rápido y creatividad, entre otros.</p>
                </div>
            </body>      
    )
}