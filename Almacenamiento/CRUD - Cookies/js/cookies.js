"use strict"

//Con esta función se suben las cookies y te envian a la otra página

function subirCookies(){
	document.cookie="color="+color.value;
	document.cookie="letra="+letra.value;
	document.cookie="Alineacion="+ alineacion.value;
	document.cookie="Size="+size.value;
}

//Un click al boton de cargar te envia a la página y sube las cookies.

cargar.addEventListener("click",subirCookies);
