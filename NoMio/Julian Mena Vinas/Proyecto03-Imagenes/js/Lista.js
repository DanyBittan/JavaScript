
class Lista {
  constructor() {
    this.images = [];
  }

  length() {
    return this.images.length;
  }

  addImage(image) {
    this.images.push(image);
  }

  update(position) {
    imageGalery.innerHTML = "";
    this.images.forEach((img, i) => {
      let element = img.getImageElement();
      element.classList.add("imagenSeleccionable")
      element.setAttribute("value", i);
      element.onclick = selectImage;
      if(position === i){
        element.style.border = "5px solid red"
      }
      imageGalery.appendChild(element);
    });

    let imgToDisplay = this.images[position]
    let copy = Object.assign(Object.create(Object.getPrototypeOf(imgToDisplay)), imgToDisplay)

    //Check direction from radio inputs.
    const checks = document.querySelectorAll('input[type=radio]')
    const direction = Array.from(checks).filter(input => input.checked)[0].value

    copy.displayImg(direction);
  }
}

let lista = new Lista();
