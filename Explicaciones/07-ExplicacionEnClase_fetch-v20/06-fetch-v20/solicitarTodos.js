"use strict"

async function solicitarTodos() {
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb("https://jsonplaceholder.typicode.com/todos");
    let aleatorio = aleatorioExclusivo(0, 200);
    json = json[aleatorio];
    mostrarDatos(json, "todos");
}
