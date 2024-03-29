const leia = require("readline-sync");

let n1, n2, n3, n4, produto;

n1 = leia.questionFloat("\nNúmero 1: ");
n2 = leia.questionFloat("\nNúmero 2: ");
n3 = leia.questionFloat("\nNúmero 3: ");
n4 = leia.questionFloat("\nNúmero 4: ");

produto = n1 * n2 - n3 * n4;
console.log("Diferença " + produto);
