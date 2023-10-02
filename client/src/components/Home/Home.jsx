import React from "react"
import styles from './Home.module.css'

const Home = () => {

    return(
        <>
            <body className={styles.divGeneral}>
                <div className={styles.divTexto}>
                    <h1>Hey, soy Fabián Ramírez</h1>
                    <h2 style={{color: '#49b4b2'}}>Full Stack Developer</h2>
                    <p>Desarrolador Full Satck, Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae similique 
                        neque assumenda doloremque dolore iure consectetur ducimus corporis illum 
                        labore architecto alias, cumque illo odio nulla at. Autem, quas doloribus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae similique 
                        neque assumenda doloremque dolore iure consectetur ducimus corporis illum 
                        labore architecto alias, cumque illo odio nulla at. Autem, quas doloribus.</p>
                </div>
                <div className={styles.divImagen}>
                    <img alt="PorfesionalImage"/>
                    <h1>imagen</h1>
                </div>
            </body>            
        </>
    )
}

export default Home;