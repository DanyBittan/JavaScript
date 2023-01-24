"use strict"

//Función que obtiene los valores de la cookie recibiendo el nombre.

function getCookieValue(name) {
    let encuentra = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return encuentra ? encuentra[2] : "";
}

let alinear=getCookieValue("Alineacion");
let size=getCookieValue("Size");
let letra=getCookieValue("letra");
let colorFondo=getCookieValue("color");

console.log(alinear +" "+size+" "+letra+" "+colorFondo);

//Cambiar el css de la página

fondo.style.backgroundColor=colorFondo;
parrafo.style.cssText="font-family:"+letra;
parrafo.style.fontSize=size;
alineo.style.cssText="justify-content:"+alinear;
