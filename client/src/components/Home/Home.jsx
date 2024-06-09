
import React, { useEffect, useState } from "react"
import styles from './Home.module.css'
import { useSelector } from "react-redux";
import DividingLine from "../DividingLine/DividingLine.jsx";

const Home = () => {

    const [hoverPanda, setHoverPanda] = useState(false);
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

      const handleMouseEnter = () => {
        setHoverPanda(true);
      };

      const handleMouseLeave = () => {
        setHoverPanda(false);
      };

      //Parallax
      useEffect(() => {
        const handleMouseMove = (event) => {
            const images = document.querySelectorAll(`.${styles.imagen}`);
            images.forEach(image => {
                const speed = parseFloat(image.getAttribute('data-speed'));
                const xOffset = (window.innerWidth / 2 - event.clientX) * speed;
                const yOffset = (window.innerHeight / 2 - event.clientY) * speed;
                image.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return(
          <>
            <body style={!toggleColor ? { backgroundColor: 'rgb(9, 12, 24)'} : null} className={styles.divGeneral}>
                <div style={toggleColor ? { color: 'black' } : null} className={styles.divTexto}>
                    <div  className={styles.divTitleChange}>
                      <h1 
                        style={{fontFamily: "Protest Riot", fontWeight: '400'}} 
                        className={`${styles.p1} ${!toggle && styles.transition}`}>
                        {`Hey, soy Fabián Ramírez`}
                      </h1>
                      <h1 
                        style={{fontFamily: "Protest Riot", fontWeight: '400'}} 
                        className={`${styles.p2} ${toggle && styles.transition}`}>
                        {`Hey, I'm Fabián Ramírez`}
                      </h1>
                    </div>
                    <h1 style={toggleColor ? { color: 'rgb(14, 18, 41)',fontFamily: "Protest Riot", fontWeight: '400' } : {fontFamily: "Protest Riot", fontWeight: '400'}}
                        className={styles.tituloSkill}>
                        {/* <span className={isNeon ? styles.spanNeon : styles.spanSinNeon}>UX/UI</span>&nbsp;
                        <span style={{fontSize: '1.6rem'}} className={isNeon ? styles.spanNeon : styles.spanSinNeon}>Web Designer</span>&nbsp; */}
                        <span style={toggleColor ? {textShadow} : null} className={styles.spanBlue}>Full Stack Developer</span>
                    </h1>
                    <div className={styles.divTextoChange}>
                      <p className={`${styles.p1} ${!toggle && styles.transition}`}>
                        {`Arquitecto de profesión, y aventurándome en el fascinante mundo de la tecnología. 
                          Apasionado por el aprendizaje continuo y el crecimiento constante. "Si solo haces
                          lo que ya sabes hacer, no vas a llegar a ser más de lo que eres hoy" - 
                          `}<p style={{fontFamily: 'Protest Revolution', display: 'inline'}}> Kung Fu Panda</p>
                      </p>
                      <p className={`${styles.p2} ${toggle && styles.transition}`}>
                        {`Architect by profession, and venturing into the fascinating world of technology.
                          Passionate about continuous learning and constant growth. "If you only do
                          what you already know how to do, you will not become more than what you are today" -
                          `}<p style={{fontFamily: 'Protest Revolution', display: 'inline'}}> Kung Fu Panda</p>
                      </p>
                    </div>
                </div>
                <div className={styles.divImagen}>
                    <img 
                      style={{ filter: toggleColor ? 
                        'drop-shadow(10px -5px 6px rgba(0,0,0,0.8))' : 
                        'drop-shadow(10px -5px 6px rgba(250,250,250,0.4))' }} 
                      onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}
                      className={styles.imagen}
                      data-speed="0.02"
                      alt="PorfesionalImage"
                      src={hoverPanda ? 
                        "https://i.ibb.co/rMh2xwn/Panda-Sin-fondo.png" : 
                        "https://i.ibb.co/1QSS3Xh/Proceso-Panda-2-Sin-dedo.png"}
                      />
                </div>
            </body>                  
            <DividingLine 
              toggleColor = {toggleColor}
              pTop = {'20px'}
              pTopResp = {'10px'}
              pBottom = {'50px'}
              pBottomResp = {'30px'}
              ></DividingLine>
          </>
    )
}

export default Home;