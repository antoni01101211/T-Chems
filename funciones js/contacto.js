// variables 
const botonEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#formulario1');
const btnReset = document.querySelector('#btnreset')

// variable de validacion email de forma global usando una expresion regular
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// variables para campos 
const idplay = document.querySelector('#id-play');
const nombre = document.querySelector('#nombre');
const edad = document.querySelector('#edades');
const email = document.querySelector('#email');
const numero= document.querySelector('#numero');
const zona = document.querySelector('#zona');
const boss = document.querySelector('#boss');
const comentario = document.querySelector('#comentario');


eventListeners();
function eventListeners (){
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);
    // Campos del Formulario para validar
    idplay.addEventListener('blur',validarFormulario);
    nombre.addEventListener('blur',validarFormulario);
    edad.addEventListener('blur',validarFormulario);
    email.addEventListener('blur',validarFormulario);
    numero.addEventListener('blur',validarFormulario);
    zona.addEventListener('blur',validarFormulario);
    boss.addEventListener('blur',validarFormulario);
    comentario.addEventListener('blur',validarFormulario);
    //reinicio formulario
    btnReset.addEventListener('click', resetearFormulario);
   //Envir email
   formulario.addEventListener('submit', enviarEmail);

}
// funciones

function iniciarApp(){
botonEnviar.disabled = true;
botonEnviar.style.opacity = '0.5' 
}


// validar formulario
function validarFormulario(e){

    e.target.style.border.remove = '2.5px solid red';
    e.target.style.border = '2.5px solid green';
// aqui se uso un metodo de filtrado y busqueda
    if(e.target.value.length > 0){
        const error = document.querySelector('p.error')
        if(error){
            error.remove();
        }
        
    }
    else{
        e.target.style.border = '2.5px solid red';
        const error = document.querySelector('p.error')
            if(error){
                error.remove();
            }
        mostrarError('Todos los campos son obligatorios');
    }
    if(e.target.type === 'email'){
        
        if(er.test(e.target.value)){
            console.log('email valido')
        }
        else{
            // como hacer que solo ejecute cuando haya un mensaje de error
            const error = document.querySelector('p.error')
            if(error){
                error.remove();
            }
            mostrarError('E-mail no valido')
            e.target.style.border = '2.5px solid red';

        }
    }
    if(er.test(email.value) && (idplay.value != '') && (nombre.value != '') && (edad.value != '') && (numero.value != '') && (zona.value != '') && (boss.value != '') && (comentario.value != '') ){
        botonEnviar.disabled = false;
        botonEnviar.style.opacity = '1'
    }
    else{
        botonEnviar.disabled = true;
        botonEnviar.style.opacity = '0.5';

    }
    
}



function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.style.width = '500px'
    mensajeError.style.height = '10 px'
    mensajeError.style.border = '3px solid red'
    mensajeError.style.color = 'red'
    mensajeError.style.padding = '3px'
    mensajeError.style.margin = 'auto'
    mensajeError.style.textAlign = 'center'
    mensajeError.classList.add('error')
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}
function enviarEmail(e){
    e.preventDefault();
    // mostrar spider de carga

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // accion despues de 3 segundos ocultar spinner y mostrar mensaje
    setTimeout( ()=>{
      spinner.style.display = 'none'
    //   mensaje de envio correctamente

    const parrafo = document.createElement('p');
    parrafo.textContent = 'Mensaje enviado';
    parrafo.style.width = '500px';
    parrafo.style.height = '10 px';
    parrafo.style.border = '3px solid green';
    parrafo.style.color = 'green';
    parrafo.style.padding = '3px';
    parrafo.style.margin = 'auto';
    parrafo.style.textAlign = 'center';
    // insertamos parrafo antes del spinner
    formulario.appendChild(parrafo);
    setTimeout(()=>{
        parrafo.remove();// quita el mensaje de enviado despues de un tiempo
        
        resetearFormulario();//llama a la funcion
        iniciarApp();
    },3000);
    },3000); 
}
//reset del formulario despues de enviado

function resetearFormulario(){
    email.value =''
    idplay.value = '' 
    nombre.value = ''
    edad.value = '' 
    numero.value = '' 
    zona.value = ''
    boss.value = ''
    comentario.value = ''

 }