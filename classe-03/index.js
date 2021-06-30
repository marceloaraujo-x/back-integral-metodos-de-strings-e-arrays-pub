const texto = "Aprenda programar do zero na Cubos Academy";

let url = texto.toLowerCase();
for (let item of url) {
    url = url.replace(" ", "-");
}
console.log(url);