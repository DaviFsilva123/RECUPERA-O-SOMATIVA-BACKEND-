//Situação-problema Em uma linha de produção, determinadas peças precisam passar por um controle de peso antes de seguirem para embalagem. O padrão de qualidade estabelece que cada peça deve pesar entre 95 g e 105 g, inclusive. Peças fora dessa faixa devem ser separadas para análise. Crie um programa que receba o peso de uma peça pelo terminal, verifique se ele está dentro da faixa permitida e informe se a peça está APROVADA ou REPROVADA. Teste mínimo / evidência esperada: Teste com 100 g e 110 g. Também verifique os limites 95 g e 105 g. Raciocínio esperado: A condição correta exige que o peso seja maior ou igual a 95 e, ao mesmo tempo, menor ou igual a 105.

const entrada = require('readline-sync');

const peso = entrada.questionFloat("Digite o peso da peca: ");

if (peso >=95 && peso<= 105) {
    console.log("Aprovada");
}else {
    console.log("Reprovada");
}