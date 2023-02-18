"use strict"

let openDB=indexedDB.open("usuarios",2);
let db;
let i=1;

openDB.onerror=function(){
	console.log(`Error de indexDB: ${requestDB.errorCode}`);
}

openDB.onsuccess=function(e){
	db=e.target.result;
	console.log("Desplegada");
	readAll();
}

openDB.onupgradeneeded=function(){
	db=openDB.result;
	if(!db.objectStoreNames.contains('user')){
		const pdto = db.createObjectStore("user",{keyPath: "id", autoIncrement: true});
	}
	console.log("user");
}

//AÑADE LOS DATOS 

function addItem(){
	let transaction=db.transaction("user","readwrite");
	let usuario= transaction.objectStore("user");
	let usr ={
		name: nom.value,
		place: loc.value,
		email: ema.value,
		phone: pho.value
	}
	let succ=usuario.add(usr);
	succ.onsuccess=()=>{
		console.log("Conseguido");
		cuerpo.innerHTML="";
		readAll();
	}
}

async function addItemApi(){
	const newUser = await APIData();
	nom.value = newUser.name.first + " " + newUser.name.last;
	loc.value = newUser.location.country;
	ema.value = newUser.email;
	pho.value = newUser.phone;
}
//LEE LOS DATOS 

function readAll(){
	const trans = db.transaction("user","readonly");
	let pdto = trans.objectStore("user");
	let request = pdto.openCursor();

	request.onsuccess = (e) => {
		let cursor = e.target.result;
		if(cursor){
			let nom = cursor.value.name;
			let pla = cursor.value.place;
			let ema = cursor.value.email;
			let pho = cursor.value.phone;
			let id = cursor.value.id;
			let div = "<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>"+nom+"</th><td class='px-6 py-4'>"+pla+"</td><td class='px-6 py-4'>"+ema+"</td><td class='px-6 py-4'>"+pho+"</td><td><button id='"+id+"' class='borrado'>Borrar<button id='"+id+"' class='update'>Actualizar</td></tr>";
			cuerpo.innerHTML += div;
			cursor.continue();
		}
	}
}

//BORRRA LOS DATOS 

function deleteItem(dIndex){
	const trans = db.transaction("user","readwrite");
	let usuario = trans.objectStore("user");
	let succ = usuario.delete(dIndex);
	succ.onsuccess = () =>{
		console.log("Elemento borrado");
		cuerpo.innerHTML="";
		readAll();
		i=1;
	}
}

//ACTUALIZA LOS DATOS 

function updateData(uIndex, nameChange, placeChange, emailChange,phoneChange){
	const trans = db.transaction("user","readwrite");
	let usuario = trans.objectStore("user");
	const request = usuario.get(uIndex);
	request.onsuccess = () => {
		let usr = request.result;
		usr.name = nameChange;
		usr.place = placeChange;
		usr.email = emailChange;
		usr.phone = phoneChange;

		const updateRequest = usuario.put(usr);
		updateRequest.onsuccess = () => {
			console.log("Actualizado los datos");
			cuerpo.innerHTML="";
			readAll();
		}
	}
}