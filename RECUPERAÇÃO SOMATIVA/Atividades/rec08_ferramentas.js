
const entrada = require("readline-sync");
const ferramentas = []

for(let i = 0; i< 4; i++){
    const nome = entrada.question(`Digite o nome da ferramenta ${i + 1}: `);
    const quantidade = entrada.questionInt(`Digite a quantidade disponivel da ferramenta ${i + 1}: `);
    const minimo = entrada.questionInt(`Digite a quantidade minima da ferramenta ${i + 1}: `);
   
    ferramentas.push(nome,quantidade,minimo);
}

for(let i = 0; i < ferramentas.length; i++){
    const ferramenta = ferramentas[i];

    console.log(`\n--- Ferramenta ${i + 1} ---`);

    console.log(`Nome: ${ferramenta.nome}`);

    console.log(`Quantidade: ${ferramenta.quantidade}`);

    console.log(`Minimo: ${ferramenta.minimo}`);


    if(ferramenta.quantidade < ferramenta.minimo){
        console.log("Situacao: REPOR");
    } else {
        console.log("Situacao: ESTOQUE SUFICIENTE");
    }
}