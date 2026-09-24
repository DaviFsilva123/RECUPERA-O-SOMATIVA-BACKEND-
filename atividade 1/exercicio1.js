//Situação-problema Uma indústria de componentes plásticos precisa estimar rapidamente a produção de uma linha durante um turno. Em determinado setor, a máquina trabalha com uma produtividade constante e o supervisor deseja saber quantas peças serão produzidas ao final do período. Você foi solicitado a criar um pequeno programa em JavaScript que faça esse cálculo automaticamente. O sistema deverá armazenar a quantidade de peças produzidas por hora e o número de horas do turno, calcular a produção total e exibir uma mensagem clara para o supervisor.
const entrada = require('readline-sync');

const qdtPorHora = entrada.questionInt("Digite a quantidade de peca produzida por hora: ");

const horasTurno = entrada.questionInt("Digite as horas trabalhadas por turno: ");

const prodTotal = qdtPorHora * horasTurno;

console.log("\n=== RELATORIO DE PRODUCAO ===");
console.log(`Pecas produzidas por hora: ${qdtPorHora}`);
console.log(`Horas do turno: ${horasTurno}`);
console.log(`Total produzido: ${prodTotal} pecas`);