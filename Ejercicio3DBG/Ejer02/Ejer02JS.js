let num = document.getElementById("num1");
let numc = document.getElementById("num2");

let binario = document.getElementById("binario");
let octal = document.getElementById("octal");
let hexadecimal = document.getElementById("hexadecimal");
let binarioD = document.getElementById("binarioDecimal");
let octalD = document.getElementById("octalDecimal");
let hexadecimalD = document.getElementById("hexadecimalDecimal");
let copia = document.getElementById("copia");

let resultado = document.getElementById("resultado1");
let resultado2= document.getElementById("resultado2");

//Paso de DECIMAL a BASE

binario.addEventListener("click", function(event){
	resultado.innerHTML = parseInt(num.value).toString(2);
})

octal.addEventListener("click", function(event){
	resultado.innerHTML = parseInt(num.value).toString(8);
})

hexadecimal.addEventListener("click", function(event){
	resultado.innerHTML = parseInt(num.value).toString(16);
})

copia.addEventListener("click", function(event){
	numc.value = resultado.innerHTML;
})

binarioD.addEventListener("click", function(event){
	resultado2.innerHTML = parseInt(numc.value, 2);
})

octalD.addEventListener("click", function(event){
	resultado2.innerHTML = parseInt(numc.value, 8);
})

hexadecimalD.addEventListener("click", function(event){
	resultado2.innerHTML = parseInt(numc.value, 16);
})

//COPIAR

