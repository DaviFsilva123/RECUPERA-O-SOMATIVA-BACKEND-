//Situação-problema Uma máquina industrial possui um sensor de temperatura. O setor de manutenção definiu três faixas para apoiar a tomada de decisão: até 60 °C a situação é NORMAL; de 60 °C a 80 °C a situação exige ATENÇÃO; acima de 80 °C a condição é CRÍTICA. Desenvolva um programa que receba a temperatura atual e classifique automaticamente a condição da máquina. Teste mínimo / evidência esperada: Teste com 50 °C, 70 °C e 90 °C. Raciocínio esperado: Use if, else if e else para representar as três faixas de temperatura.
const entrada = require("readline-sync")

const temperatura = entrada.questionFloat("Digite a temperatura da maquina: ");

if (temperatura<=60){
    console.log("NORMAL")
}else if (temperatura>60 && temperatura<=80){
    console.log("Atencao");
}else{
    console.log("Critica");
}