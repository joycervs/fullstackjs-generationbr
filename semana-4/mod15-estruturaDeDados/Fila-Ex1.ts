const leia = require("readline-sync");

import { Queue } from "./Queue";

const fila = new Queue<string>();

let opcao: number;

do {
  console.log("************************************");
  console.log("                                    ");
  console.log("    1- Adicionar Cliente na Lista   ");
  console.log("    2- Listar Todos os Clientes     ");
  console.log("    3- Retirar Clientes da Fila     ");
  console.log("    0- Sair                         ");
  console.log("                                    ");
  console.log("************************************");
  opcao = leia.questionInt("Entre com a opcao desejada: ");

  switch (opcao) {
    case 1:
      const nome = leia.question("Digite o nome: ");
      fila.enqueue(nome);
      console.log("Fila: ");
      fila.printQueue();
      console.log("Cliente Adicionado!");
      break;

    case 2:
      if (fila.isEmpty()) console.log("A fila está vazia!");
      else {
        console.log("Lista de clientes na fila");
        fila.printQueue();
      }
      break;

    case 3:
      if (fila.isEmpty()) console.log("A fila está vazia!");
      else {
        fila.dequeue();
        console.log("Fila: ");
        fila.printQueue();
        console.log("O cliente foi chamado!");
      }
      break;

    case 0:
      console.log("Programa Finalizado!");
      break;

    default:
      console.log("Digite uma opção válida");
  }
} while (opcao !== 0);
