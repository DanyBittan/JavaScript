"use strict"
let logaritmo=document.getElementById("logaritmo");
let logaritmoNeperiano=document.getElementById("ln");
let random=document.getElementById("Rnd");
let potenciaDos=document.getElementById("potenciaBaseDos");
let potencia=document.getElementById("Potencia");
let e=document.getElementById("valorE");
let pi=document.getElementById("pi");
let coseno=document.getElementById("coseno");
let seno=document.getElementById("seno");
let tangente=document.getElementById("tangente");
let factorial=document.getElementById("factorial");
let modulo=document.getElementById("Modulo");

//Realiza el logaritmo en base 10 de un número

logaritmo.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	pantalla.innerHTML=Math.log10(operando1);
	almacenado=pantalla.innerHTML;
	reducirDecimales();
})

//Realiza el logaritmo neperiano de un número

logaritmoNeperiano.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	pantalla.innerHTML=Math.log(operando1);
	almacenado=pantalla.innerHTML;
	reducirDecimales();
})

//(Rnd) Genera un número aleatorio

random.addEventListener("click",() =>{
	pantalla.innerHTML=Math.random()*100000;
	reducirDecimales();
	almacenado=pantalla.innerHTML;
})

//(2^x) Botón que realiza la potencia de un número dado en base 2 

potenciaDos.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	let base=2;
	pantalla.innerHTML=Math.pow(2,operando1);
	almacenado=pantalla.innerHTML;
	reducirDecimales();
})

//(a^b)Botón que realiza la potencia de un número dado en base a otro número recibido

potencia.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	operacion="^";
	refrescar();
})

//Presenta el valor "e" en pantalla

e.addEventListener("click",() =>{
	pantalla.innerHTML=Math.E;
	if(operando1==0){
		operando1=Math.E;
	}
	reducirDecimales();
})
//Presenta el valor "pi" en pantalla

pi.addEventListener("click",() =>{
	pantalla.innerHTML=Math.PI;
	if(operando1==0){
		operando1=Math.PI;
	}
	reducirDecimales();
})
//Realiza el coseno de un número dado

coseno.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	pantalla.innerHTML=Math.cos(operando1);
	almacenado=pantalla.innerHTML;
	reducirDecimales();
})
//Realiza el seno de un número dado

seno.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	pantalla.innerHTML=Math.sin(operando1);
	almacenado=pantalla.innerHTML;
	reducirDecimales();
})

//Realiza la tangente de un número dado

tangente.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	pantalla.innerHTML=Math.tan(operando1);
	almacenado=pantalla.innerHTML;
	reducirDecimales();
})

//Calcula el factorial 

factorial.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	let aux=pantalla.innerHTML;
	let total=1;
	if(operando1<0){
		operando1=operando1*-1;
	}
	for(i=1;i<=operando1;i++){
		total=total*i;
	}
	if(aux<0){
		pantalla.innerHTML=total*-1;
	}else{
		pantalla.innerHTML=total;
	}
	almacenado=pantalla.innerHTML;
})

//Devuelve el módulo de un número

modulo.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	operacion="%";
	refrescar();
})