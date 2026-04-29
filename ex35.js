const prompt = require('prompt-sync')();

console.log("--- Maior e Menor ---");

let v1 = Number(prompt("Insira o primeiro valor numérico: "));
let v2 = Number(prompt("Insira o segundo valor numérico: "));
let v3 = Number(prompt("Insira o terceiro valor numérico: "));
let v4 = Number(prompt("Insira o quarto valor numérico: "));
let v5 = Number(prompt("Insira o quinto valor numérico: "));

let maior
let menor

maior = v1
menor = v1

//Maior Número
if(v2>maior){
    maior = v2
}

if(v3>maior){
    maior = v3
}

if(v4>maior){
    maior = v4
}

if(v5>maior){
    maior = v5
}
// 
//Menor Número
if(v2<menor){
    menor = v2
}

if(v3<menor){
    menor = v3
}

if(v4<menor){
    menor = v4
}

if(v5<menor){
    menor = v5
}


console.log(`Maior número: ${maior} | Menor número: ${menor}`);