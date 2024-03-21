const leia = require("readline-sync");

let nota1, nota2, nota3, nota4, media;

nota1 = leia.questionFloat("/nDigite a Primeira nota: ");
nota2 = leia.questionFloat("/nDigite a Segunda nota: ");
nota3 = leia.questionFloat("/nDigite a Terceira nota: ");
nota4 = leia.questionFloat("/nDigite a Quarta nota: ");

media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("Média Final: " + media);
