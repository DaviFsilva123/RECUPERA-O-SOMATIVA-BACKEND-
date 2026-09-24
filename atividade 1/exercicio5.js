//Situação-problema Uma máquina executa ciclos repetitivos de produção e fabrica sempre a mesma quantidade de peças em cada ciclo. O encarregado deseja visualizar a produção acumulada do ciclo 1 até o ciclo 10 para acompanhar o rendimento da máquina. Crie um programa que solicite quantas peças são produzidas por ciclo e mostre, para cada ciclo, o total acumulado até aquele momento. A solução deve obrigatoriamente usar uma estrutura de repetição, sem escrever manualmente dez linhas de cálculo. Teste mínimo / evidência esperada: Com 15 peças por ciclo: ciclo 1 = 15, ciclo 5 = 75 e ciclo 10 = 150. Raciocínio esperado: O contador do laço representa o número do ciclo e pode ser multiplicado pela produção por ciclo.
const entrada = require("readline-sync");

const pcsPorCiclo = entrada.questionInt("Peças produzidas por ciclo: ");

for (let ciclo = 1; ciclo <=10; ciclo++) {
    const producao = ciclo * pcsPorCiclo;
    console.log(`Ciclo ${ciclo}: ${producao} pecas acumuladas`);
};