//Situação-problema O setor de compras de uma pequena fábrica ainda realiza alguns cálculos manualmente. Sempre que chega uma solicitação de matéria-prima, o responsável precisa multiplicar a quantidade comprada pelo preço unitário para saber o valor total do pedido. Para reduzir erros, desenvolva um programa que solicite pelo terminal o nome do material, a quantidade adquirida e o preço de cada unidade. Depois, o programa deverá calcular o total da compra e apresentar um resumo com os dados informados. Teste mínimo / evidência esperada: Teste com 10 unidades a R$ 12,50. O total deverá ser R$ 125,00.
const entrada = require('readline-sync');

const produto = entrada.question("Digite o nome do produto: ");
const qtde = entrada.questionInt("Digite a quantidade adquirida: ");
const precoUnidade = entrada.questionFloat("Qual o valor unitário? ");

const total = qtde * precoUnidade;

console.log("=== Relatorio de compra ===");
console.log(`Produto: ${produto}`);
console.log(`Valor unitário: R$${precoUnidade}`);
console.log(`Valor total da compra: R$${total.toFixed(2)}`);