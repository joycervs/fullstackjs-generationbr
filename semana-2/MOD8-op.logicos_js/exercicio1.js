const leia = require('readline-sync');

let salario, abono, novoSalario;

salario = leia.questionFloat("\nDigite o Salario: ");
abono = leia.questionFloat("\nDigite o Abono: ");

novoSalario = salario + abono;
console.log("O novo salario é: " + novoSalario);
