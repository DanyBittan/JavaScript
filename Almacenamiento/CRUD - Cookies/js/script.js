"use strict"
//Un click al boton sube las cookies.
cargar.addEventListener("click",guardarDatos);

//Envía los datos a la tabla creando una nueva fila
let cookieValues=getCookie("data");

let objTransform=JSON.parse(cookieValues);
console.log(objTransform);
objTransform.foreach(valor){
	document.createElement("<tr>");
	document.createElement("")
}




