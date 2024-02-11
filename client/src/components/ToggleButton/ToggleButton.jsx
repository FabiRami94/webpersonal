
import React from 'react';
import style from './ToggleButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { colorMode } from '../../redux/toggleSlice';

const ToggleButton = () => {

    // const handleToggleChange = () => {
    //     // Obtiene el elemento body
    //     const body = document.querySelector('body');
    
    //     // Obtiene el elemento de interruptor
    //     const toggleSwitch = document.getElementById('darkmode-toggle');
    
    //     // Cambia el color de fondo del body según el estado del interruptor
    //     body.style.backgroundColor = toggleSwitch.checked ? 'rgb(14, 18, 41)' : null;
    //   };

  const toggleColor = useSelector((state) => state.toggle)
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(colorMode(!toggleColor.toogleButtonColorMode));
  }

    return (
      <>
        <input className={style.inputColor} type='checkbox' id='darkmode-toggle' onChange={handleChange}></input>
        <label className={style.labelColor} for='darkmode-toggle'></label>
        <div className={style.background}></div>
      </>
    );
};

export default ToggleButton;