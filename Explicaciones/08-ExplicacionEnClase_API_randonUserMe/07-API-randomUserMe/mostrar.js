"use strict"

async function unUsuario() {
    document.getElementById("resTexto").innerHTML = ""; //LIMPIAR EL AREA DE 'resultado'
    let json = await cargarAPIWeb("https://randomuser.me/api");
    document.getElementById("resTexto").innerHTML += `Nombre: ${json.results[0]["name"]["first"]}, Apellido: ${json.results[0]["name"]["last"]} <br />`;
    document.getElementById("resTexto").innerHTML += `<img src="${json.results[0]["picture"]["medium"]}" alt="${json.results[0]["email"]}" /> <br />`;
}

async function nUsuarios() {
    document.getElementById("resTexto").innerHTML = ""; //LIMPIAR EL AREA DE 'resultado'
    let numUsuarios = document.getElementById("numUsuarios").value;
    let json = await cargarAPIWeb(`https://randomuser.me/api/?results=${parseInt(numUsuarios)}`);
    for (let usuario of json.results) {
        document.getElementById("resTexto").innerHTML += `Nombre: ${usuario["name"]["first"]}, Apellido: ${usuario["name"]["last"]} <br />`;
        document.getElementById("resTexto").innerHTML += `<img src="${usuario["picture"]["medium"]}" alt="${usuario["email"]}" /> <br />`;
    }
}