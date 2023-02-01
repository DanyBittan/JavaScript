"use strict"

//Dar valores a una cookie

var pr=["si"];
var price=["1999"];
var bra=["nike"];
var sta=["good"];

// Funciones de las cookies
document.cookie="product="+pr+';path=/;';
document.cookie="brand="+bra+';path=/;';
document.cookie="price="+price+';path=/;';
document.cookie="state="+sta+';path=/;';

function subirCookies(){
	pr.push(document.getElementById("prod").value);
	price.push(document.getElementById("pre").value);
	bra.push(document.getElementById("brand").value);
	sta.push(document.getElementById("state").value);
}
console.log(pr);
// ***COOKIES***
// function subirCookies(){
// 	document.cookie=cookieName+"="+prod.value;
// 	document.cookie=cookieBrand+"="+brand.value;
// 	document.cookie=cookiePre+"="+pre.value;
// 	document.cookie=cookieState+"="+state.value;
// }

// Borrar una cookie especificada

function eliminarCookies() {
	document.cookie='product=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie='brand=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie='price=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie='state=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//Función que obtiene los valores de la cookie recibiendo el nombre.

function getCookieValue(name) {
    var encuentra = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return encuentra ? encuentra[2] : "";
}

//LocalStorage

function createItem(){

}

//SessionStorage

function createSession(){
	
}