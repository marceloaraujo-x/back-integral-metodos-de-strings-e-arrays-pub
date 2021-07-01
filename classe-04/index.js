let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

identificador = identificador.padStart(6, "0");
console.log(identificador);

nome = nome.split(" ");
let primeiraLetra = "";
let itemNovo = "";
let novoNome = "";
for (let item of nome) {
    primeiraLetra = item[0].toUpperCase();
    itemNovo = primeiraLetra.concat(item.substr(1));
    novoNome += `${itemNovo} `;
}
console.log(novoNome.trim());

email = email.trim();
console.log(email);

console.log(tags.join(", "));