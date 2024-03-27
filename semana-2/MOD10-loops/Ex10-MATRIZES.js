const leia = require('readline-sync');

let matriz = new Array(10);

for(let indice = 0; indice < matriz.length; indice ++){
    matriz[indice] = new Array(4);
}

let media = [];
let soma = 0.0;
let nNotas = 0;

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha ++){

    for (let indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna ++){
    
        matriz[indiceLinha][indiceColuna] = leia.questionInt(
            `Digite a nota ${indiceColuna + 1} do participante ${indiceLinha + 1}: 
        `);

    }

}

console.table(matriz);

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha ++){

    for (let indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna ++){
    
        soma += matriz[indiceLinha][indiceColuna];
        nNotas ++;

    }

    media[indiceLinha] = soma / nNotas;
    soma = 0.0;
    nNotas = 0;

}

console.table(media);