// Um almoxarifado precisa cadastrar 4 materiais. Cada material possui nome, quantidade atual e estoque
// mínimo. Ao final, o programa deve indicar quais precisam de reposição.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para cadastrar 4 materiais.
// ☐ Criar um objeto em cada repetição com nome, quantidade e estoqueMinimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Depois do cadastro, percorrer o array.
// ☐ Se quantidade < estoqueMinimo, exibir REPOR ESTOQUE; caso contrário, ESTOQUE OK.
// ☐ Exibir nome, quantidade, estoque mínimo e situação.


const entrada = require('readline-sync');

const componentes = [];


for (let i = 1; i <= 4; i++) {
    
    const nome = entrada.question(`Nome do material ${i}: `);
    const quantidade = entrada.questionInt(`Quantidade do material ${i}: `);
    const estoqueMinimo = entrada.questionInt(`Qual é o estoque mínimo do material ${i}: `);
    
    const componente = {
        nome, 
        quantidade,
        estoqueMinimo
    };
    componentes.push(componente);
}


for (let i = 0; i < componentes.length; i++) {
    const item = componentes[i];

    console.log(`\nComponente: ${item.nome}`);
    console.log(`Quantidade: ${item.quantidade}`);
    console.log(`Estoque mínimo: ${item.estoqueMinimo}`);

    if (item.quantidade < item.estoqueMinimo) {
        console.log("Situação: REPOR ESTOQUE");
    } else {
        console.log("Situação: ESTOQUE OK");
    }
}