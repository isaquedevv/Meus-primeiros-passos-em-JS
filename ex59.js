const prompt = require('prompt-sync')();

console.log("--- Divisão Inteira Sem Usar o Operador de Divisão ---");

let v1 = Number(prompt("Insira o primeiro valor numérico: "));
let v2 = Number(prompt("Insira o segundo valor numérico: "));

let resultado = 0
let dividendo = v1
let divisor = v2

while(dividendo >= divisor){
    dividendo = dividendo - divisor
    resultado = resultado + 1
}
console.log(`Resultado da divisão: ${resultado}`);