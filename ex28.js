const prompt = require('prompt-sync')();

console.log("--- Classificação de Número Positivo ou Negativo ---");

let v1 = Number(prompt("Insira um valor numérico: "));

if(v1 > 0){
    console.log(`O número ${v1} é positivo`);
}else if(v1 < 0){
    console.log(`O número ${v1} é negativo`);
}else{
    console.log(`O número ${v1} é neutro`);
}
