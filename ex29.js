const prompt = require('prompt-sync')();

console.log("--- Cálculo da Média e Verificação de Aprovação ---");

let v1 = Number(prompt("Insira o valor da primeira nota bimestral: "));
let v2 = Number(prompt("Insira o valor da segunda nota bimestral: "));
let v3 = Number(prompt("Insira o valor da terceira nota bimestral: "));
let v4 = Number(prompt("Insira o valor da quarta nota bimestral: "));
let media

media = (v1 + v2 + v3 + v4) / 4

if(media >= 5){
    console.log(`O aluno passou de ano, com uma Média de ${media}.`);
}else{
    console.log(`O aluno ficou reprovado, com uma Média de ${media}.`);
}