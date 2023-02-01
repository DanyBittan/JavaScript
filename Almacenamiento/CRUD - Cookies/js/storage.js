"use strict"

var opciones=radio.value;
console.log(opciones);



// Funciones de las cookies

function guardarDatos(){
	const prodObj={
		product: prod.value,
		marca: brand.value,
		price: pre.value,
		estado: state.value
	};
	var cookieVal=JSON.stringify(prodObj);
	var cantCookie=document.cookie.split(";");
	var id=cantCookie.length;
	document.cookie=id+"="+cookieVal+"; path=/;";
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
