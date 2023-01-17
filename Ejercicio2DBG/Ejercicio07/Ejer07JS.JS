"use strict"

let nombre=prompt("Introduce tu nombre");

function saluda(){
    alert("Hola que tal estas "+nombre);
}
function despedida(){
    alert("Me despido de ti "+nombre);
}

 document.getElementById("caja").addEventListener("mouseover",saluda);
 
 document.getElementById("caja").addEventListener("mouseout",despedida);