// Um sensor mede o nível de vibração de um equipamento em mm/s.
// O programa deve:
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// ☐ Solicitar o valor da vibração pelo terminal.
// ☐ Exibir o valor informado e a classificação.

const entrada = require('readline-sync');

const vibracao = entrada.questionFloat("Insira o nivel de vibracao em mm/s: ");

if (vibracao <= 3) {
    console.log(`O nivel de vibracao ${vibracao} mm/s está ESTAVEL`);

} else if (vibracao <= 6) {
    console.log(`O nivel de vibracao ${vibracao} mm/s está ATENCAO`);
} else {
    console.log(`O nivel de vibracao ${vibracao} mm/s está CRITICA`);

}

