"use strict"

async function solicitarPhotos() {
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb("https://jsonplaceholder.typicode.com/photos");
    let aleatorio = aleatorioExclusivo(0, 5000);
    json = json[aleatorio];
    mostrarDatos(json, "photos");
}
