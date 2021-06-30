const cpf = "12345678900";
const cnpj = "12345678000199";

if (cpf.length === 11) {
    let cpfFormatado = cpf.split("");

    cpfFormatado.splice(3, 0, ".");
    cpfFormatado.splice(7, 0, ".");
    cpfFormatado.splice(11, 0, "-");
    console.log(cpfFormatado.join(""));
} else {
    console.log("CPF Inválido");
}
if (cnpj.length === 14) {
    let cnpjFormatado = cnpj.split("");

    cnpjFormatado.splice(2, 0, ".");
    cnpjFormatado.splice(6, 0, ".");
    cnpjFormatado.splice(10, 0, "/");
    cnpjFormatado.splice(15, 0, "-");
    console.log(cnpjFormatado.join(""));

} else {
    console.log("CNPJ Inválido");
}
