
import React, { useState } from "react";
import style from './Contact.module.css';
import { IoLocation } from 'react-icons/io5';
import { HiOutlinePhone } from 'react-icons/hi';
import validation from "../../assets/validation.js"
import axios from "axios";
import {alertError, alertSuccess} from "../../assets/alerts.js"

export default function Contact () {

    const [newInput, setNewIInput] = useState(
        {
            nombre: "",
            correo: "",
            mensaje: "",
        }
    );

    const [errors, setErrors] = useState({
        nombre: "Campo obligatorio*",
        correo: "Campo obligatorio*",
        mensaje: "Campo obligatorio*",
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
        <div style={{backgroundColor: 'rgb(14, 18, 41, 0.6)', padding: '20px 10px 20px 10px'}}>
            <div className={style.divGeneral}>     
                <h1 style={{color: 'rgb(0, 174, 246)'}}>Contact</h1>
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
                            <label className={style.generalText}>Nombre:</label>
                            <input 
                                id="nombre"
                                type="text" 
                                name="nombre" 
                                onChange={onChangeHandler} 
                                value={newInput.nombre}
                                className={style.input} 
                                placeholder="Escribe un nombre..."></input>
                        </div>
                        <p className={style.errorsLetter}>{errors.nombre}</p>
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row',
                            marginTop: '10px'}}>
                            <label className={style.generalText}>Correo:</label>
                            <input
                                id="correo"
                                type="text" 
                                name="correo" 
                                value={newInput.correo}
                                onChange={onChangeHandler} 
                                style={{marginLeft: '12px'}}
                                className={style.input} 
                                placeholder="Escribe un correo..."></input>
                        </div>
                        <p className={style.errorsLetter}>{errors.correo}</p>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
                            <label className={style.generalText}>Mensaje:</label>
                            <textarea
                                id="mensaje"
                                type="text" 
                                name="mensaje"
                                value={newInput.mensaje}
                                onChange={onChangeHandler}
                                rows="4" cols="60"
                                className={style.input} 
                                placeholder="Escribe un mensaje..."></textarea>
                        </div>
                        <p className={style.errorsLetter}>{errors.mensaje}</p>
                        <div style={{alignItems: 'center'}}>
                            <button  type="submit" disabled={buttonDisable()} className={style.button}>
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </button>
                        </div>
                    </form>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'column'}}>
                        <h3 style={{color: 'rgb(0, 174, 246)', marginTop: '0px'}}>Locación</h3>
                        <span className={style.generalText}>
                            <IoLocation size={20} className={style.iconos}/> Barranquilla, Colombia</span>
                        <h3 style={{color: 'rgb(0, 174, 246)'}}>Número</h3>
                        <span className={style.generalText}>
                            <HiOutlinePhone  size={20} className={style.iconos}/> +57 300 571 0921</span>
                    </div>
                </div>
            </div>
        </div>
    )
}