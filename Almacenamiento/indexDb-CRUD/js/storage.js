"use strict"

let openDB=indexedDB.open("productos",1);
let db;

openDB.onerror=function(e){
	console.log('Error de indexDB: ${requestDB.errorCode}');
}

openDB.onupgradeneeded=function(){
	let db=openDB.result;
	if(!db.objectStoreNames.contains('producto')){
		db.createObjectStore("producto",{keypath: "id", autoIncrement: true});
	}
	console.log("creada");
}

openDB.onsuccess=function(e){
	db=e.target.result;
	console.log("Desplegada");
}

function addItem(){
	let transaction=db.transaction("producto","readwrite");
	let prod= transaction.objectStore("producto");
	let pr ={
		product: "Si",
		marca:"Ford",
		precio:20.29,
		estado:"Bien"
	}
	let requestAdd=prod.add(pr);
	console.log(transaction);

}