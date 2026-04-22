const prompt = require('prompt-sync')();

console.log("--- Cálculo do novo Salário com Aumento ---");

let salario = Number(prompt("Insira o valor do salário mensal: "));
let porcentagem = Number(prompt("Insira a porcentagem do aumento do salário: "));

let aumento = salario * (porcentagem / 100)
let novo_salario = salario + aumento

console.log(`Novo Salário: ${novo_salario} | Aumento concedido: ${aumento}`);