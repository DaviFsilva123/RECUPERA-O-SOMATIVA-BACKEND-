// O nível de óleo de uma máquina deve permanecer entre 40% e 80%, inclusive. Fora desse intervalo, a máquina precisa de inspeção.
// O programa deve:
// ☐ Solicitar o nível de óleo em porcentagem.
// ☐ Usar if/else para verificar se o nível está dentro do intervalo.
// ☐ Exibir "NÍVEL NORMAL" quando estiver entre 40 e 80.
// ☐ Exibir "INSPEÇÃO NECESSÁRIA" nos demais casos.
// ☐ Exibir também o valor informado.

const entrada = require('readline-sync');

const nivelOleo = entrada.questionFloat("Insira o nivel de óleo em porcentagem: ");

if (nivelOleo >= 40 && nivelOleo <= 80){
    console.log(`O nivel de oleo ${nivelOleo}% esta NORMAL`);
} else {
    console.log(`O nivel de oleo ${nivelOleo}% está INSPECAO NECESSARIA`);
}

