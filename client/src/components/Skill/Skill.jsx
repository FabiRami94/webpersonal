
import React, { useEffect, useState } from "react";
import styles from './Skill.module.css';

const Skill = ({image, name, icon, width}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleImageWidth = () => {
        if (windowWidth <= 768) {
            return width / 2;
        }
        return width;
    };

    return( 
        <div>  
            <div className={styles.divGeneral} style={{ textAlign: 'center' }}>     
            <div style={{ textAlign: 'center' }}>           
                <img src={image} alt="Skill Programing" style={{ width: handleImageWidth()}}/> 
            </div>
                <h1 className={styles.textStyle}>{name}</h1>                    
                <div className={styles.buttonMedia}>{icon}</div>   
            </div> 
        </div>
    )
}

export default Skill;