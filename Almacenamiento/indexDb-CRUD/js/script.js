"use strict"
//CARGA LOS DATOS A LA BASE DE DATOS
cargar.addEventListener("click",addItem);

//BORRA LOS DATOS AL ENVIAR EL ID DEL BOTON COMO LA CLAVE DEL OBJETO
cuerpo.addEventListener("click",function(e){
    let element = e.target;
    console.log(element.className);
    if(element.className === "borrado"){
        let identifier = parseInt(element.id);
        deleteItem(identifier);
    }else if(element.className === "update"){
        console.log("update");
    }
})
/**
 * Obtenemos los valores de las cookies y los convertimos en objetos de nuevo, luego recorremos un forEach que crea una fila por cada objeto creado.
 **/