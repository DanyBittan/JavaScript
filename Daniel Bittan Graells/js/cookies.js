"use strict"

function subirCookies(){
	document.cookie=nombre.value +" = "+ valor.value;
	console.log(valor.value);
}

envio.addEventListener("click", subirCookies);

function cambiarPagina(){
	location.replace("./cukiDos.html");
}

cum.addEventListener("click",cambiarPagina);