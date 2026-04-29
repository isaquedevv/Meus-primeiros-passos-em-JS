const prompt = require('prompt-sync')();

console.log("--- Verificação de Valor Menor ou Igual a 3 ---");

let v1 = Number(prompt("Insira um valor numérico: "));

if(v1<=3){
    console.log(`Seu número é menor ou igual a 3`);
}else{
    console.log(`Seu número não é menor ou igual a 3`);
}
