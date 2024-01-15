
import React from "react";
import styles from "./About.module.css"

export default function About () {

    return(
        <body className={styles.divCompleto}>
                <div style={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img className={styles.image} src={'https://i.ibb.co/cYj6Lw6/Foto-profesional.jpg'} alt="PorfesionalImage"/>
                </div>
                <div className={styles.divTexto}>
                    <h1>Fabián Ramírez</h1>
                    <h4 style={{color: '#00AEF6'}}>UX/UI Web Designer & Full Stack Developer</h4>
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