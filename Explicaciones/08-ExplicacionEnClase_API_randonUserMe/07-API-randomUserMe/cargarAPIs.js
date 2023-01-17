"use strict"

// async function
async function cargarAPIWeb(url) {
    const response = await fetch(url);
    return response.json();
}

