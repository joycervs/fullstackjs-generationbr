const leia = require("readline-sync");

let idade;
let menor = 0;
let maior = 0;



while(true){
  idade = leia.questionInt("Digite uma idade: "); 

  if (idade < 0){
    break;
  }
  if(idade < 21){
    menor++;
  }else if ( idade > 50){
    maior++;
  }
}

console.log(`Total de pessoas menores de 21 anos: ${menor}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior}`);