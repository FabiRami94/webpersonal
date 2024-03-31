
import React from "react";
import styles from "./About.module.css"
import { useSelector } from "react-redux";
import DividingLine from "../DividingLine/DividingLine";

export default function About () {
    
    const toggle = useSelector((state) => state.toggle.toogleButtonLenguage);
    const toggleColor = useSelector((state) => state.toggle.toogleButtonColorMode);
    const textShadow = '1px 1px 2px black';

    return(
        <>
            <body style={!toggleColor ? { backgroundColor: 'rgb(9, 12, 24)'} : null} className={styles.divCompleto}>
                    <div style={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img className={styles.image} src={'https://i.ibb.co/cYj6Lw6/Foto-profesional.jpg'} alt="PorfesionalImage"/>
                    </div>
                    <div style={toggleColor ? { color: 'black' } : null} className={styles.divTexto}>
                        <h1 style={{fontFamily: "Protest Riot", fontWeight: '400', marginBottom: '0'}}>Fabián Ramírez</h1>
                        <h3 style={
                                toggleColor ? 
                                {textShadow, color: '#00AEF6', marginTop: '0.8rem'} : 
                                {color: '#00AEF6', marginTop: '0.8rem'}}>Full Stack Developer</h3>
                        <div className={styles.divTextoChange}>
                            <div className={`${styles.p1} ${!toggle && styles.transition}`}>
                                <p>
                                    {`Programador enfocado en el desarrollo web como Full Satck Developer. 
                                    Mis conocimientos incluyen metodologías agiles, GIT, además de experiencia 
                                    práctica en el desarrollo de Front-end y Back-end utilizando tecnologías 
                                    como JavaScript, HTML, CSS, React, Node.js, Express, Postgres y Sequelize.`}                       
                                </p>
                                <p>
                                    {`Mis habilidades blandas incluyen capacidad de trabajo en equipo, pensamiento 
                                    analítico, adaptabilidad, aprendizaje rápido y creatividad, entre otros.`}
                                </p>
                            </div>
                            <div className={`${styles.p2} ${toggle && styles.transition}`}>
                                <p>
                                    {`Programmer focused on web development as a Full Satck Developer.
                                    My knowledge includes agile methodologies, GIT, as well as experience.
                                    practice in Front-end and Back-end development using technologies
                                    such as JavaScript, HTML, CSS, React, Node.js, Express, Postgres and Sequelize.`}                       
                                </p>
                                <p>
                                    {`My soft skills include teamwork ability, thinking
                                    analytical, adaptability, fast learning and creativity, among others.`}
                                </p>
                            </div>
                        </div>
                    </div>
            </body> 
            <DividingLine 
              toggleColor = {toggleColor}
              pTop = {'0px'}
              pTopResp = {'35px'}
              pBottom = {'30px'}
              pBottomResp = {'30px'}
              ></DividingLine>
        </>
    )
}