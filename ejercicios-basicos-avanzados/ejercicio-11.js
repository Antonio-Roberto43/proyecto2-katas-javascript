// Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
     let suma = 0;

    for (let i = 0; i < list.length; i++) {
        let elemento = list[i];

        if (typeof elemento === "number") {
            suma += elemento;
        } else if (typeof elemento === "string") {
            suma += elemento.length;
        }
    };

    const promedio = suma / list.length;
    return promedio;
};

console.log(averageWord(mixedElements));