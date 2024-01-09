/* Expresion Regular */

 
let soloLetras = /^[a-zA-Z]+$/;
let soloNumeros = /^[0-9]+$/;
let validUsername = /^[a-zA-Z0-9\.]+$/;

console.log(!soloLetras.test("123"))

function validar(){

    let username = document.querySelector('#username');
    let password = document.querySelector('#password');

    if (username.value == ""){
        alert("El username es obligatorio")
        username.focus()
        return false
    } else if (!validUsername.test(username.value)){
        alert("El username no cumple el patron indicado")
        username.focus()
        return false
    }

    if(password.value == ""){
        alert("El password es obligatorio")
        password.focus()
        return false
    } else if (password.value.length < 6 || password.value.length > 15){
        alert("El password debe estar entre 6 y 15 caracteres")
        password.focus()
        return false
    }

    return true
}

let loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let error = false;

    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let usernameFB = document.querySelector('#username-feedback')

    if(username.value == ""){
        error = true;
        username.classList.add('is-invalid')
        usernameFB.innerHTML = "Campo es obligatorio"
        username.focus();
    } else if(!validUsername.test(username.value)){
        error = true;
        username.classList.add('is-invalid')
        usernameFB.innerHTML = "Campo no cumple la regla de nombre de usuario"
        username.focus()
    } else {
        username.classList.add('is-valid')
        username.classList.remove('is-invalid')
    }

    if(password.value == ""){
        error = true;
        password.classList.add('is-invalid')
        password.focus();
    } else {
        password.classList.remove('is-invalid')
    }


})


function sumar(a, b){

    if(typeof(a) !== 'number' || typeof(b) !== 'number') return;

    return a + b
}