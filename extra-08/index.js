const email = "aluno@cubos.academy";

function validarEmail(email) {
    if (email.includes("@")) {
        if (email.includes(".")) {
            if (email.indexOf(".") !== 0 && email.lastIndexOf(".") !== email.length - 1) {
                console.log("O email é valido");
            } else { console.log("Email inválido! O email não pode iniciar nem terminar com ponto") }
        } else { console.log("Email inválido! É necessário haver um ponto '.' no email") }
    } else { console.log("Email inválido! É necessário ter '@' no email") };
}

validarEmail(email)