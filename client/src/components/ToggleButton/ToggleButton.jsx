
import React from 'react';
import style from './ToggleButton.module.css';

const ToggleButton = () => {

    // const handleToggleChange = () => {
    //     // Obtiene el elemento body
    //     const body = document.querySelector('body');
    
    //     // Obtiene el elemento de interruptor
    //     const toggleSwitch = document.getElementById('darkmode-toggle');
    
    //     // Cambia el color de fondo del body según el estado del interruptor
    //     body.style.backgroundColor = toggleSwitch.checked ? 'rgb(14, 18, 41)' : null;
    //   };

    return (
      <>
        <input className={style.inputColor} type='checkbox' id='darkmode-toggle' ></input>
        <label className={style.labelColor} for='darkmode-toggle'></label>
        <div className={style.background}></div>
      </>
    );
};

export default ToggleButton;