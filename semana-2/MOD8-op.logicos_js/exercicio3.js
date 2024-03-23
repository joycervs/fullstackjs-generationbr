const leia = require("readline-sync");

let salarioBruto, adNoturno, horasExtras, descontos, salarioLiq;

salarioBruto = leia.questionFloat("\nSalário Bruto: ");
adNoturno = leia.questionFloat("\nAdicional Noturno: ");
horasExtras = leia.questionFloat("\nHoras Extras: ");
descontos = leia.questionFloat("\nDescontos: ");

salarioLiq = salarioBruto + adNoturno + horasExtras * 5 - descontos;
console.log("Salário líquido: " + salarioLiq);
