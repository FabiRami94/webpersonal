
import React from "react";
import styles from "./WebLinks.module.css";

const WebLinks = ({image, url, technologies}) => {
    return(
        <div className={styles.divLinksProjects}>
            <img 
                className={styles.linkImage} 
                src={image} 
                alt="link project"/>
            <div className={styles.textDescription}>
                <p style={{color: 'white', margin: '0px'}}>Tecnologías usadas:</p>

                <div className={styles.TechnologiesCards}>
                    {technologies.map((tech, index) => (
                        <div key={index}>{tech.icon}</div>
                    ))}
                </div>
                <a href={url} target="_blank">
                    <button className={styles.button}>Visita la página</button>
                </a>
            </div>
        </div>
    )
};

export default WebLinks;
