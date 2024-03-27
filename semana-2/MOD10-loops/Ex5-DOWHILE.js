const leia = require("readline-sync");

let num;
let soma = 0;

do {
  num = leia.questionInt("Digite um numero: ");
  if(num > 0){
    soma = soma + num;
  }
}while (num !== 0);

console.log(`A soma dos números positivos é: ${soma}`);
