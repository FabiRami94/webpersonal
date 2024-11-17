
import React, { useEffect, useState } from "react";
import style from './Contact.module.css';
import { IoLocation } from 'react-icons/io5';
import { HiOutlinePhone } from 'react-icons/hi';
import validation from "../../assets/validation.js"
import axios from "axios";
import {alertError, alertSuccess} from "../../assets/alerts.js"
import { useSelector } from "react-redux";

export default function Contact () {

    const toggle = useSelector((state) => state.toggle.toogleButtonLenguage);
    const toggleColor = useSelector((state) => state.toggle.toogleButtonColorMode);
    const textShadow = '1px 1px 2px black';

    const [newInput, setNewIInput] = useState(
        {
            nombre: "",
            correo: "",
            mensaje: "",
        }
    );

    useEffect(() =>{

    },[toggle]) //review

    const [errors, setErrors] = useState(  
        toggle ? {
            nombre: "Campo obligatorio*",
            correo: "Campo obligatorio*",
            mensaje: "Campo obligatorio*",
        } : {
            nombre: "Obligatory field*",
            correo: "Obligatory field*", //review
            mensaje: "Obligatory field*",
        });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onChangeHandler = (event) => {

        setNewIInput({...newInput, [event.target.name] : event.target.value})
        validation(
            {...newInput, [event.target.name]: event.target.value}, 
            event.target.name, 
            setErrors, 
            errors
        );
    }

    const buttonDisable = () => {
        let isDisable;
        for(let error in errors){
            if(errors[error] === "" && isSubmitting === false){
                isDisable = false
            } else if(errors[error].length >= 1 || isSubmitting){
                isDisable = true; 
                break};
        } 
        return isDisable;
    }

    const submitHandler = async (event) => {
        event.preventDefault();    
        setIsSubmitting(true);
        try { 

            await axios.post(
                '/correo/enviar', newInput).then(data => alertSuccess());

            setNewIInput({
                nombre: "",
                correo: "",
                mensaje: "",
            });
            setErrors({
                nombre: "Campo obligatorio*",
                correo: "Campo obligatorio*",
                mensaje: "Campo obligatorio*",
            });

        } catch (error) {
            alertError();
            // window.location.reload();
            setNewIInput({
                nombre: "",
                correo: "",
                mensaje: "",
            });
            setErrors({
                nombre: "Campo obligatorio*",
                correo: "Campo obligatorio*",
                mensaje: "Campo obligatorio*",
            });
        } finally {
            setIsSubmitting(false); // Establecer isSubmitting en false después de la operación de envío
        }
    }

    return(
        <div style={
            !toggleColor ? 
            { backgroundColor: 'rgb(9, 12, 24)', padding: '20px 10px 20px 10px'} : 
            {padding: '20px 10px 20px 10px'}}>
            <div 
                style={toggleColor ? { backgroundColor: 'rgb(14, 18, 41, 0.8)'} : null}
                className={style.divGeneral}> 
                <div className={style.divChange}>
                    <h1 className={`${style.p3} ${!toggle && style.transition}`} style={{color: 'rgb(0, 174, 246)'}}>Contacto</h1>
                    <h1 className={`${style.p3} ${toggle && style.transition}`} style={{color: 'rgb(0, 174, 246)'}}>Contact</h1>
                </div>    
                <div className={style.divSecundario}>
                    <form 
                        onSubmit={submitHandler}
                        style={{
                            display: 'flex', 
                            flexDirection: 'column'}}> 
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row', 
                            marginTop: '10px'}}>
                            <div style={{width: '4.5rem'}}>
                                <label 
                                    className={`${style.generalText} ${style.p1} ${!toggle && style.transition}`}>Nombre:</label>
                                <label 
                                    className={`${style.generalText} ${style.p2} ${toggle && style.transition}`}>Name:</label>
                            </div>
                            <input 
                                id="nombre"
                                type="text" 
                                name="nombre" 
                                onChange={onChangeHandler} 
                                value={newInput.nombre}
                                className={style.input} 
                                placeholder="Escribe un nombre..."></input>
                        </div>
                        <p
                            className={style.errorsLetter}>{errors.nombre}</p>
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row',
                            marginTop: '10px'}}>
                            <div style={{width: '4.5rem'}}>
                                <label 
                                    className={`${style.generalText} ${style.p1} ${!toggle && style.transition}`}>Correo:</label>
                                <label 
                                    className={`${style.generalText} ${style.p2} ${toggle && style.transition}`}>Email:</label>
                            </div>
                            <input
                                id="correo"
                                type="text" 
                                name="correo" 
                                value={newInput.correo}
                                onChange={onChangeHandler} 
                                className={style.input} 
                                placeholder="Escribe un correo..."></input>
                        </div>
                        <p 
                            className={style.errorsLetter}>{errors.correo}</p>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
                            <div style={{width: '4.5rem'}}>
                                <label 
                                    className={`${style.generalText} ${style.p1} ${!toggle && style.transition}`}>Mensaje:</label>
                                <label 
                                    className={`${style.generalText} ${style.p2} ${toggle && style.transition}`}>Message:</label>
                            </div>
                            <textarea
                                id="mensaje"
                                type="text" 
                                name="mensaje"
                                value={newInput.mensaje}
                                onChange={onChangeHandler}
                                rows="4" cols="60"
                                style={{height: '5rem'}}
                                className={style.input} 
                                placeholder="Escribe un mensaje..."></textarea>
                        </div>
                        <p 
                            className={style.errorsLetter}>{errors.mensaje}</p>
                        <div style={{alignItems: 'center'}}>
                            <button  
                                style={toggleColor ? { color: 'black' } : null} 
                                type="submit" 
                                disabled={buttonDisable()} 
                                className={style.button}>
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </button>
                        </div>
                    </form>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'column'}}>
                        <h3 style={{color: 'rgb(0, 174, 246)', marginTop: '0px'}}>Nationality</h3>
                        <span 
                            className={style.generalText}>
                            <IoLocation size={20} className={style.iconos}/> Colombia</span>
                        <h3 style={{color: 'rgb(0, 174, 246)'}}>Locación</h3>
                        <span 
                            className={style.generalText}>
                            <IoLocation size={20} className={style.iconos}/> Dubai, United Emirates Arab</span>
                        <h3 style={{color: 'rgb(0, 174, 246)'}}>Número</h3>
                        <span 
                            className={style.generalText}>
                            <HiOutlinePhone  size={20} className={style.iconos}/> +971 58 108 5856</span>
                    </div>
                </div>
            </div>
        </div>
    )
}