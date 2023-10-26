
const validation = (state, name, setErrors, errors) => {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if(name === "nombre"){
        if(state.nombre === ''){
            setErrors({...errors, nombre: 'El campo es requerido, el nombre no debe quedar vacio.'})
        } else if (state.nombre.length > 0 && state.nombre.length < 2){
            setErrors({...errors, nombre: 'El nombre debe tener más de una letra.'})
        } else if (state.nombre.length > 30){
            setErrors({...errors, nombre: 'El nombre debe tener menos de treinta letras.'})
        } else {setErrors({...errors, nombre: ''})}
    }
    
    if(name === "correo"){
        if(state.correo === ''){
            setErrors({...errors, correo: 'El campo es requerido, el correo no debe quedar vacio.'})
        } else if(!regexEmail.test(state.correo)){
            setErrors({...errors, correo: 'Debe ser un correo electrónico.'})
        } else if(state.correo.length > 35){
            setErrors({...errors, correo: 'Un correo real debe tener menos de 35 caracteres.'})
        } else {setErrors({...errors, correo: ''})}
    }

    if(name === "mensaje"){
        if(state.mensaje.length === 0){
            setErrors({...errors, mensaje: 'El campo es requerido, el mensaje no debe quedar vacio.'})
        } else if (state.mensaje.length > 0 && state.mensaje.length <= 20){
            setErrors({...errors, mensaje: 'El mensaje debe tener más de 20 letras.'})      
        } else if (state.mensaje.length > 200){
            setErrors({...errors, mensaje: 'El mensaje debe tener menos de 200 letras.'})
        } else {setErrors({...errors, mensaje: ''})}
    }
}

export default validation;