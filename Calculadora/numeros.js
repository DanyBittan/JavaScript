"use strict"
let uno=document.getElementById("1");
let dos=document.getElementById("2");
let tres=document.getElementById("3");
let cuatro=document.getElementById("4");
let cinco=document.getElementById("5");
let seis=document.getElementById("6");
let siete=document.getElementById("7");
let ocho=document.getElementById("8");
let nueve=document.getElementById("9");
let cero=document.getElementById("0");

const numeroSeleccionado=(n)=>{
	const numero=n.target.innerText;
	pantalla.innerHTML+=numero;
}
uno.onclick=numeroSeleccionado;
dos.onclick=numeroSeleccionado;
tres.onclick=numeroSeleccionado;
cuatro.onclick=numeroSeleccionado;
cinco.onclick=numeroSeleccionado;
seis.onclick=numeroSeleccionado;
siete.onclick=numeroSeleccionado;
ocho.onclick=numeroSeleccionado;
nueve.onclick=numeroSeleccionado;
cero.onclick=numeroSeleccionado;