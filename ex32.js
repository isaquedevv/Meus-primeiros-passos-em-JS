const prompt = require('prompt-sync')();

console.log("--- Ordenação de Três Números Inteiros ---");

let a = Number(prompt("Insira o primeiro valor numérico: "));
let b = Number(prompt("Insira o segundo valor numérico: "));
let c = Number(prompt("Insira o terceiro valor numérico: "));
let temp

if(a>b){
    temp = a
    a = b
    b = temp
    if(a>c){
        temp = a
        a = c
        c = temp
        if(b>c){
            temp = b
            b = c
            c = temp
        }
    }else if(b>c){
        temp = b
        b = c
        c = temp
    }
    
}else if(a>c){
    temp = a
    a = c
    c = temp
    if(b>c){
        temp = b
        b = c
        c = temp
    }
}else if(b>c){
    temp = b
    b = c
    c = temp
}

console.log(`Os valores em ordem crescente são: ${a}, ${b} e ${c}.`);