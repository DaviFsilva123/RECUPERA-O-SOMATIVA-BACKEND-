function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

module.exports = {
    calcularAproveitamento,
    classificarAproveitamento
};

const entrada = require("readline-sync");
const aproveitamento = require("./ec09_aproveitamento");

const quantidadeTotal = entrada.questionFloat("Digite a quantidade total de materia prima: ");
const quantidadeUtil = entrada.questionFloat("Digite a quantidade util de materia prima: "  );

const percentualAproveitamento = aproveitamento.calcularAproveitamento(quantidadeUtil, quantidadeTotal);
const classificacao = aproveitamento.classificarAproveitamento(percentualAproveitamento);

console.log("\n--- Relatório de Aproveitamento --- ");
console.log(`Quantidade Total: ${quantidadeTotal}`);
console.log(`Quantidade Útil: ${quantidadeUtil}`);
console.log(`Percentual de Aproveitamento: ${percentualAproveitamento.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);