// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total.

const entrada = require('readline-sync');

const nome = entrada.question("Digite o nome da peça: ");
const quantidade = entrada.questionInt("Digite a quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Digite o preço unitário: ");
const valorTotal = quantidade * precoUnitario;  

console.log("---- Resumo Final ----");
console.log(`Peça: ${nome}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço unitário: R$${precoUnitario.toFixed(2)}`);
console.log(`Valor total da compra: R$${valorTotal.toFixed(2)}`);
console.log("-------------------------------");
