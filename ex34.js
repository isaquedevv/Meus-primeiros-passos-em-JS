const prompt = require('prompt-sync')();

console.log("--- Valores divisíveis por 2 ou 3 ---");

let v1 = Number(prompt("Insira o primeiro valor numérico: "));
let v2 = Number(prompt("Insira o segundo valor numérico: "));
let v3 = Number(prompt("Insira o terceiro valor numérico: "));
let v4 = Number(prompt("Insira o quarto valor numérico: "));

let v2f1
let v2f2
let v2f3
let v2f4

let v3f1
let v3f2
let v3f3
let v3f4

v2f1 = v1 % 2
v2f2 = v2 % 2
v2f3 = v3 % 2
v2f4 = v4 % 2

v3f1 = v1 % 3
v3f2 = v2 % 3
v3f3 = v3 % 3
v3f4 = v4 % 3

if(v2f1==0 || v3f1==0){
    console.log(`${v1}`);
}

if(v2f2==0 || v3f2==0){
    console.log(`${v2}`);
}

if(v2f3==0 || v3f3==0){
    console.log(`${v3}`);
}

if(v2f4==0 || v3f4==0){
    console.log(`${v4}`);
}