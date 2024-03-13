// Criando um objeto do tipo "data" Date()
var data1 = new Date();
console.log(data1);

// Criando um objeto do tipo "data" com data específica Date()
var data2 = new Date("2005=05-12 ");
console.log(data2);

//Extraindo partes de uma data
var data3 = new Date("2008=04-30");
console.log(`Data: ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
console.log(`Retornando o mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];
console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);

var diferencaEmAnos = data1.getTime() - data3.getTime();
const idade = Math.floor(diferencaEmAnos / (1000 * 60 * 60 * 24 * 365.25));

console.log(`Eu tenho ${idade} anos!`);
