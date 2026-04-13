const url = 'https://thronesapi.com/api/v2/Characters';

const select = document.getElementById("character-list");
const img = document.querySelector(".character-image");

fetch(url)
    .then((response) => response.json())
    .then(data => {
        data.forEach(element => {
            const option = document.createElement('option');
            option.textContent = element.fullName;
            option.value = element.imageUrl;

            select.appendChild(option);
        });

        img.src = data[0].imageUrl;
    })
    .catch(error => {
        console.log("Error al cargar", error)
    });

    select.addEventListener("change", (event) => {
        img.src = event.target.value;
    });