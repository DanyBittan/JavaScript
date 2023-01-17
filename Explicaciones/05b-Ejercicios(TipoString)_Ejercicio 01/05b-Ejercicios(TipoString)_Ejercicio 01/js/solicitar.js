"use strict"

async function solicitar() {
    texto.innerHTML = "";
    let json = await cargar('https://api.chucknorris.io/jokes/random');
    mostrar(json);
}