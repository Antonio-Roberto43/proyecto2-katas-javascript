// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div = document.createElement("div");
const p = document.createElement("p");

div.appendChild(p);
document.body.appendChild(div);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div2 = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const p2 = document.createElement("p");
    div2.appendChild(p2);
}

document.body.appendChild(div2);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pSoyDinamico = document.createElement("p");
pSoyDinamico.textContent = "Soy dinámico!";
document.body.appendChild(pSoyDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
};

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodos = document.querySelectorAll(".fn-remove-me");

for (const nodo of nodos) {
    nodo.remove();
};

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll("div");
const pEntreDivs = document.createElement("p");

pEntreDivs.textContent = "Voy en medio!";

divs[1].insertAdjacentElement("beforebegin", pEntreDivs);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divs2 = document.querySelectorAll(".fn-insert-here");

for (const div of divs2) {
    const pDentro = document.createElement("p");
    pDentro.textContent = "Voy dentro!";
    div.appendChild(pDentro);
}