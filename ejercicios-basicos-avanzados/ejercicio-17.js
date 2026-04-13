// For...in: Usa un for...in para imprimir por consola los datos del alienígena.

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const value in alien) {
    console.log(alien[value]);
}