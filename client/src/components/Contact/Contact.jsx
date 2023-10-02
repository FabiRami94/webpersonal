import React from "react"

export default function Contact () {

    return(
        <>     
            <h1>Contact</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}> 
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <label>Nombre:</label>
                    <input type="text" placeholder="Escribe el nombre..."></input>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <label>Correo:</label>
                    <input type="text" placeholder="Escribe el correo..."></input>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <label>Mensaje:</label>
                    <textarea type="text" placeholder="Escribe un mensaje..."></textarea>
                </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    datos de ciudad y telefono
                </div>
            </div>
            <button>Enviar</button>
        </>
    )
}