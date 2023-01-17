"use strict"
let piedra=document.getElementById("piedra");
let papel=document.getElementById("papel");
let tijera=document.getElementById("tijera");
let resultado=document.getElementById("resultado");
let versus=document.getElementById("vs");
let jugador=document.getElementById("jugador");
let maquinafoto=document.getElementById("maquinafoto");
let imagenes=["Imagenes/Piedra.png","Imagenes/Papel.png","Imagenes/Tijeras.png","Imagenes/vs.png"];


function random(minimo, maximo){
	let numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
	return numero;
}

piedra.addEventListener("click",function(event){
	let maquina=random(0,2);
	jugador.innerHTML="<img src='"+imagenes[0]+"'></img>";
	versus.innerHTML="<img src='"+imagenes[3]+"'></img>";
	maquinafoto.innerHTML="<img src='"+imagenes[maquina]+"'></img>";
	switch(maquina){
		case 0:
		resultado.innerHTML="Empate";
		break;
		case 1:
		resultado.innerHTML="Perdiste";
		break;
		case 2:
		resultado.innerHTML="Ganaste";
		break;
		default:
	}
})
papel.addEventListener("click",function(event){
	let maquina=random(0,2);
	jugador.innerHTML="<img src='"+imagenes[1]+"'></img>";
	maquinafoto.innerHTML="<img src='"+imagenes[maquina]+"'></img>";
	if(maquina==0){
		resultado.innerHTML="Ganaste";
	}
	if(maquina==1){
		resultado.innerHTML="Empate";
	}
	if(maquina==2){
		resultado.innerHTML="Perdiste";
	}
})
tijera.addEventListener("click",function(event){

	let maquina=random(0,2);
	jugador.innerHTML="<img src='"+imagenes[2]+"'></img>";
	maquinafoto.innerHTML="<img src='"+imagenes[maquina]+"'></img>";
	if(maquina==0){
		resultado.innerHTML="Perdiste";
	}
	if(maquina==1){
		resultado.innerHTML="Ganaste";
	}
	if(maquina==2){
		resultado.innerHTML="Empate";
	}
})