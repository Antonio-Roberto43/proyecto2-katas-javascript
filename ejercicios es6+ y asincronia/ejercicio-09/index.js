const img = document.querySelector(".random-image");

const main_url = "https://pokeapi.co/api/v2/pokemon/";
const randomID = Math.floor(Math.random() * 151) + 1;

let url = main_url + randomID;

fetch(url)
    .then((response) => response.json())
    .then(data => {
        img.src = data.sprites.front_default;
    })
    .catch(error => {
        console.log("Error al cargar", error);
    });