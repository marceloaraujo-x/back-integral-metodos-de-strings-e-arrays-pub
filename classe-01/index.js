const comentario = "Esse COVID é muito perigoso!";

if (comentario.includes("COVID") || comentario.includes("covid") || comentario.includes("PANDEMIA") || comentario.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}