"use strict"
let imagenMostrada=document.getElementById("imagenMostrada");
const url = `https://api.thecatapi.com/v1/images/search?limit=10`;

 fetch(url)
 .then((response) => {
   return response.json();
 })
.then((data) => {

	//Respuesta de la API

  let imagesData = data;
  imagesData.map(function(imageData) {
  	let image="";

  	//Crea la imágen en el html
  	
    imagesData.slice(0,8).forEach(gato =>{
    	image += `<img src="${gato.url}" class="imagenesGrid w-44 h-36 m-auto rounded-lg opacity-70 hover:opacity-100 border-solid border-gray-900 border-2" onclick='ampliarImagen(this)'>`;     
    })
    document.getElementById('grid').innerHTML=image;
    });
})
.catch(function(error) {
   console.log(error);
});


//Esta función amplia la imágen pequeña al hacer click

function ampliarImagen(enlace){
	imagenMostrada.src = enlace.src;
	imagenMostrada.classList.remove("hidden");
}

// const ampliarImagen=(n)=>{
// 	const imagenCopiada=n.target.innerText;
// 	imagenMostrada.src=imagenCopiada;
// }
// imagenes.onclick=ampliarImagen;
