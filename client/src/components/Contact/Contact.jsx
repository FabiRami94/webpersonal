import React from "react";
import style from './Contact.module.css';
import { IoLocation } from 'react-icons/io5';
import { HiOutlinePhone } from 'react-icons/hi';

export default function Contact () {

    return(
        <div style={{backgroundColor: 'rgb(8, 28, 41, 0.4)', padding: '20px'}}>
            <div className={style.divGeneral}>     
                <h1 style={{color: 'rgb(0, 174, 246)'}}>Contact</h1>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-evenly', 
                    marginBottom: '20px'}}>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'column'}}> 
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        marginTop: '10px'}}>
                        <label className={style.generalText}>Nombre:</label>
                        <input 
                            className={style.input} 
                            type="text" 
                            placeholder="Escribe un nombre..."></input>
                    </div>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'row',
                        marginTop: '10px'}}>
                        <label className={style.generalText}>Correo:</label>
                        <input 
                            style={{marginLeft: '12px'}}
                            className={style.input} 
                            type="text" 
                            placeholder="Escribe un correo..."></input>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
                        <label className={style.generalText}>Mensaje:</label>
                        <textarea 
                            rows="4" cols="60"
                            className={style.input} 
                            type="text" 
                            placeholder="Escribe un mensaje..."></textarea>
                    </div>
                    </div>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'column'}}>
                        <h3 style={{color: 'rgb(0, 174, 246)', marginTop: '0px'}}>Locación</h3>
                        <span className={style.generalText}>
                            <IoLocation size={20} className={style.iconos}/> Medellín, Colombia</span>
                        <h3 style={{color: 'rgb(0, 174, 246)'}}>Número</h3>
                        <span className={style.generalText}>
                            <HiOutlinePhone  size={20} className={style.iconos}/> +57 300 571 0921</span>
                    </div>
                </div>
                <button className={style.button}>Enviar</button>
            </div>
        </div>
    )
}