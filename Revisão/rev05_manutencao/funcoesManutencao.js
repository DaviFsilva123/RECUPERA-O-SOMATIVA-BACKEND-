// Função que calcula o valor da mão de obra (R$ 80,00/hora)
function calcularMaoDeObra(horas) {
    return horas * 80;
}

// Função que calcula o custo total somando peças e mão de obra
function calcularTotal(valorPecas, horas) {
    const maoDeObra = calcularMaoDeObra(horas);
    return valorPecas + maoDeObra;
}

// Função que verifica o status da garantia com base nos meses passados
function verificarGarantia(meses) {
    if (meses <= 6) {
        return "EM GARANTIA";
    } else {
        return "FORA DA GARANTIA";
    }
}

// Exportando as três funções como um objeto
module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarGarantia
};