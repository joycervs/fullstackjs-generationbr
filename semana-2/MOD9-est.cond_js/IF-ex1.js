const leia = require("readline-sync");

let a, b, c, soma;

a = leia.questionInt("\nDigite o numero A: ");
b = leia.questionInt("\nDigite o numero B: ");
c = leia.questionInt("\nDigite o numero C: ");

soma = a + b;
console.log(`\n ${a} + ${b} = ${soma}`);

if(soma > c){
  console.log("\nA soma é maior do que C");
}else if(soma < c){
  console.log("\nA soma é menor do que C");
}else{
  console.log("\nA soma é igual a C")
}