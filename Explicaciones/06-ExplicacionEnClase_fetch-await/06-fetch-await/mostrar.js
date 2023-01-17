"use strict"

async function mostrarPosts() {
    let aleatorio = aleatorioExclusivo(0, 100);
    document.getElementById("resTexto").innerHTML = ""; //LIMPIAR EL AREA DE 'resultado'
    let json = await cargarAPIWeb(`https://jsonplaceholder.typicode.com/posts/${aleatorio}`);
    document.getElementById("resTexto").innerHTML = `Identificador del usuario: ${json.userId} <br />
                                                    Identificador: ${json.id} <br />
                                                    Título: ${json.title} <br />
                                                    Cuerpo: ${json.body}`;
}

async function mostrarComments() {
    let aleatorio = aleatorioExclusivo(0, 500);
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb(`https://jsonplaceholder.typicode.com/comments/${aleatorio}`);
    document.getElementById("resTexto").innerHTML = `Identificador del post: ${json.postId} <br />
                                                    Identificador: ${json.id} <br />
                                                    Nombre: ${json.name} <br />
                                                    email: ${json.email} <br />
                                                    Cuerpo: ${json.body}`;
}

async function mostrarAlbums() {
    let aleatorio = aleatorioExclusivo(0, 100);
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb(`https://jsonplaceholder.typicode.com/albums/${aleatorio}`);

    document.getElementById("resTexto").innerHTML = `Identificador del usuario: ${json.userId} <br />
                                                    Identificador: ${json.id} <br />
                                                    Título: ${json.title}`;
}

async function mostrarPhotos() {
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb("https://jsonplaceholder.typicode.com/photos");
    let aleatorio = aleatorioExclusivo(0, 5000);
    json = json[aleatorio];
    document.getElementById("resTexto").innerHTML = `Identificador del album: ${json.albumId} <br />
                                                    Identificador: ${json.id} <br />
                                                    Imágen: <br /> <img src="${json.url}" alt="${json.title}" /> <br />
                                                    Miniatura: <br /> <img src="${json.thumbnailUrl}" alt="${json.title}" /> <br />`;
}

async function mostrarTodos() {
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb("https://jsonplaceholder.typicode.com/todos");
    let aleatorio = aleatorioExclusivo(0, 200);
    json = json[aleatorio];
    document.getElementById("resTexto").innerHTML = `Identificador del usuario: ${json.userId} <br /> 
                                                    Identificador: ${json.id} <br />
                                                    Título: ${json.title} <br />
                                                    Completado: ${json.completed}`;
}

async function mostrarUsers() {
    document.getElementById("resTexto").innerHTML = "";
    let json = await cargarAPIWeb("https://jsonplaceholder.typicode.com/users");

    let aleatorio = aleatorioExclusivo(0, 10);
    json = json[aleatorio];
    document.getElementById("resTexto").innerHTML = `Identificador: ${json.id} <br />
                                                    Nombre del usuario: ${json.username} <br />
                                                    email: ${json.email} <br />
                                                    Telefono: ${json.phone} <br />
                                                    web: ${json.website}`;
}
