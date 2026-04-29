const prompt = require('prompt-sync')();

console.log("--- Sequência de Fibonacci ---");

let v1 = 0
let v2 = 1

console.log(`${v1}, ${v2}`);

let i = 3

while(i <= 15){
    let proximo_termo = v1 + v2
    console.log(`${proximo_termo}`);
    v1 = v2
    v2 = proximo_termo
    i = i + 1
}