const leia = require("readline-sync");

let somapar= 0;
let somaimpar = 0;

for(let n = 1; n <= 10; n++){
  num = leia.questionInt
  (`Digite o ${n}º numero: `);
  if(num % 2 === 0){
    somapar++
  }else {
    somaimpar++
  }
}

console.log(`Total de números pares: ${somapar}`);
console.log(`Total de números ímpares: ${somaimpar}`);


