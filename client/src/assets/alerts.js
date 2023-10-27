
import alert from 'sweetalert2';

export const alertSuccess = () => {
    alert.fire({
        title:"Mensaje enviado",
        html: `<div class="modalExpert">
                    <span>Muchas gracias, me pondré en contacto con usted.</span> 
                    <hr>
                </div>`,
        icon: "success",
        showConfirmButton: false,
        showCloseButton: true,
    })
}

export const alertError = () =>{
    alert.fire({
        title:"Lo sentimos",
        text: "No pudimos recibir el mensaje, inténtalo mas tarde.",
        icon: "error",
        confirmButtonText: 'Cerrar'
    })
}