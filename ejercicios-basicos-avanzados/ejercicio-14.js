// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
    let lista_final = [];
    for (let i=0; i < list.length; i++) {
        let valor = list[i];
        let repeticiones = 1
        for (let b = list.length - 1; b > i; b--) {
            if (valor === list[b]) {
                repeticiones += 1;
                list.splice(b, 1)
            }
        }
        lista_final.push(`${valor}:${repeticiones}`)
    }
    return lista_final
};

console.log(repeatCounter(words));