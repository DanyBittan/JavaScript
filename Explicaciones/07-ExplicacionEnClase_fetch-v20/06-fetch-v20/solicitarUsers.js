"use strict"

async function solicitarUsers() {
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb("https://jsonplaceholder.typicode.com/users");
    let aleatorio = aleatorioExclusivo(0, 10);
    json = json[aleatorio];
    mostrarDatos(json, "users");
}
