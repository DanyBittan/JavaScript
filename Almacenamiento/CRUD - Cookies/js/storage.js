"use strict"

let opciones=radio.value;
console.log(opciones);


let arrayVal=[];
// Funciones de las cookies

function guardarDatos(){
	const prodObj={
		product: prod.value,
		marca: brand.value,
		price: pre.value,
		estado: state.value
	};
	arrayVal.push(prodObj);
	let cookieVal=JSON.stringify(arrayVal);
	document.cookie="data="+cookieVal+"; path=/;";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// ***COOKIES***
// function guardarDatos(){
// 	document.cookie=cookieName+"="+prod.value;
// 	document.cookie=cookieBrand+"="+brand.value;
// 	document.cookie=cookiePre+"="+pre.value;
// 	document.cookie=cookieState+"="+state.value;
// }

// Borrar una cookie especificada

function eliminarCookies() {
}

//Función que obtiene los valores de la cookie recibiendo el nombre.


//LocalStorage

function createItem(){

}

//SessionStorage

function createSession(){
	
}