
import React, { useEffect, useState } from "react"
import styles from './Home.module.css'
import { useSelector } from "react-redux";

const Home = () => {

    const [isNeon, setIsNeon] = useState(true);
    const toggle = useSelector((state) => state.toggle.toogleButtonLenguage);
    const toggleColor = useSelector((state) => state.toggle.toogleButtonColorMode);
    const textShadow = '1px 1px 2px black';

    useEffect(() => {

        const intervalId = setInterval(() => {
          setIsNeon((prevIsNeon) => !prevIsNeon);
        }, 120);
    
        const timeoutId = setTimeout(() => {
          clearInterval(intervalId);
          setIsNeon(true);
        }, 4000);  
    
        return () => {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        };
      }, [toggle]);

    return(
        <>
            <body style={!toggleColor ? { backgroundColor: 'rgb(9, 12, 24)'} : null} className={styles.divGeneral}>
                <div style={toggleColor ? { color: 'black' } : null} className={styles.divTexto}>
                    <div  className={styles.divTitleChange}>
                      <h1 className={`${styles.p1} ${!toggle && styles.transition}`}>
                        {`Hey, soy Fabián Ramírez`}
                      </h1>
                      <h1 className={`${styles.p2} ${toggle && styles.transition}`}>
                        {`Hey, I'm Fabián Ramírez`}
                      </h1>
                    </div>
                    <h1 style={toggleColor ? { color: 'rgb(14, 18, 41)'} : null}>
                        {/* <span className={isNeon ? styles.spanNeon : styles.spanSinNeon}>UX/UI</span>&nbsp;
                        <span style={{fontSize: '1.6rem'}} className={isNeon ? styles.spanNeon : styles.spanSinNeon}>Web Designer</span>&nbsp; */}
                        <span style={toggleColor ? {textShadow} : null} className={styles.spanBlue}>Full Stack Developer</span>
                    </h1>
                    <div className={styles.divTextoChange}>
                      <p className={`${styles.p1} ${!toggle && styles.transition}`}>
                        {`Arquitecto de profesión, y aventurándome en el fascinante mundo de la tecnología. 
                          Apasionado por el aprendizaje continuo y el crecimiento constante. "Si solo haces
                          lo que ya sabes hacer, no vas a llegar a ser más de lo que eres hoy" - 
                          Kung Fu Panda`}
                      </p>
                      <p className={`${styles.p2} ${toggle && styles.transition}`}>
                        {`Architect by profession, and venturing into the fascinating world of technology.
                          Passionate about continuous learning and constant growth. "If you only do
                          what you already know how to do, you will not become more than what you are today" -
                          Kung Fu Panda`}
                      </p>
                    </div>
                </div>
                <div className={styles.divImagen}>
                    <img  className={styles.imagen} alt="PorfesionalImage" src="https://i.ibb.co/TLZ5C3L/Rompecabezas.png"/>
                </div>
            </body>            
        </>
    )
}

export default Home;