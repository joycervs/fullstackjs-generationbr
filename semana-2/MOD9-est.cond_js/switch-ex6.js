const leia = require("readline-sync");

let nome, codigo, cargo, salario, reajuste, novoSalario;

nome = leia.question("Nome do colaborador: ");
console.log("\nCargo:\n1-Gerente\n2-Vendedor\n3-Supervisor\n4-Motorista\n5-Estoquista\n6-Técnico de TI")
codigo = leia.questionInt(" ")
salario = leia.questionFloat("\nSalario: ");

switch(codigo){
  case 1:
    cargo = "Gerente";
    reajuste = 0.10;
    novoSalario = salario + (salario * reajuste);
  break
  case 2:
    cargo = "Vendedor";
    reajuste = 0.07;
    novoSalario = salario + (salario * reajuste);
  break
  case 3:
    cargo = "Supervisor";
    reajuste = 0.09;
    novoSalario = salario + (salario * reajuste);
  break
  case 4:
    cargo = "Motorista";
    reajuste = 0.06;
    novoSalario = salario + (salario * reajuste);
  break
  case 5:
    cargo = "Estoquista";
    reajuste = 0.05;
    novoSalario = salario + (salario * reajuste);
  break
  case 6:
    cargo = "Técnico de TI";
    reajuste = 0.08;
    novoSalario = salario + (salario * reajuste);
  break
  default:
    console.log("Código inválido!");

}

console.log(`Nome do colaborador: ${nome}\nCargo: ${cargo}\nSalário: ${novoSalario}`);