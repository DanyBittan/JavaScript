"use strict"

function mostrarDatos(json, queMuestro) {
    switch (queMuestro) {
        case "posts":
            document.getElementById("resTexto").innerHTML = `Identificador del usuario: ${json.userId} <br />
                                                            Identificador: ${json.id} <br />
                                                            Título: ${json.title} <br />
                                                            Cuerpo: ${json.body}`;
            break;
        case "albums":
            document.getElementById("resTexto").innerHTML = `Identificador del usuario: ${json.userId} <br />
                                                            Identificador: ${json.id} <br />
                                                            Título: ${json.title}`;
            break;
        case "photos":
            document.getElementById("resTexto").innerHTML = `Identificador del album: ${json.albumId} <br />
                                                    Identificador: ${json.id} <br />
                                                    Imágen: <br /> <img src="${json.url}" alt="${json.title}" /> <br />
                                                    Miniatura: <br /> <img src="${json.thumbnailUrl}" alt="${json.title}" /> <br />`;
            break;
        case "comments":
            document.getElementById("resTexto").innerHTML = `Identificador del post: ${json.postId} <br />
                                                            Identificador: ${json.id} <br />
                                                            Nombre: ${json.name} <br />
                                                            email: ${json.email} <br />
                                                            Cuerpo: ${json.body}`;
            break;
        case "todos":
            document.getElementById("resTexto").innerHTML = `Identificador del usuario: ${json.userId} <br /> 
                                                            Identificador: ${json.id} <br />
                                                            Título: ${json.title} <br />
                                                            Completado: ${json.completed}`;
            break;
        case "users":
            document.getElementById("resTexto").innerHTML = `Identificador: ${json.id} <br />
                                                            Nombre del usuario: ${json.username} <br />
                                                            email: ${json.email} <br />
                                                            Telefono: ${json.phone} <br />
                                                            web: ${json.website}`;
        default:
        // code block
    }
}
