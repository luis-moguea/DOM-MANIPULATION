let elemento = document.createElement("h2");
let contenido = document.createTextNode("Esta es una manipulación del DOM");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.getElementById("manipulate-dom").appendChild(elemento);