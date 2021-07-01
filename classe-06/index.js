const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

frutas.reverse();
const novoString = frutas.join(", ");
console.log(novoString);

frutas.reverse();
frutas.splice(0, 1);
frutas.splice(frutas.length - 1, 1, "Melão");
console.log(frutas);