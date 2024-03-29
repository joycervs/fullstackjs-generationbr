const leia = require("readline-sync");

let nome, idade, primeiraDoacao;

nome = leia.question("Digite o nome do doador: ");
idade = leia.questionInt("\nDigite a idade do doador: ");
primeiraDoacao = leia.keyInYNStrict("\nPrimeira doacao de sangue?(y/n):");

if (idade >= 18 && idade <= 69 && idade >= 60 && !primeiraDoacao) {
  console.log(`${nome} está apto para doar sangue!`);
} else {
  console.log(`${nome} não está apto para doar sangue!`);
}

