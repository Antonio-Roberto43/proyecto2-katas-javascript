// Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
// Que la función use el parametro para simular una tirada de dado y retornar el resultado.

function rollDice(caras) {
    const resultado = Math.floor(Math.random() * caras) + 1;
    return resultado;
};

console.log(rollDice(6));