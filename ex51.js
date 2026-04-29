const prompt = require('prompt-sync')();

console.log("---  Conversão de Graus Celsius em Fahrenheit ---");

for(let grausCelcius = 10; grausCelcius <=100; grausCelcius += 10){
    grausFahrenheit = (grausCelcius * 9/5) + 32
    console.log(`${grausCelcius}°C = ${grausFahrenheit}°F`);
}