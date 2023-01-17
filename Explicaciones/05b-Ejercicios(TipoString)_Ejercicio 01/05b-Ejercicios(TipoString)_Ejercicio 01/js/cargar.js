"use strict"

// async function
async function cargar(url) {
    const response = await fetch(url);
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    return response.json();
}