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
                    <h4 style={{color: '#49b4b2'}}>Full Stack Developer</h4>
                    <p>Desarrolador Full Satck, Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae similique 
                        neque assumenda doloremque dolore iure consectetur ducimus corporis illum 
                        labore architecto alias, cumque illo odio nulla at. Autem, quas doloribus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae similique 
                        neque assumenda doloremque dolore iure consectetur ducimus corporis illum 
                        labore architecto alias, cumque illo odio nulla at. Autem, quas doloribus.</p>
                </div>
            </body>      
    )
}