const entrada = require('readline-sync');

const nivelOleo = entrada.questionFloat("Insira o nivel de óleo em porcentagem: ");

if (nivelOleo >= 40 && nivelOleo <= 80){
    console.log(`O nivel de oleo ${nivelOleo}% esta NORMAL`);
} else {
    console.log(`O nivel de oleo ${nivelOleo}% INSPECAO NECESSARIA`);
}

