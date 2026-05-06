const prompt = require('prompt-sync')();

console.log("--- Fatorial dos Valores Ímpares entre 1 e 100 ---");

let resultado = 1n

for (let numeroImpar = 1; numeroImpar <= 100; numeroImpar += 2) {
    for (let valor = 1; valor <= numeroImpar; valor += 2) {
    resultado = resultado * BigInt(valor);
    }
}
console.log(`O resultado do fatorial é de: `);
console.log(resultado.toString());