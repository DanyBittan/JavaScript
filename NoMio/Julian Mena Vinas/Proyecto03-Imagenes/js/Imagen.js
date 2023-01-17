
class Imagen {
  constructor(url, description, width = 100, height = 100){
    this.url = url;
    this.description = description;
    this.width = width+"px";
    this.height = height+"px";
  }

  changeSize(size){
    this.width = size+"px";
    this.height = size+"px";
  }

  getImageElement(){
    const img = document.createElement("div");
    img.style.background = "url("+ this.url + ")";
    img.style.backgroundSize = "cover";
    img.style.backgroundPosition = "center";
    img.style.width = this.width;
    img.style.height = this.height;
    img.style.flex = "none";

    if(this.border){
      img.style.border = "1px solid red";
    }

    return img
  }

  displayImg (direction) {
    this.changeSize(450);

    //Default
    let flexDir = "";
    let styleDir = "";

    switch(direction){
      case "top":
        flexDir = "column-reverse";
        styleDir = "height";
        break;
      case "right":
        flexDir = "row";
        styleDir = "width";
        break;
      case "left":
        flexDir = "row-reverse";
        styleDir = "width";
        break;
      case "bottom":
        flexDir = "column";
        styleDir = "height";
        break;
    }

    actualImage.style["flex-direction"] = flexDir
 
    //Añadimos a la cola la nueva imagen.
    actualImage.appendChild(this.getImageElement());
    
    //Reducimos a 0 el ancho del último elemento. (Penultimo elemento actualmente)
    let lastItem = document.querySelector('#actualImage div:nth-last-child(2)');

    //Reducción lateral/vertical
    lastItem.style[styleDir] = "0px";

    //Nueva descripción
    const parag = document.createElement("p");
    parag.innerText = this.description;
    paragraphContainer.innerHTML = "";
    paragraphContainer.appendChild(parag);
  }
}