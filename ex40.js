const prompt = require('prompt-sync')();

console.log("--- Soma e Verificação ---");

let v1 = Number(prompt("Insira o primeiro valor numérico: "));
let v2 = Number(prompt("Insira o segundo valor numérico: "));
let v3 = Number(prompt("Insira o terceiro valor numérico: "));
let temp

temp = v1 + v2 + v3

if(temp>100){
    console.log(`A soma de ${v1}, ${v2} e ${v3} é maior que 100`);
}else if(temp==100){
    console.log(`A soma de ${v1}, ${v2} e ${v3} é igual a 100`);
}else{
    console.log(`A soma de ${v1}, ${v2} e ${v3} é menor que 100`);
}