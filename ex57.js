const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área Total de uma Residência ---");

let areaTotal = 0

while(true){
    let nomeDoComodo = prompt("Insira o nome do cômodo: ");
    let larguraDoComodo = Number(prompt("Insira a largura do cômodo: "));
    let comprimentoDoComodo = Number(prompt("Insira o comprimento do cômodo: "))
    let areaDoComodo = larguraDoComodo * comprimentoDoComodo
    areaTotal = areaTotal + areaDoComodo
    let continuar = prompt("Continuar? (Y/N): ");

    if(continuar.toUpperCase() !== "Y"){
        console.log(`Área total da residência: ${areaTotal} metros quadrados.`);
        break;
    }
}