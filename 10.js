let distancia = Number(prompt("Digite a distancia (em km) que sera percorrida"));
let litros = Number(prompt("Digite quantos litros você gasta por km"));
let valor = Number(prompt("Digite o preço da gasolina (em Litros)"));
const gasto = (distancia/litros) * valor
console.log("O gasto total da viagem será R$:"+gasto+".");
