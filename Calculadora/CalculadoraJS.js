"use strict"
let i=0;
let operando1=0;
let operando2=0;
let operacion="";
let almacenado=0;
let memoria=document.getElementById("memoria");
let borrar1=document.getElementById("borrar1");
let borrarPantalla=document.getElementById("borrarPantalla");
let borrarTodo=document.getElementById("borrarTodo");
let pantalla=document.getElementById("pantalla");
let suma=document.getElementById("suma");
let resta=document.getElementById("resta");
let multiplicar=document.getElementById("multiplicacion");
let dividir=document.getElementById("division");
let coma=document.getElementById("coma");
let porcentaje=document.getElementById("porcentaje");
let raizCuadrada=document.getElementById("raiz");
let inversa=document.getElementById("inversa");
let signo=document.getElementById("cambiaSigno");

//Botón (x/-) cambia el signo del valor en pantalla

signo.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	pantalla.innerHTML=operando1*-1;
	almacenado=pantalla.innerHTML;
})

//Botón (M) muestra el número almacenado en memoria (Ultimo pantalla)

memoria.addEventListener("click", () =>{
	if(almacenado==0){
		pantalla.innerHTML="";
	}else{
		pantalla.innerHTML=almacenado;
	}
	reducirDecimales();
})

//Botón (.) genera la coma para convertir nuestro operando en decimal

coma.addEventListener("click",() =>{
	let mirar=pantalla.innerHTML.split("");
	let repetido=false;
	for(i=0;i<mirar.length;i++){
		if(mirar[i]=="."){
			repetido=true;
		}
	}
	if(repetido==false){
		pantalla.innerHTML+=".";
	}
})

//Botón (<=) que borra una a uno los datos introducidos

borrar1.addEventListener("click",() =>{
	pantalla.innerHTML=pantalla.innerHTML.slice(0,pantalla.innerHTML.length-1);
})

//Este Botón (C) reinicia los operadores a 0 y limpia la pantalla

borrarPantalla.addEventListener("click",() =>{
	operando1=0;
	operando2=0;
	refrescar();
})

//Botón (CE) borra toda la pantalla, reinicia los operandos a 0 y borra la memoria

borrarTodo.addEventListener("click",() =>{
	operando1=0;
	operando2=0;
	refrescar();
	almacenado="";
})

//Los siguientes son los cuatro Botónes con las operaciones básicas

suma.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	operacion="+";
	refrescar();
})
resta.addEventListener("click",()=>{
	operando1=pantalla.innerHTML;
	operacion="-";
	refrescar();
})
multiplicar.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	operacion="*";
	refrescar();
})
division.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	operacion="/";
	refrescar();
})

//El Botón igual (=) que realiza la operación con los dos operandos ofrecidos.

igual.addEventListener("click",() =>{
	operando1=parseFloat(operando1);
	operando2=parseFloat(pantalla.innerHTML);
	resuelve();
})
//Funcion que resuelve las operaciones según el valor dado
function resuelve(){
	let comprueba=pantalla.innerHTML.split("");
	let porciento=false;
	let valorPorciento=((operando1*operando2)/100);	
	for(i=0;i<comprueba.length;i++){
		if(comprueba[i]=="%"){
			porciento=true;
		}
	}
	switch(operacion){
	case "+":	
		if(porciento==true){
			pantalla.innerHTML=operando1+valorPorciento;
		}else{
			pantalla.innerHTML=operando1+operando2;
		}
		break;
	case "-":
		if(porciento==true){
			pantalla.innerHTML=operando1-valorPorciento;
		}else{
			pantalla.innerHTML=operando1-operando2;
		}
		break;
	case "*":
		if(porciento==true){
			pantalla.innerHTML=valorPorciento;
		}else{
			pantalla.innerHTML=operando1*operando2;
		}
		break;
	case "/":
		pantalla.innerHTML=operando1/operando2;
		break;
	case "^":
		pantalla.innerHTML=Math.pow(operando1,operando2);
		break;
	case "%":
		pantalla.innerHTML=operando1%operando2;
		break;
	default:
	}
	almacenado=pantalla.innerHTML;
	reducirDecimales();
}

//Botón (%) coloca el simbolo de porcentaje y lo pasa a la operacion

porcentaje.addEventListener("click",() =>{
	let mirar=pantalla.innerHTML.split("");
	let repetido=false;
	/*Esto comprueba si el caracter "%" se repite y tambien sirve para que el primer valor 
	no pueda usar el caracter*/
	if(operando1==0){
		repetido=true;
	}
	for(i=0;i<mirar.length;i++){
		if(mirar[i]=="%"){
			repetido=true;
		}
	}
	if(repetido==false){
		pantalla.innerHTML+="%";
	}
})

//Botón (√) calcula la raiz cuadrada de un operando

raizCuadrada.addEventListener("click", () =>{
	operando1=pantalla.innerHTML;
	pantalla.innerHTML=Math.sqrt(operando1);
	almacenado=pantalla.innerHTML;
	reducirDecimales();
})

//Botón (1/x) realiza la inversa del número dado (La inversa es el número partido por 1)

inversa.addEventListener("click",() =>{
	operando1=pantalla.innerHTML;
	pantalla.innerHTML=(1/operando1);
	almacenado=pantalla.innerHTML;
	reducirDecimales();
})

//Esta función quita el operando de la pantalla 

function refrescar(){
	pantalla.value=operando1;
	pantalla.innerHTML="";
}

//Reduce la cantidad de decimales para simplificar el resultado.

function reducirDecimales(){
	let comprobante=pantalla.innerHTML.split("");
	for(i=0;i<comprobante.length;i++){
		if(comprobante[i]=="."){
			pantalla.innerHTML=Number(pantalla.innerHTML).toFixed(3);
		}
	}
}
let select=document.getElementById("Tipo");
let botonesC=document.getElementsByClassName("btt-cientifica");
let botones=document.getElementsByTagName("button");

//Cambia el tamaño de los botones y los oculta y muestra dependiendo de cual calculadora uses

select.addEventListener("change",()=>{
	for(i=0;i<botonesC.length;i++){
		if(select.value=="1"){
			botonesC[i].style.display="none";
			
		}
		if(select.value=="2"){
			botonesC[i].style.display="inline";
		}
	}
	for(i=0;i<botones.length;i++){
		if(select.value=="1"){
			botones[i].style.width="21%";
			botones[i].style.height="10.5%"
		}else{
			botones[i].style.width="12.9%";
			botones[i].style.height="10.5%";
		}
	}
});