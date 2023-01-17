let num1 = document.getElementById("op1");
let num2 = document.getElementById("op2");

let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let entera = document.getElementById("entero");
let decimal = document.getElementById("decimal");

let resultado = document.getElementById("resultado");

suma.addEventListener("click", function(event) {
	resultado.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
});

resta.addEventListener("click", function(event) {
	resultado.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);
});

multiplicacion.addEventListener("click", function(event) {
	resultado.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);
});

division.addEventListener("click", function(event) {
	resultado.innerHTML = parseFloat(num1.value) / parseFloat(num2.value);
});

entera.addEventListener("click", function(event) {
	num1.value = Math.trunc(resultado.innerHTML);
});

decimal.addEventListener("click", function(event) {
	num2.value = parseFloat("0." + resultado.innerHTML.toString().split(".")[1]);
});