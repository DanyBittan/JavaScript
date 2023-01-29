"use strict"
    var productos=getCookieValue("product");
    var marcas=getCookieValue("brand");
    var precio=getCookieValue("price");
    var estado=getCookieValue("state");
    
//Envía los datos a la tabla creando una nueva fila
var row="<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>"+productos+"</th><td class='px-6 py-4'>"+marcas+"</td><td class='px-6 py-4'>"+precio+"</td><td class='px-6 py-4'>"+estado+"</td><td class='px-6 py-4'><button id='borrar' class='rounded-lg m-auto hover:bg-red-700 bg-red-500 text-white p-2 w-20'>borrar</button></td></tr>" 
    document.getElementById("cuerpo").innerHTML+=row;

//Un click al boton sube las cookies.
cargar.addEventListener("click",subirCookies);

//Botón de borrado
borrar.addEventListener("click",eliminarCookies);

console.log(productos +" "+marcas+" "+precio+" "+estado);

