// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
    for (let i=0; i < list.length; i++) {
        let valor = list[i]
        for (let b = list.length - 1; b > i; b--)
            if (valor == list[b]) {
                list.splice(b, 1)
            };
    };

    return list
};

console.log(removeDuplicates(duplicates));