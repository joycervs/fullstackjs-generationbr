const leia = require('readline-sync');

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let num = leia.questionInt(`Digite o número que você deseja encontrar:\n`);
let indice = 0;

while (num !== vetor[indice]) {
    indice++;
}

if (indice < vetor.length) {
    console.log(`O número ${num} está localizado na posição: ${indice}`);
} else {
    console.log(`O número ${num} não foi encontrado!`);
}


