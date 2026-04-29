const prompt = require('prompt-sync')();

console.log("--- Somatório de Grãos de Trigo no Tabuleiro de Xadrez ---");

let totalGraos = 0
let quadro = 1
while(quadro<=64){
    let graosnoquadro = Math.pow(2,(quadro - 1))
    totalGraos = totalGraos + graosnoquadro
    quadro = quadro + 1
}
console.log(`Total de Grãos no Tabuleiro de Xadrez: ${totalGraos}`);