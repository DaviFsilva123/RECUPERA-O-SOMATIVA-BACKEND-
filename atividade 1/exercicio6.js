//Situação-problema Durante a regulagem de um processo industrial, um técnico realiza cinco medições consecutivas de uma grandeza. Para avaliar a estabilidade do processo, ele precisa conhecer a soma das medições e a média obtida. Desenvolva um programa que solicite exatamente cinco valores, acumule os resultados durante a repetição e, ao final, exiba a soma e a média. Teste mínimo / evidência esperada: Teste com 10, 20, 30, 40 e 50. A soma será 150 e a média 30. Raciocínio esperado: Use uma variável acumuladora iniciada em zero e some cada medição dentro do laço.
const entrada = require('readline-sync');

let soma = 0

for (let i = 1; i<=5; i++){
    soma += entrada.questionFloat(`Digite o valor da medicao ${i}: `);
}
const media = soma / 5
console.log(`Soma: ${soma}`);
console.log(`Media: ${media.toFixed(2)}`);