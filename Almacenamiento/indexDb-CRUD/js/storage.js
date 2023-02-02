"use strict"

let openDB=indexedDB.open("productos",1);

openDB.onerror=(e)=>{
	console.log('Error de indexDB: ${requestDB.errorCode}');
}

openDB.onsuccess=(e)=>{
	let db=e.target.result;
}