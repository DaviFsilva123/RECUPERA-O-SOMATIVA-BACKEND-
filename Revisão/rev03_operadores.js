// Cadastre 5 nomes de operadores e, depois de terminar o cadastro, faça uma segunda passagem pelo
// array para exibir a lista numerada.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 5 nomes.
// ☐ Usar push() dentro do laço de cadastro.
// ☐ Depois do cadastro, criar outro laço para percorrer o array.
// ☐ Usar length no segundo laço.
// ☐ Exibir no formato: 1 - Nome, 2 - Nome, etc.

const entrada = require('readline-sync');

const cadastro = [

]

for(let i = 1; i <=5; i++){
    const nome = entrada.question("Insira o nome: ")
    cadastro.push(nome)
}

for(let i = 0; i < cadastro.length; i++){
    console.log(`${i + 1}° Lugar - ${cadastro[i]}`)
}
