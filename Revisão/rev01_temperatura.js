// Um sensor mede a temperatura de um forno industrial. O sistema deve classificar a leitura sem deixar
// valores de fronteira fora das faixas.
// O programa deve:
// ☐ Solicitar a temperatura pelo terminal.
// ☐ Até 60 °C: exibir NORMAL.
// ☐ De 61 °C até 80 °C: exibir ATENÇÃO.
// ☐ Acima de 80 °C: exibir CRÍTICA.
// ☐ Exibir também a temperatura informada.
// ☐ Testar obrigatoriamente com 60, 61, 80 e 81 °C.

const entrada = require('readline-sync');

const temperatura = entrada.questionFloat("Insira a temperatura: ");

if (temperatura <= 60){
    console.log(`a temperatura ${temperatura} °C está NORMAL`);
}else if(temperatura <= 80 ){
    console.log(`a temperatura ${temperatura} °C precisa de ATENCAO!!`);
}else{
    console.log(`a temperatura ${temperatura} °C é CRITICA!!!!!!!!!!!!!!!`);
};