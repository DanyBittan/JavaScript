
"use strict"
function cargarTexto() {

	texto.innerHTML=" ";
fetch('http://www.omdbapi.com/?t='+nombre.value+'&apikey=22deca22') // URL de la REST API
.then(response => response.json())
.then(json =>{
	texto.innerHTML=`${json.Plot}`; })
}
//&apikey=22deca22