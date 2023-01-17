"use strict"

async function solicitarComments() {
    let aleatorio = aleatorioExclusivo(0, 500);
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb(`https://jsonplaceholder.typicode.com/comments/${aleatorio}`);
    mostrarDatos(json, "comments");
}
