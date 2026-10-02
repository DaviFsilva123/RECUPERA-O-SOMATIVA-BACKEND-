const entrada = require("readline-sync");
const funcoesOrcamento = require("rec10_orcamento/funcoesOrcamento");

const nomeCliente = entrada.question("Digite o nome do cliente: ");
const valorMateriais = entrada.questionFloat("Digite o valor dos materiais: ");
const horas = entrada.questionInt("Digite a quantidade de horas de servico: ");

const maoDeObra = funcoesOrcamento.calcularMaoDeObra(horas);
const total = funcoesOrcamento.calcularTotal(valorMateriais, horas);
const situacaoDesconto = funcoesOrcamento.verificarDesconto(total);

console.log("--- Relatório de Orçamento ---");
console.log(`Cliente: ${nomeCliente}`);
console.log(`Valor dos Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Mao de Obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Situação do Desconto: ${situacaoDesconto}`);