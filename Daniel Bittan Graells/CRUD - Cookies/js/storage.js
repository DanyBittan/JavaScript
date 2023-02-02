"use strict"
//Tiempo 

var now = new Date();
var time = now.getTime();
var expireTime = time + 1000*36000;
now.setTime(expireTime);

// ***COOKIES***
let arrayVal;
if(document.cookie!=""){
	let info=getCookie("data");
	let objTrans=JSON.parse(info);
	arrayVal=objTrans;
}else{
	arrayVal=[];
}

// Funciones de las cookies

function guardarDatos(){
	const prodObj={
		product: prod.value,
		marca: brand.value,
		price: pre.value,
		estado: state.value
	};
	arrayVal.push(prodObj);
	let cookieVal=JSON.stringify(arrayVal);
	document.cookie="data="+cookieVal+"; path=/;expires="+now.toUTCString();
}

//Función que obtiene los valores de la cookie recibiendo el nombre.

function getCookie(name) {
  let nameCookie = name + "=";
  let quant = document.cookie.split(';');
  for (let i = 0; i < quant.length; i++) {
    let c = quant[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameCookie) == 0) return c.substring(nameCookie.length, c.length);
  }
  return null;
}

// Borrar una cookie especificada (solo borra los datos de la primera fila. ## ARREGLAR ##)

function eliminarCookies(e) {
	arrayVal.splice(e.target.value,1);
	console.log(e.target.value);
	let cookieVal=JSON.stringify(arrayVal);
	document.cookie="data="+cookieVal+"; path=/;expires="+now.toUTCString();
}
