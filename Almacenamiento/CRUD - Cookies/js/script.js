"use strict"
//Un click al boton sube las cookies.
cargar.addEventListener("click",guardarDatos);

//Envía los datos a la tabla creando una nueva fila
let cookieValues=getCookie("data");

let objTransform=JSON.parse(cookieValues);
console.log(objTransform);
objTransform.foreach(valor){
	let div=" <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>"+valor.product+"</th><td class='px-6 py-4'>"+valor.marca+"</td><td class='px-6 py-4'>"+valor.price+"</td><td class='px-6 py-4'>$2999</td></tr>"
	cuerpo.appendChild("div");
}




