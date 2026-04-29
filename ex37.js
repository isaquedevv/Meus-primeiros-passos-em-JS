const prompt = require('prompt-sync')();

console.log("--- Verificação de Faixa de Valor ---");

let v1 = Number(prompt("Insira um valor numérico: "));

if(v1>=1){
    if(v1<=9){
        console.log(`Seu número está dentro da faixa de valor`);
    }else{
        console.log(`Seu número não está dentro da faixa de valor`);
    }
}else{
    console.log(`Seu número não está dentro da faixa de valor`);
}
