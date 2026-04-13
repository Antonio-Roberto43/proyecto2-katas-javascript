// 1. Luke Skywalker cumple años:
const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi["edad"] = 25;

console.log(jedi);

// 2. Presentación al estilo Leia Organa:

let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// 3. Calculando el coste total de sables de luz:

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let total_sables = sable1.precio + sable2.precio;

console.log("El precio total es: ", total_sables)

// 4. Actualizando el precio final de las naves:

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

//Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.
precioBaseGlobal = 25000;

// Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).

nave1["precioFinal"] = precioBaseGlobal + nave1.precioBase;
nave2["precioFinal"] = precioBaseGlobal + nave2.precioBase;

console.log(`Precio final de la nave 1: ${nave1.precioFinal} y de la nave 2: ${nave2.precioFinal}`);