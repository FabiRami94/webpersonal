import React from "react";
import styles from './Skill.module.css';

const Skill = ({image, name, icon, link}) => {
    return(
    <div>
        <div>  
            <div className={styles.divGeneral}>
                <img src={image} alt="Skill Programing" style={{width: '100px'}}/>
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