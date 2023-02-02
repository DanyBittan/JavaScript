"use strict"

/**
FALTA LA FUNCIÓN DE ACTUALIZAR
**/
let arrayVal=[];

// ** LocalStorage **

//Crear valores en el localStorage

function createItemLocal(){
	const prodObj={
		product: prod.value,
		marca: brand.value,
		price: pre.value,
		estado: state.value
	};
	arrayVal.push(prodObj);
	let localVal=JSON.stringify(arrayVal);
	localStorage.setItem("data",localVal);
}

//Obtener los datos del localStorage

function getLocalStorage(name) {
  let datos=localStorage.getItem(name);
  return datos;
}

// Borrar unos valores específicos (Borra todos los datos ## ARREGLAR ##)

function eliminarLocal(e) {
	arrayVal.splice(e.target.value,1);
	let localVal=JSON.stringify(arrayVal);
	localStorage.setItem("data",localVal);
}


