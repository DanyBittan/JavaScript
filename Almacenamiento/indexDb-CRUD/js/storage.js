"use strict"

let openDB=indexedDB.open("productos",2);
let db;

openDB.onerror=function(){
	console.log('Error de indexDB: ${requestDB.errorCode}');
}

openDB.onsuccess=function(e){
	db=e.target.result;
	console.log("Desplegada");
	readAll();
}

openDB.onupgradeneeded=function(){
	db=openDB.result;
	if(!db.objectStoreNames.contains('producto')){
		const pdto = db.createObjectStore("producto",{keypath: "id", autoIncrement: true});
	}
	console.log("pdto");
}

function addItem(){
	let transaction=db.transaction("producto","readwrite");
	let pdto= transaction.objectStore("producto");
	let pr ={
		product: prod.value,
		marca: brand.value,
		precio: pre.value,
		estado:state.value
	}
	pdto.add(pr);
	pdto.onsuccess=(e)=>{
		console.log("Conseguido");
	}
}

function readAll(){
	const trans=db.transaction("producto","readonly");
	let pdto= trans.objectStore("producto");
	let mostrar=pdto.get(1);
	console.log(mostrar);
}