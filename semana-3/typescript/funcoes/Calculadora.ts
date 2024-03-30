import readline = require('readline-sync');

let numero1: number, numero2: number;


numero1 = readline.questionFloat("Digite o primeiro numero: ");
numero2 = readline.questionFloat("Digite o segundo numero: ");

console.log("Soma: " + somar(numero1, numero2));
console.log("Subtração: " + subtrair(numero1, numero2));
console.log("Multiplicação: " + multiplicar(numero1, numero2));

let divisao = dividir(numero1, numero2);

if ( divisao !== null)
    console.log("Divisão: " + divisao);
else
    console.log("Não existe divisão por zero!");

function somar(num1: number, num2: number): number{
  return num1 + num2;
}

function subtrair(num1: number, num2: number): number{
  return num1 - num2;
}

function multiplicar(num1: number, num2: number): number{
  return num1 * num2;
}

function dividir(num1: number, num2: number): number | null{
  let divisao = num1 / num2;
  return (divisao != Infinity ? divisao : null);
}

function about(): void{
  console.log("Feito por Joyce");
}