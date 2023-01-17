"use strict"

async function solicitarAlbums() {
    let aleatorio = aleatorioExclusivo(0, 100);
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb(`https://jsonplaceholder.typicode.com/albums/${aleatorio}`);
    mostrarDatos(json, "albums");
}
