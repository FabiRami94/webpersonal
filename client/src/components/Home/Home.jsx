import React, { useEffect, useState } from "react"
import styles from './Home.module.css'

const Home = () => {

    const [isNeon, setIsNeon] = useState(true);

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
      }, []);

    return(
        <>
            <body className={styles.divGeneral}>
                <div className={styles.divTexto}>
                    <h1>Hey, soy Fabián Ramírez</h1>
                    <h2>
                        <span className={isNeon ? styles.spanNeon : styles.spanSinNeon}>UX/UI</span>&nbsp;
                        <span style={{fontSize: '1.6rem'}} className={isNeon ? styles.spanNeon : styles.spanSinNeon}>Web Designer</span>&nbsp;
                        <span className={styles.spanBlue}>& Full Stack Developer</span>
                    </h2>
                    <p>Arquitecto de profesión, y aventurándome en el fascinante mundo de la tecnología. 
                        Apasionado por el aprendizaje continuo y el crecimiento constante. "Si solo haces
                        lo que ya sabes hacer, no vas a llegar a ser más de lo que eres hoy" - 
                        Kung Fu Panda</p>
                </div>
                <div className={styles.divImagen}>
                    <img  className={styles.imagen} alt="PorfesionalImage" src="https://i.ibb.co/0Ym1m6s/imagen-Superior.jpg"/>
                </div>
            </body>            
        </>
    )
}

export default Home;