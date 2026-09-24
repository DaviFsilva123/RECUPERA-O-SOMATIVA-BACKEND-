// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que calcule quantas caixas serão produzidas durante um dia de trabalho.
// O programa deve:
// ☐ Criar uma variável para a quantidade de caixas produzidas por hora.
// ☐ Criar uma variável para a quantidade de horas trabalhadas no dia.
// ☐ Calcular a produção total.
// ☐ Exibir uma frase informando caixas por hora, horas trabalhadas e total produzido.

const entrada = require('readline-sync');

const caixasPorHora = entrada.questionInt("Digite a quantidade de caixas produzidas por hora: ");
const horasTrabalhadas = entrada.questionInt("Digite a quantidade de horas trabalhadas no dia: ");
const producaoTotal = caixasPorHora * horasTrabalhadas;

console.log(`A máquina produz ${caixasPorHora} caixas por hora.`);
console.log(`Durante um dia de trabalho, ela irá produzir ${producaoTotal} caixas.`);