// Desarrolla una función que reciba un país por parámetro y devuelva su capital.

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
    for (let capital in capitals) {
        if (country.toLowerCase() === capital.toLowerCase()) {
            console.log("El país " + country + " tiene a " + capitals[capital] + " como capital.")
            return
        }
    }
    console.log("El país " + country + " no se encuentra en la lista de capitales")
};

getCapital("Poland");