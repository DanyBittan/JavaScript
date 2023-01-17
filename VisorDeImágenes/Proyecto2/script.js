"use strict"
let imagenMostrada=document.getElementById("imagenMostrada");
//API Key ----->  live_lLou8WVWT39WSbqChxzMFXBvcic9sqhMiN7LNuTkWx6sFp4hmSRGGHggAYkuO9ah
//Aquí se mete la url que nos accede a la API
const url = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_lLou8WVWT39WSbqChxzMFXBvcic9sqhMiN7LNuTkWx6sFp4hmSRGGHggAYkuO9ah`;
const izq = document.getElementById("pasarIzq");
const der = document.getElementById("pasarDer");
let i=0;
fetch(url)
.then((response) => {
 return response.json();
})
.then((data) => {
  //Respuesta de la API
  let imagesData = data.slice(0,7);
  imagesData.map(function(imageData) {

    //Crea en el html tags de img con url sacadas de la API.

    let image="";
    image += `<img src="${imageData.url}" class="imagenesGrid w-44 h-36 m-auto rounded-lg opacity-70 hover:opacity-100 border-solid border-gray-900 border-2">`;     
    document.getElementById('grid').innerHTML+=image;
  });

  //Obtiene un array de la clase imagenesGrid donde solo saco el src.

  let imagenes=document.getElementsByClassName("imagenesGrid");
  imagenMostrada.src=imagenes[i].src;

  //Estas funciones al dar sobre los botones indican al array si tiene que cambiar de foto.

  izq.addEventListener("click",function(event){
    if(i<=0){
      i=imagenes.length-1;
    }else{
      i--;
    }
    imagenMostrada.src=imagenes[i].src;
  });
  der.addEventListener("click",function(event){
    if(i>=imagenes.length-1){
      i=0;
    }else{
      i++;
    }
    imagenMostrada.src=imagenes[i].src;
  });
})
.catch(function(error) {
 console.log(error);
});
