"use strict"
    
//Envía los datos a la tabla creando una nueva fila
var cookieData=document.cookie.split(';');
var valuesData=cookieData.split('=');
console.log(valuesData);
//Un click al boton sube las cookies.
cargar.addEventListener("click",guardarDatos);

