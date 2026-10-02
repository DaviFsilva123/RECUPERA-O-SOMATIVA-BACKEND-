const entrada = require("readline-sync");

let acumulador = 0

for(let i = 0; i < 6; i++){
    let tempo = entrada.questionFloat(`Qual o tempo ${i + 1}? `);
    acumulador += tempo;
}
let media = acumulador / 6;


console.log(`A média dos tempos e: ${media}`);