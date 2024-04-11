const leia = require("readline-sync");

import { Stack } from "./Stack";

function main() {
  const pilha = new Stack<string>();

  do {
    console.log("*************************************************");
    console.log("                                                 ");
    console.log("         1 - Adicionar Livro na pilha            ");
    console.log("         2 - Listar todos os Livros              ");
    console.log("         3 - Retirar Livro da pilha              ");
    console.log("         0 - Sair                                ");
    console.log("                                                 ");
    console.log("*************************************************");

    let opcao = leia.questionInt("Entre com a opção desejada: ");
    switch (opcao) {
      case 1:
        let nome = leia.question("\nNome do Livro: ");
        if (!nome) {
          console.log("Erro ao adicionar o livro");

          keyPress();
          break;
        }

        adicionarLivro(nome);

        console.log("Pilha: ");

        listarLivros(pilha);
        console.log("Livro Adicionado!");

        keyPress();
        break;
      case 2:
        if (!pilha.isEmpty()) console.log("Lista de Livros na Pilha\n");
        listarLivros(pilha);

        keyPress();
        break;
      case 3:
        retirarLivro(pilha);

        if (!pilha.isEmpty()) {
          console.log("Pilha: ");
          listarLivros(pilha);
          console.log("Um Livro foi retirado da pilha!");
        }

        keyPress();
        break;
      case 0:
        console.log("\n\nPrograma Finalizado!");

        keyPress();
        break;
      default:
        console.log("Opção inválida! Digite novamente!\n");
        keyPress();
        break;
    }
  } while (true);

  function adicionarLivro(nome: string): void {
    pilha.push(nome);
  }

  function listarLivros(pilha: Stack<string>): void {
    if (pilha.isEmpty()) {
      console.log("A pilha está vazia!");
      return;
    }

    pilha.printStack();
  }

  function retirarLivro(pilha: Stack<string>) {
    pilha.pop();
  }
}

function keyPress(): void {
  console.log("\nPressione enter para continuar...");
  leia.prompt();
}

main();
