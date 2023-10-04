import React from "react";
import styles from  "./Portafolios.module.css";
import Portafolio from "../Portafolio/Portafolio";

class Portafolios extends React.Component {
    // constructor(){

    // }

    render(){
        return (
        <div className={styles.divGeneral}>
            <div>
                <h1 style={{display: 'flex', justifyContent: 'center'}}>
                    <span style={{color: 'white', marginTop: '20px'}}>Mis</span>&nbsp;
                    <span style={{color: '#49b4b2', marginTop: '45px'}}>Proyectos</span></h1>
            </div>
            <div>
                <Portafolio></Portafolio>
            </div>       
        </div>
        )
    }
}


export default Portafolios;