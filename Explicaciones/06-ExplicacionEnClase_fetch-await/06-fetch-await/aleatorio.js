"use strict"

function aleatorioExclusivo(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min; // INCLUYE EL RANGO SUPERIOR
}

function aleatorioInclusivo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; // INCLUYE EL RANGO SUPERIOR
}
