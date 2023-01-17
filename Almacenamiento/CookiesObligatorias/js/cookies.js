"use strict"

function subirCookies(){
	document.cookie="color="+color.value;
	document.cookie="letra="+letra.value;
	document.cookie="Alineación="+ alineacion.value;
	document.cookie="Tamaño="+size.value;
}

function cambioPagina(){
	location.replace("./CookieDos.html");
}

comprueba.addEventListener("click",cambioPagina);