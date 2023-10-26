
import React, { useState } from "react";
import style from './Contact.module.css';
import { IoLocation } from 'react-icons/io5';
import { HiOutlinePhone } from 'react-icons/hi';
import validation from "../../assets/validation.js"
import axios from "axios";

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

    const onChangeHandler = (event) => {

        setNewIInput({...newInput, [event.target.name] : event.target.value})
        console.log(event.target.value)
        validation(
            {...newInput, [event.target.name]: event.target.value}, 
            event.target.name, 
            setErrors, 
            errors
        );
        console.log(errors)
    }

    const buttonDisable = () => {
        let isDisable;
        for(let error in errors){
            if(errors[error] === ""){
                isDisable = false
            } else {isDisable = true; 
                break};
        } 
        return isDisable;
    }

    const submitHandler = async (event) => {
        event.preventDefault();    
        try {    
            await axios.post('http://localhost:3001/correo/enviar', newInput).then(res => alert('Mensaje enviado con éxito'));

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
            window.alert({error: error.message});
            window.location.reload();
        }
    }

    return(
        <div style={{backgroundColor: 'rgb(8, 28, 41, 0.4)', padding: '20px'}}>
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
                                onChange={onChangeHandler} 
                                name="nombre" 
                                className={style.input} 
                                type="text" 
                                placeholder="Escribe un nombre..."></input>
                        </div>
                        <p className={style.errorsLetter}>{errors.nombre}</p>
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row',
                            marginTop: '10px'}}>
                            <label className={style.generalText}>Correo:</label>
                            <input
                                onChange={onChangeHandler} 
                                name="correo" 
                                style={{marginLeft: '12px'}}
                                className={style.input} 
                                type="text" 
                                placeholder="Escribe un correo..."></input>
                        </div>
                        <p className={style.errorsLetter}>{errors.correo}</p>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
                            <label className={style.generalText}>Mensaje:</label>
                            <textarea
                                onChange={onChangeHandler}
                                name="mensaje"
                                rows="4" cols="60"
                                className={style.input} 
                                type="text" 
                                placeholder="Escribe un mensaje..."></textarea>
                        </div>
                        <p className={style.errorsLetter}>{errors.mensaje}</p>
                        <div style={{alignItems: 'center'}}>
                            <button  type="submit" disabled={buttonDisable()} className={style.button}>Enviar</button>
                        </div>
                    </form>
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
            </div>
        </div>
    )
}