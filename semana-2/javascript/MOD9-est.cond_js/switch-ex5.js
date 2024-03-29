const leia = require('readline-sync');

let codigo, quantidade, precoUnit, nomeProduto;

codigo = leia.questionInt("Digite o código do produto: ")
quantidade = leia.questionInt("\nDigite a quantidade comprada: ");

switch(codigo){
  case 1:
    nomeProduto = "Cachorro Quente" ;
    precoUnit = 8.00;
  break
  case 2:
    nomeProduto = "X-Salada";
    precoUnit = 15.00;
  break
  case 3:
    nomeProduto = "X-bacon";
    precoUnit = 18.00;
  break
  case 4:
    nomeProduto = "Bauru";
    precoUnit = 12.00;
  break
  case 5:
    nomeProduto = "Refrigerante";
    precoUnit = 8.00;
  break
  case 6:
    nomeProduto = "Suco de Laranja";
    precoUnit = 13.00;
  break
  default: 
    console.log("Código inválido!")
}

 valorTotal = precoUnit * quantidade;
console.log(`Produto: ${nomeProduto}`);
console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`);