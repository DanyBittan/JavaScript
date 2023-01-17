"use strict"
let contador= document.getElementById("contador");
let textoContadorVocal=document.getElementById("textoContadorVocal");
let textoContadorConsonante=document.getElementById("textoContadorConsonante");
let textoContadorPalabra=document.getElementById("textoContadorPalabra");
let cantidad=0;
let cantidadConsonantes=0;
let nombre=document.getElementById("name");
let texto=document.getElementById("texto");
let consonante=true;
let vocales= ['a','e','i','o','u','á','é','í','ó','ú','A','E','I','O','U','Á','É','Í','Ó','Ú'];

document.getElementById("genText").addEventListener("click", cargarTexto);

//Contador de vocales en el texto
contador.addEventListener("click",function(event){
	cantidad=0;
	cantidadConsonantes=0;
	const palabrasTotales=texto.value.split(" ");
	const palabras=texto.value.split("");
	for(let i=0;i<palabras.length;i++){
		consonante=true;
		for(let j=0;j<vocales.length;j++){
			if(palabras[i]==vocales[j]){
				cantidad++;
				consonante=false;
			}
		}
		if((consonante=true)){ 
				cantidadConsonantes++;
		}
	}
	textoContadorVocal.innerHTML=cantidad;
	textoContadorConsonante.innerHTML=cantidadConsonantes;
	textoContadorPalabra.innerHTML=palabrasTotales.length;
})