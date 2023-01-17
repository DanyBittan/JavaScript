"use strict"

let boton=document.getElementsByTagName("button");
let cuadro=document.getElementById("cuadro");
let colorFondo="";

function colorea(valorColor){
	this.colorFondo=valorColor;
	cuadro.style.backgroundColor=colorFondo;
}
colorea(boton.value);