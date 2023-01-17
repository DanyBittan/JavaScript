"use strict"
//Creación de todas las variables iniciales

let texto= document.getElementById("Texto");
let mayus= document.getElementById("Mayus");
let minus= document.getElementById("Minus");
let priMayus= document.getElementById("primMayus");
let ultMayus= document.getElementById("ultMayus");
let priMinus= document.getElementById("priMinus");
let ultMinus=document.getElementById("ultMinus");
let vocalesMayus= document.getElementById("vocalesMayus");
let vocalesMinus= document.getElementById("vocalesMinus");
let consonantesMayus= document.getElementById("consonantesMayus");
let consonantesMinus= document.getElementById("consonantesMinus");

let vocales= ['a','e','i','o','u','á','é','í','ó','ú'];
let vocalesEnMayus= ['A','E','I','O','U','Á','É','Í','Ó','Ú'];

//Todo el texto a mayúscula

mayus.addEventListener("click",function(event){
	texto.value=texto.value.toUpperCase();
});

//Todo el texto a minúscula

minus.addEventListener("click",function(event){
	texto.value=texto.value.toLowerCase();
});

//Primera letra de cada palabra en mayúscula

priMayus.addEventListener("click",function(event){
	const texto2 = texto.value.split(" ");
	for(let i=0; i < texto2.length ; i++){
		texto2[i]=texto2[i].charAt(0).toUpperCase() + texto2[i].substring(1);
	}
	texto.value=texto2.join(" ");
});

//Ultima letra de cada palabra en mayúscula

ultMayus.addEventListener("click",function(event){
	const texto2 = texto.value.split(" ");
	for(let i=0; i < texto2.length ; i++){
		texto2[i]=texto2[i].substring(0,texto2[i].length-1) + texto2[i].charAt(texto2[i].length-1).toUpperCase();
	}
	texto.value=texto2.join(" ");
});

//Primera letra de cada palabra en minúscula

priMinus.addEventListener("click",function(event){
	const texto2 = texto.value.split(" ");
	for(let i=0; i < texto2.length ; i++){
		texto2[i]=texto2[i].charAt(0).toLowerCase() + texto2[i].substring(1);
	}
	texto.value=texto2.join(" ");
});

//Ultima letra de cada palabra en minúscula

ultMinus.addEventListener("click",function(event){
	const texto2 = texto.value.split(" ");
	for(let i=0; i < texto2.length ; i++){
		texto2[i]=texto2[i].substring(0,texto2[i].length-1) + texto2[i].charAt(texto2[i].length-1).toLowerCase();
	}
	texto.value=texto2.join(" ");
});

//Todas las vocales en mayúscula

vocalesMayus.addEventListener("click",function(event){
	const texto2 = texto.value.split("");
	for(let i=0; i < texto2.length ; i++){
		for(let j=0; j<vocales.length; j++){
			if(texto2[i]==vocales[j]){
				texto2[i]=texto2[i].toUpperCase();
			}	
		}
	}
	texto.value=texto2.join("");
});

//Todas las vocales a minúsculas

vocalesMinus.addEventListener("click",function(event){
	const texto2 = texto.value.split("");
	for(let i=0; i < texto2.length ; i++){
		for(let j=0; j<vocales.length; j++){
			if(texto2[i]==vocalesEnMayus[j]){
				texto2[i]=texto2[i].toLowerCase();
			}	
		}
	}
	texto.value=texto2.join("");
});

//Todas las consonantes en mayúsculas

//IMPORTANTE, por algún motivo despues de revisar el código un largo tiempo, no solo cambia las consonantes 
//sino que las vocales tambien y no comprendo el motivo

consonantesMayus.addEventListener("click",function(event){
	const texto2 = texto.value.split("");
	for(let i=0; i < texto2.length ; i++){
		for(let j=0; j<vocales.length; j++){
			if(!(texto2[i]==vocales[j])){
				texto2[i]=texto2[i].toUpperCase();
			}	
		}
	}
	texto.value=texto2.join("");
});

//Todas las consonantes en minúsculas

consonantesMinus.addEventListener("click",function(event){
	const texto2 = texto.value.split("");
	for(let i=0; i < texto2.length ; i++){
		for(let j=0; j<vocales.length; j++){
			if(texto2[i]!=vocalesEnMayus[j]){
				texto2[i]=texto2[i].toLowerCase();
			}	
		}
	}
	texto.value=texto2.join("");
});
