"use strict"

async function solicitarPosts() {
    let aleatorio = aleatorioExclusivo(0, 100);
    document.getElementById("resTexto").innerHTML = ""; //LIMPIAR EL AREA DE 'resultado'
    let json = await cargarAPIWeb(`https://jsonplaceholder.typicode.com/posts/${aleatorio}`);
    mostrarDatos(json, "posts");
}
