const celular = 99918888;

const celularString = `${celular}`;

if (celularString.length === 8) {
    console.log(`9 ${celularString.substr(0, 4)}-${celularString.substr(4)}`);
} else if (celularString.length === 9) {
    console.log(`${celularString.substr(0, 1)} ${celularString.substr(1, 4)}-${celularString.substr(5)}`)
} else if (celularString.length === 10) {
    console.log(`(${celularString.substr(0, 2)}) 9 ${celularString.substr(2, 4)}-${celularString.substr(6)}`);
} else if (celularString.length === 11) {
    console.log(`(${celularString.substr(0, 2)}) ${celularString.substr(2, 1)} ${celularString.substr(3, 4)}-${celularString.substr(7)}`)
} else {
    console.log("Número de celular inválido");
}



