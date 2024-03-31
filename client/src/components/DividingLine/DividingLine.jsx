
import React, { useEffect, useState } from "react";
import styles from "./DividingLine.module.css";

const DividingLine = ({toggleColor, pTop, pTopResp, pBottom, pBottomResp}) => {

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

    return(
        <>
            <div 
                className={styles.space}
                style={!toggleColor ? 
                    {backgroundColor: 'rgb(9, 12, 24)', 
                    paddingTop: windowWidth > 768 ? pTop : pTopResp, 
                    paddingBottom:  windowWidth > 768 ? pBottom : pBottomResp} :  
                    {paddingTop: windowWidth > 768 ? pTop : pTopResp, 
                    paddingBottom:  windowWidth > 768 ? pBottom : pBottomResp}} 
                >
                    <div>{console.log(windowWidth)}</div>
                <div 
                    className={!toggleColor ? styles.twinkleDark : styles.twinkle}></div>
            </div>
        </>
    )
};

export default DividingLine;