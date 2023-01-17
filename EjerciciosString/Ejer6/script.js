let charAl=document.getElementById("genCharRandom");
let caracter=document.getElementById("char");
let caracter2=document.getElementById("char2");
charAl.addEventListener("click",function(event){
	var numAl= Math.floor(Math.random()*(207-33)+33);
	caracter.innerHTML+=String.fromCodePoint(numAl)+" ";
	caracter2.innerHTML=numAl;
})