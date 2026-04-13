// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    const encontrados = mutants.filter(
        mutant => mutant.power.toLowerCase() === power.toLowerCase()
    );

    if (encontrados.length > 0) {
        const nombres = encontrados.map(mutant => mutant.name).join(", ");
        return `Mutantes encontrados con el poder "${power}": ${nombres}`;
    } else {
        return `No se encontró ningún mutante con el poder "${power}".`;
    }
};

console.log(findMutantByPower(mutants, "telepathy"));