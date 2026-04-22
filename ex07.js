const prompt = require('prompt-sync')();

console.log("--- Adição e Multiplicação de quatro números inteiros ---");

let n1 = Number(prompt("Insira o primeiro valor: "));
let n2 = Number(prompt("Insira o segundo valor: "));
let n3 = Number(prompt("Insira o terceiro valor: "));
let n4 = Number(prompt("Insira o quarto valor: "));

//Adições
let A = n1+n2
let B = n1+n3
let C = n1+n4
let D = n2+n3
let E = n2+n4
let F = n3+n4

//Multiplicações
let G = n1*n2
let H = n1*n3
let I = n1*n4
let J = n2*n3
let K = n2*n4
let L = n3*n4

console.log(`Adições: ${n1} + ${n2} = ${A} | ${n1} + ${n3} = ${B} | ${n1} + ${n4} = ${C} | ${n2} + ${n3} = ${D} | ${n2} + ${n4} = ${E} | ${n3} + ${n4} = ${F}`);
console.log(`Multiplicações: ${n1} * ${n2} = ${G} | ${n1} * ${n3} = ${H} | ${n1} * ${n4} = ${I} | ${n2} * ${n3} = ${J} | ${n2} * ${n4} = ${K} | ${n3} * ${n4} = ${L}`);