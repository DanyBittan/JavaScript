"use strict"
let voltear= document.getElementById("Voltear");
let textoVolteado=document.getElementById("textoVolteado");
let nombre=document.getElementById("name");
let texto=document.getElementById("texto");

document.getElementById("genText").addEventListener("click", cargarTexto);

//Función volteadora de palabras
voltear.addEventListener("click",function(event){
	let palabras=texto.value.split("");
	palabras=palabras.reverse();
	textoVolteado.value=palabras.join("");
})