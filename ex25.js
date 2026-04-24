const prompt = require('prompt-sync')();

console.log("--- Sucessor e Antecessor de um Número Inteiro ---");

let v1 = Number(prompt("Insira um valor numérico inteiro: "));


let antecessor = v1 - 1
let sucessor = v1 + 1

console.log(`Sucessor:: ${sucessor} | Antecessor: ${antecessor}`);