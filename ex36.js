const prompt = require('prompt-sync')();

console.log("--- Par ou Ímpar ---");

let v1 = Number(prompt("Insira um valor numérico: "));

let escolha

escolha = v1 % 2

if(escolha==0){
    console.log(`Seu número é Par`);
}else{
    console.log(`Seu número é Ímpar`);
}
