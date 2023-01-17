let equipos=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let generador=document.getElementById("genQuiniela");
let quiniela=document.getElementById("quiniela");

function random(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
generador.addEventListener("click",function(event){
	quiniela.innerHTML=" ";
	for(let i=1;i<=8;i++){
		let equipo1=equipos[random(0,12)];
		let equipo2=equipos[random(13,25)];
		let seleccion=random(0,9);
		if(seleccion<5){
			quiniela.innerHTML+="<tr><td id='indice'>"+i+"</td><td>"+equipo1+" vs "+ equipo2 +"</td><td><b>1</b></td><td>X</td><td>2</td></tr>";
		}
		if ((seleccion<8)&&(seleccion>4)) {
			quiniela.innerHTML+="<tr><td id='indice'>"+i+"</td><td>"+equipo1+" vs "+ equipo2 +"</td><td>1</td><td><b>X</b></td><td>2</td></tr>";
		}
		if(seleccion>7){
			quiniela.innerHTML+="<tr><td id='indice'>"+i+"</td><td>"+equipo1+" vs "+ equipo2 +"</td><td>1</td><td>X</td><td><b>2</b></td></tr>";
		}
		/*switch(seleccion){
			case 0:
			quiniela.innerHTML+="<tr><td id='indice'>"+i+"</td><td>"+equipo1+" vs "+ equipo2 +"</td><td><b>1</b></td><td>X</td><td>2</td></tr>";
			break;
			case 1:
			quiniela.innerHTML+="<tr><td id='indice'>"+i+"</td><td>"+equipo1+" vs "+ equipo2 +"</td><td>1</td><td><b>X</b></td><td>2</td></tr>";
			break;
			case 2:
			quiniela.innerHTML+="<tr><td id='indice'>"+i+"</td><td>"+equipo1+" vs "+ equipo2 +"</td><td>1</td><td>X</td><td><b>2</b></td></tr>";
			break;
			default:
			quiniela.innerHTML+="<tr><td id='indice'>"+i+"</td><td>"+equipo1+" vs "+ equipo2 +"</td><td><b>1</b></td><td>X</td><td>2</td></tr>";

		}*/
	}
})