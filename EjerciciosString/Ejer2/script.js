"use strict"
let contador= document.getElementById("contador");
let textoContador=document.getElementById("textoContador");
let cantidadPalabras=0;
let palabraIndicada=document.getElementById("palabraIndicada");
let nombre=document.getElementById("name");
let texto=document.getElementById("texto")
document.getElementById("genText").addEventListener("click", cargarTexto);

contador.addEventListener("click",function(event){
	cantidadPalabras=0;
	const palabras=texto.value.split(" ");
	for(let i=0;i<palabras.length;i++){
		if(palabras[i]==palabraIndicada.value){
			cantidadPalabras++;
		}
	}
	textoContador.innerHTML=cantidadPalabras;
})