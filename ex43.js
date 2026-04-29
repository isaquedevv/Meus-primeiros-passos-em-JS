const prompt = require('prompt-sync')();

console.log("--- Tabuada de um Número ---");

let v1 = Number(prompt("Insira um valor numérico: "));

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    console.log(`${v1} x ${multiplicador} = ${v1 * multiplicador}`);
}