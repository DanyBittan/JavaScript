"use strict"

// Sintaxis
let matriz = new Array();
let vector = []; // definición más usada

console.log("----------Array, Matriz, Vector de Frutas----------");
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

console.log("==================================================");

console.log("----------Modificamos un elemento----------");
fruits[2] = 'Pear'; // ahora ["Apple", "Orange", "Pear"]
console.log(fruits); // ¡RECUERDA! 'Esto no se podía hacer con los 'Strings'

console.log("----------Añadimos un elemento (al final)----------");
fruits[3] = 'Lemon'; // ahora ["Apple", "Orange", "Pear", "Lemon"]
console.log(fruits);

console.log("----------Longitud del Array, Matriz, Vector----------");
console.log(fruits.length); // 4

console.log("==================================================");

console.log("----------Estructuras complejas----------");
let complejo = ['Apple', { name: 'John' }, true, function () { console.log(`Hello ${complejo[1].name}`); }];
console.log(`El nombre es: ${complejo[1].name}`); // John
complejo[3]();
// ¿Y si queremos usar el resultado de una función? ¡RECUERDA! 'Usa 'return' para devolver un valor
complejo = ['Apple', { name: 'John' }, true, function () { return (`Hello ${complejo[1].name}`); }];
console.log(`La función retorna: ${complejo[3]()}`); // Hello John

console.log("----------UNA FACTURA----------");
let factura = [{ "articulo": 'Apples', "precio": 7, "cantidad": 5, "dto": 2, "Subtotal": function () { return (this.precio * this.cantidad) - (((this.precio * this.cantidad) * this.dto) / 100) } },
{ 'articulo': "Oranges", "precio": 10, "cantidad": 7, "dto": 4, "Subtotal": function () { return (this.precio * this.cantidad) - (((this.precio * this.cantidad) * this.dto) / 100) } },
{ "articulo": 'Pears', "precio": 5, "cantidad": 10, "dto": 3, "Subtotal": function () { return (this.precio * this.cantidad) - (((this.precio * this.cantidad) * this.dto) / 100) } }];
let total = 0;
for (let linea in factura) {
    console.log(`El precio total de las ${factura[linea].articulo} es: ${factura[linea].Subtotal()}`);
    total = total + factura[linea].Subtotal();
}
console.log(total);

console.log("==================================================");

console.log("----------método: .at()----------");
fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[fruits.length - 1]); // Plum
// es lo mismo que fruits[fruits.length-1]
console.log(fruits.at(-1)); // Plum

console.log("==================================================");

fruits = ["Apple", "Orange", "Pear"];
console.log(`Dado el siguiente vector: ${fruits}`); // Apple, Orange, Pear

console.log("----------método: .pop()-----------");
console.log(`Extraigo el último elemento: ${fruits.pop()}`); // quita "Pear" y lo muestra
console.log(fruits); // Apple, Orange

console.log("----------método: .push()-----------");
console.log("Agrego 'Pear' al final");
fruits.push("Pear");
console.log(fruits); // Apple, Orange, Pear

console.log("----------método: .shift()-----------");
console.log(`Extraigo el primer elemento: ${fruits.shift()}`); // quita "Apple" y lo muestra
console.log(fruits); // Orange, Pear

console.log("----------método: .unshift()-----------");
console.log("Agrego 'Apple' al principio");
fruits.unshift("Apple");
console.log(fruits); // Apple, Orange, Pear

console.log("------Añadiendo multiples elementos-------");
fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(fruits);

console.log("==================================================");

console.log("------Copiando un Array-------");
console.log(`Las frutas originales que tengo son: ${fruits}`);
let newFruits = fruits;
console.log(`Las nuevas frutas que tengo son: ${newFruits}`);
console.log(`Extraigo la primera nueva fruta "${newFruits.shift()}" y me quedan "${newFruits}"`);
console.log(`¿Conservo las frutas originales "${fruits}"?: ${(fruits === newFruits) ? "NO" : "YES"}`);

console.log("==================================================");

console.log("------Solucion: Copiando un Array-------");
console.log(`Las frutas originales que tengo son: ${fruits}`);
/*
newFruits = new Array();
for (let fruit of fruits) {
    //console.log(fruit);
    newFruits.push(fruit);
}
*/
newFruits = new Array();
for (let fruit in fruits) {
    //console.log(fruit);
    newFruits.push(fruits[fruit]);
}
console.log(`Las nuevas frutas que tengo son: ${newFruits}`);
console.log(`Vuelvo a extraer la primera nueva fruta "${newFruits.shift()}" y me quedan "${newFruits}"`);
console.log(`¿Conservo las frutas originales "${fruits}"?: ${(fruits === newFruits) ? "NO" : "YES"}`);

console.log("==================================================");

console.log("------propiedad: .length-------");
let frutas = [];
frutas[123] = "Apple";
console.log(`El número de frutas son: ${frutas.length}`); // 124

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncamos a 2 elementos
console.log(`El array truncado es: ${arr}`); // [1, 2]
arr.length = 5; // reponemos la longitud length
console.log(`Como ves, el proceso es irreversible: ${arr[3]}`); // undefined: el valor no se recupera
