const entrada = require('readline-sync');

// Importando o módulo completo
const manutencao = require('./funcoesManutencao');

// Entradas de dados pelo usuário
const nomeMaquina = entrada.question("Nome da maquina: ");
const valorPecas = entrada.questionFloat("Valor das pecas (R$): ");
const horas = entrada.questionFloat("Horas de manutencao: ");
const meses = entrada.questionInt("Meses desde a ultima manutencao: ");

// Chamada das funções através do objeto importado
const maoDeObra = manutencao.calcularMaoDeObra(horas);
const total = manutencao.calcularTotal(valorPecas, horas);
const statusGarantia = manutencao.verificarGarantia(meses);

// Relatório Final
console.log("\n=================================");
console.log("    RELATÓRIO DE MANUTENÇÃO      ");
console.log("=================================");
console.log(`Máquina: ${nomeMaquina}`);
console.log(`Valor das Peças: R$ ${valorPecas.toFixed(2)}`);
console.log(`Mão de Obra (${horas}h): R$ ${maoDeObra.toFixed(2)}`);
console.log(`Custo Total: R$ ${total.toFixed(2)}`);
console.log(`Situação da Garantia: ${statusGarantia}`);
console.log("=================================");