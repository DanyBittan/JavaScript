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
	let succ=pdto.add(pr);
	succ.onsuccess=(e)=>{
		console.log("Conseguido");
	}
}

function readAll(){
	const trans=db.transaction("producto","readonly");
	let pdto= trans.objectStore("producto");
	let request=pdto.openCursor();

	request.onsuccess = (e) => {
		let cursor = e.target.result;
		console.log(cursor);
		if(cursor){
			let pro = cursor.value.product;
			let bra = cursor.value.marca;
			let pri = cursor.value.precio;
			let sta = cursor.value.estado;
			let div="<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>"+pro+"</th><td class='px-6 py-4'>"+bra+"</td><td class='px-6 py-4'>"+pri+"</td><td class='px-6 py-4'>"+sta+"</td><td><button id='borrar' class='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Borrar</td></tr>";
			cuerpo.innerHTML+=div;
			cursor.continue();
		}
	}
}