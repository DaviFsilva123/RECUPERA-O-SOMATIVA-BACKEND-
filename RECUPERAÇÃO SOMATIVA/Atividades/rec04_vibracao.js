const entrada = require('readline-sync');

const vibracao = entrada.questionFloat("Insira o nivel de vibracao em mm/s: ");

if (vibracao <= 3) {
    console.log(`O nivel de vibracao ${vibracao} mm/s está ESTAVEL`);

} else if (vibracao <= 6) {
    console.log(`O nivel de vibracao ${vibracao} mm/s está ATENCAO`);
} else {
    console.log(`O nivel de vibracao ${vibracao} mm/s está CRITICA`);

}

