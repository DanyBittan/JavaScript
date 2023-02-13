"use strict"

//CARGA LOS DATOS A LA BASE DE DATOS
cargar.addEventListener("click",addItem);

//USA LAS FUNCIONES DE LOS BOTONES BORRAR Y ACTUALIZAR

cuerpo.addEventListener("click",function(e){
    let element = e.target;
    if(element.className === "borrado"){
        let identify = parseInt(element.id);
        deleteItem(identify);
    } else if(element.className === "update"){
        let newName = prompt("Introduce el nombre nuevo");
        let newBrand = prompt("Introduce la marca nueva");
        let newPrice = prompt("Introduce el precio nuevo");
        let newState = prompt("Introduce el estado nuevo");
        updateData(parseInt(element.id), newName, newBrand, newPrice, newState);
    }
})

cargaApi.addEventListener("click", addItemApi);