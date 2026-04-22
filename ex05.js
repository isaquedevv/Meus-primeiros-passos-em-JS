const prompt = require('prompt-sync')();

console.log("--- Cálculo do valor de uma Prestação em Atraso ---");

let valor_original = Number(prompt("Insira o valor original da prestação: "));
let meses_atraso = Number(prompt("Insira a quantidade de mêses em atraso: "));
let taxa_juros = Number(prompt("Insira a taxa de Juros mensal: "));

let valor = valor_original  * (1 + (taxa_juros / 100) * meses_atraso)

console.log(`O valor atual da prestação é de: ${valor} Reais`);