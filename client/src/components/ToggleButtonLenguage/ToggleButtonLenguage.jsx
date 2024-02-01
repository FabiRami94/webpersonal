
import React, { useEffect } from 'react';
import style from './ToggleButtonLenguage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { lenguage } from '../../redux/toggleSlice';

const ToggleButtonLenguage = () => {

  const toggle = useSelector((state) => state.toggle)
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(lenguage(!toggle.toogleButtonLenguage));
  }

  return (
    <>
      <input className={style.inputLetter} type='checkbox' id='lenguages' onChange={handleChange} ></input>
        <label className={style.labelLetter} for='lenguages'>ESP / ENG</label>   
      <div className={style.background}></div>
    </>
  );
};

export default ToggleButtonLenguage;