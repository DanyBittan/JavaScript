"use strict"

async function cargarAPIWeb(url) {
    const response = await fetch(url);
    return await response.json();
}