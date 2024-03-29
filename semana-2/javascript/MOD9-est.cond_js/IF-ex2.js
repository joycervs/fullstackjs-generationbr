const leia = require("readline-sync");

let numero;

numero = leia.questionInt("\nDigite um numero: ");

if(numero >= 0 ){
  if(numero % 2 === 0 ){
  console.log("\nO numero",numero," é par e positivo!");
  }else{
    console.log("\nO numero",numero,"é impar e positivo!");
  }
}else if(numero < 0){
  if(numero % 2 === 0 ){
    console.log("\nO numero",numero," é par e negativo!");
    }else{
      console.log("\nO numero",numero,"é impar e negativo!");
    }
}
