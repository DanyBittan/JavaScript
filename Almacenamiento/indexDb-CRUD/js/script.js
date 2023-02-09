"use strict"
//CARGA LOS DATOS A LA BASE DE DATOS
cargar.addEventListener("click",addItem);

//BORRA LOS DATOS AL ENVIAR EL ID DEL BOTON COMO LA CLAVE DEL OBJETO
while(i>0){
    i.addEventListener("click", deleteItem);
}
/**
 * Obtenemos los valores de las cookies y los convertimos en objetos de nuevo, luego recorremos un forEach que crea una fila por cada objeto creado.
 **/