const entrada = require("readline-sync");

const produtosPorCiclo = entrada.questionInt("Digite a quantidade de produtos produzidos por ciclo: ");

let producaoAcumulada = 0;  

for (let i = 1 ; i <= 12; i++) {
    producaoAcumulada += produtosPorCiclo;  
    console.log(`Ciclo ${i}: Produção acumulada = ${producaoAcumulada} produtos.`);
}
