"use strict"
let i=0;


//Un click al boton sube al localStorage

cargar.addEventListener("click",createItemLocal);

//Envía los datos a la tabla creando una nueva fila

/**
 * Obtenemos los valores de localStorage y los convertimos en objetos de nuevo, luego recorremos un forEach que crea una fila por cada objeto creado.
 **/
 
let localS=getLocalStorage("data");
let transformObj=JSON.parse(localS);
transformObj.forEach(function (valor){
	let div=" <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>"+valor.product+"</th><td class='px-6 py-4'>"+valor.marca+"</td><td class='px-6 py-4'>"+valor.price+"</td><td class='px-6 py-4'>"+valor.estado+"</td><td><button id='borrar' value='"+i+"' class='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Borrar</td></tr>";
	cuerpo.innerHTML+=(div);
	i++;
});

//Boton de eliminación de las cookies.
borrar.addEventListener("click", eliminarLocal);


