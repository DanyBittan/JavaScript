let piedra=document.getElementById("piedra");
let papel=document.getElementById("papel");
let tijera=document.getElementById("tijera");
let resultado=document.getElementById("resultado");
let versus=document.getElementById("vs");
let jugador=document.getElementById("jugador");
let maquinafoto=document.getElementById("maquinafoto");

//Este array genera la imagen que se presenta por pantalla

let imagenes=["Imagenes/Piedra.png","Imagenes/Papel.png","Imagenes/Tijeras.png","Imagenes/lagarto.png","Imagenes/spock.png","Imagenes/vs.png"];

/*Genera un valor aleatorio entre dos números ya especificados.*/

function random(minimo, maximo){
	let numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
	return numero;
}

/*Las siguientes funciones comprueban las opciones del jugador y genera la de la máquina
y devuelve el resultado de la partida*/

piedra.addEventListener("click",function(event){
	let maquina=random(0,4);
	jugador.innerHTML="<img src='"+imagenes[0]+"'></img>";
	versus.innerHTML="<img src='"+imagenes[5]+"'></img>";
	maquinafoto.innerHTML="<img src='"+imagenes[maquina]+"'></img>";
	switch(maquina){
		case 0:
		resultado.innerHTML="Empate";
		break;
		case 1:
		resultado.innerHTML="Papel envuelve piedra";
		break;
		case 2:
		resultado.innerHTML="Piedra rompe tijera";
		break;
		case 3:
		resultado.innerHTML="Piedra aplasta lagarto";
		break;
		case 4:
		resultado.innerHTML="Spock vaporiza piedra";
		break;
		default:
	}
})
papel.addEventListener("click",function(event){
	let maquina=random(0,4);
	jugador.innerHTML="<img src='"+imagenes[1]+"'></img>";
	versus.innerHTML="<img src='"+imagenes[5]+"'></img>";
	maquinafoto.innerHTML="<img src='"+imagenes[maquina]+"'></img>";
	switch(maquina){
		case 0:
		resultado.innerHTML="Papel envuelve piedra";
		break;
		case 1:
		resultado.innerHTML="Empate";
		break;
		case 2:
		resultado.innerHTML="Tijera corta papel";
		break;
		case 3:
		resultado.innerHTML="Lagarto devora papel";
		break;
		case 4:
		resultado.innerHTML="Papel desautoriza spock";
		break;
		default:
	}
})
tijera.addEventListener("click",function(event){

	let maquina=random(0,4);
	jugador.innerHTML="<img src='"+imagenes[2]+"'></img>";
	versus.innerHTML="<img src='"+imagenes[5]+"'></img>";
	maquinafoto.innerHTML="<img src='"+imagenes[maquina]+"'></img>";
	switch(maquina){
		case 0:
		resultado.innerHTML="Piedra rompe tijera";
		break;
		case 1:
		resultado.innerHTML="Tijera corta papel";
		break;
		case 2:
		resultado.innerHTML="Empate";
		break;
		case 3:
		resultado.innerHTML="Tijera decapita lagarto";
		break;
		case 4:
		resultado.innerHTML="Spock rompe tijera";
		break;
		default:
	}
})
lagarto.addEventListener("click",function(event){

	let maquina=random(0,4);
	jugador.innerHTML="<img src='"+imagenes[3]+"'></img>";
	versus.innerHTML="<img src='"+imagenes[5]+"'></img>";
	maquinafoto.innerHTML="<img src='"+imagenes[maquina]+"'></img>";
	switch(maquina){
		case 0:
		resultado.innerHTML="Piedra aplasta lagarto";
		break;
		case 1:
		resultado.innerHTML="Lagarto devora papel";
		break;
		case 2:
		resultado.innerHTML="Tijera decapita lagarto";
		break;
		case 3:
		resultado.innerHTML="Empate";
		break;
		case 4:
		resultado.innerHTML="Lagarto envenena a spock";
		break;
		default:
	}
})
spock.addEventListener("click",function(event){

	let maquina=random(0,4);
	jugador.innerHTML="<img src='"+imagenes[4]+"'></img>";
	versus.innerHTML="<img src='"+imagenes[5]+"'></img>";
	maquinafoto.innerHTML="<img src='"+imagenes[maquina]+"'></img>";
	switch(maquina){
		case 0:
		resultado.innerHTML="Spock vaporiza piedra";
		break;
		case 1:
		resultado.innerHTML="Papel desautoriza spock";
		break;
		case 2:
		resultado.innerHTML="Spock rompe tijera";
		break;
		case 3:
		resultado.innerHTML="Lagarto envenena a spock";
		break;
		case 4:
		resultado.innerHTML="Empate";
		break;
		default:
	}
})