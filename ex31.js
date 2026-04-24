const prompt = require('prompt-sync')();

console.log("--- Resolução de Equação de Segundo Grau ---");

let a = Number(prompt("Insira o valor do coeficiente 'a': "));
let b = Number(prompt("Insira o valor do coeficiente 'b': "));
let c = Number(prompt("Insira o valor do coeficiente 'c': "));
let delta;

delta = Math.pow(b,2) - (4 * a * c);

if(delta >= 0){
    let x1 = ((-b + Math.pow(delta,0.5)) / (2 * a));
    let x2 = ((-b - Math.pow(delta,0.5)) / (2 * a));
    console.log(`x1 = ${x1} | x2 = ${x2} (raízes da equação)`);
}else{
    console.log("Não existem raízes reais");
}
