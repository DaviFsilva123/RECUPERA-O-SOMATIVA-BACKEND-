
const entrada = require("readline-sync");

const setores = []

for(let i = 0; i < 6; i++){
    const setor = entrada.question(`Digite o nome do setor ${i + 1}: `);
    setores.push(setor);
}

console.log("--- Lista de Setores ---");
for(let i = 0; i < setores.length; i++){
    console.log(`Setor: ${setores[i]}`);
}
