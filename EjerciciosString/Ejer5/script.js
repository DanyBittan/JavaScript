"use strict"
let textoIndicador=document.getElementById("textoIndice");
let nombre=document.getElementById("name");
let texto=document.getElementById("texto");

document.getElementById("genText").addEventListener("click", cargarTexto);
document.getElementById("Palindromo").addEventListener("click", esPalindromo);

//Función Palindromo
function esPalindromo(){
    const palabras = texto.value.replace(/[\W_]/g, "").toLowerCase();
    const palabrasInvertidas = palabras.split("").reverse().join("");

    if(palabras === palabrasInvertidas){
        textoIndicador.innerHTML = "es un palindromo";
    }else {
        textoIndicador.innerHTML = "no es un palindromo";
    }
}