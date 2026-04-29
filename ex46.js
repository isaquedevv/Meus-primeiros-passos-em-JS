const prompt = require('prompt-sync')();

console.log("--- Números Ímpares na Faixa de Valores ---");

let numero = 1
let resultado_soma = "";    

while (numero <= 199) {
    resultado_soma += numero + ", "
    numero += 2
}
console.log(resultado_soma);