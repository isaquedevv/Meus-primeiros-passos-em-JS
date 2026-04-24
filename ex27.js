const prompt = require('prompt-sync')();

console.log("--- Cálculo da Diferença entre Dois Números Inteiros ---");

let v1 = Number(prompt("Insira o primeiro valor numérico: "));
let v2 = Number(prompt("Insira o segundo valor numérico: "));
let diferenca

if(v1 > v2){
    diferenca = v1 - v2
}else{
    diferenca = v2 - v1
}

console.log(`A diferenca entre esses dois números é: ${diferenca}`);