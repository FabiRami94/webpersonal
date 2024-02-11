
import React, { useEffect, useState } from "react";
import styles from './Skill.module.css';
import { useSelector } from "react-redux";

const Skill = ({image, name, icon, width}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const toggleColor = useSelector((state) => state.toggle.toogleButtonColorMode);

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
            // return width / 2; OLD DESING
            return width;
        }
        return width;
    };

    return( 
        <div className={styles.divGeneralSkill}>
            <div>
                <img src={image}  style={{ width: handleImageWidth()}}/>
            </div>
            <h3 
                style={toggleColor ? {color: 'black'} : null}  
                className={styles.textStyle}>{name}</h3>   
        </div>

        // <div>  OLD DESIGN LIKE CARDS
        //     <div className={styles.divGeneral} style={{ textAlign: 'center' }}>     
        //     <div style={{ textAlign: 'center' }}>           
        //         <img src={image} alt="Skill Programing" style={{ width: handleImageWidth()}}/> 
        //     </div>
        //         <h1 className={styles.textStyle}>{name}</h1>                    
        //         <div className={styles.buttonMedia}>{icon}</div>   
        //     </div> 
        // </div>
    )
}

export default Skill;