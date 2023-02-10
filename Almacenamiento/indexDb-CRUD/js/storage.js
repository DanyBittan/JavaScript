"use strict"

let openDB=indexedDB.open("productos",2);
let db;
let i=1;

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
		const pdto = db.createObjectStore("producto",{keyPath: "id", autoIncrement: true});
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
		location.reload();
	}
}

function readAll(){
	const trans = db.transaction("producto","readonly");
	let pdto = trans.objectStore("producto");
	let request = pdto.openCursor();

	request.onsuccess = (e) => {
		let cursor = e.target.result;
		if(cursor){
			let pro = cursor.value.product;
			let bra = cursor.value.marca;
			let pri = cursor.value.precio;
			let sta = cursor.value.estado;
			let id = cursor.value.id;
			console.log(id);
			let div = "<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>"+pro+"</th><td class='px-6 py-4'>"+bra+"</td><td class='px-6 py-4'>"+pri+"</td><td class='px-6 py-4'>"+sta+"</td><td><button id='"+id+"' class='borrado'>Borrar<button id='"+id+"' class='update'>Actualizar</td></tr>";
			cuerpo.innerHTML += div;
			cursor.continue();
		}
	}
}

function deleteItem(dIndex){
	const trans = db.transaction("producto","readwrite");
	let pdto = trans.objectStore("producto");
	let succ = pdto.delete(dIndex);
	succ.onsuccess = () =>{
		console.log("Elemento borrado");
		cuerpo.innerHTML="";
		readAll();
		i=1;
	}
}

function updateData(){
	
}