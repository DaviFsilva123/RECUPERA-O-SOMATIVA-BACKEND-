const entrada = require('readline-sync');

const caixasPorHora = entrada.questionInt("Digite a quantidade de caixas produzidas por hora: ");
const horasTrabalhadas = entrada.questionInt("Digite a quantidade de horas trabalhadas no dia: ");
const producaoTotal = caixasPorHora * horasTrabalhadas;

console.log(`A máquina produz ${caixasPorHora} caixas por hora.`);
console.log(`Durante um dia de trabalho, ela irá produzir ${producaoTotal} caixas.`);