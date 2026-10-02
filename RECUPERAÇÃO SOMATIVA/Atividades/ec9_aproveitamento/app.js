
const entrada = require("readline-sync");
const aproveitamento = require("./ec09_aproveitamento");

const quantidadeTotal = entrada.questionFloat("Digite a quantidade total de materia prima: ");
const quantidadeUtil = entrada.questionFloat("Digite a quantidade útil de materia prima: "  );

const percentualAproveitamento = aproveitamento.calcularAproveitamento(quantidadeUtil, quantidadeTotal);
const classificacao = aproveitamento.classificarAproveitamento(percentualAproveitamento);

console.log("\n--- Relatório de Aproveitamento --- ");
console.log(`Quantidade Total: ${quantidadeTotal}`);
console.log(`Quantidade Útil: ${quantidadeUtil}`);
console.log(`Percentual de Aproveitamento: ${percentualAproveitamento.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);
