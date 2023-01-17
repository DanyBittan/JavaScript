let position = 0

async function pintarImagen() {
  const [url, description] = await getImage();

  const imagen = new Imagen(url, description);

  lista.addImage(imagen);
  position = lista.length() - 1;
  lista.update(position);
}

function backImg() {
  position == 0 
  ? position = lista.length() - 1
  : position -- ;

  lista.update(position);
}

function forwardImg() {
  position >= lista.length() - 1
  ? position = 0
  : position++ ;
  
  lista.update(position);
}

function selectImage (e){
  position = parseInt(e.target.getAttribute("value"));
  lista.update(position);
}

function resetDisplay (){
  actualImage.innerHTML = "";
  lista.update(position);
}


//Button assignments.
document.querySelectorAll('input[type=radio]').forEach(e => e.onclick = resetDisplay)
searchBtn.onclick = pintarImagen;
backBtn.onclick = backImg;
forwardBtn.onclick = forwardImg;