import React from "react";
import styles from './Skill.module.css';

const Skill = ({image, name, icon, link, width}) => {
    return(
    <div>
        <div>  
            <div className={styles.divGeneral} style={{ textAlign: 'center' }}>     
            <div style={{ textAlign: 'center' }}>           
                <img src={image} alt="Skill Programing" style={{width: width}}/> 
            </div>
                <h1 className={styles.textStyle}>{name}</h1>               
                <a href={link} target="_blank" rel="noreferrer">
                    <div className={styles.buttonMedia}>{icon}</div>
                </a> 
            </div> 
        </div>
    </div>
    )
}

export default Skill