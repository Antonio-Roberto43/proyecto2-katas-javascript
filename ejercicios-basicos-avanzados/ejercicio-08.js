/* Buscar la palabra más larga: Completa la función que 
tomando un array de strings como argumento devuelva el más 
largo, en caso de que dos strings tenga la misma longitud 
deberá devolver el primero. */

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
    let valor = stringList[0];

    for (let i=1;i < stringList.length; i++) {
        if (valor.length > stringList[i].length) {
            valor = valor
        }
        else if (valor.length < stringList[i].length) {
            valor = stringList[i]
        }
        else {
            valor = valor
        }
    };

    return valor
}

console.log(findLongestWord(avengers))