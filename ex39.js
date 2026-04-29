const prompt = require('prompt-sync')();

console.log("--- Múltiplo de 3 e 5 ---");

let v1 = Number(prompt("Insira um valor numérico: "));
let temp

temp = v1 % 3


if(temp==0){
    temp = v1 % 5

    if(temp==0){
        console.log(`${v1} é divisível por 3 e 5`);
    }else{
        console.log(`${v1} não é divisível por 3 e 5`);
    }
}else{
    console.log(`${v1} não é divisível por 3 e 5`);
}