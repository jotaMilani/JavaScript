// let contador = 0;
// while (contador < 9) {
//   contador++;
//   console.log(contador);
// }
// console.log("---------------------------------------");
// var x = 20;

// while (x > 10) {
//   console.log("entrei no laço while...");
//   x--;
// }
// console.log("terminei");
// console.log("---------------------------------------");

// var countdown = 20;

// while (countdown > 0) {
//   console.log(countdown);
//   countdown--;
// }
// console.log("lançamento");
// console.log("---------------------------------------");

// var limite = 500;
// var fatura = 0;
// while (fatura <= limite) {
//   var gasto = Math.random() * 100;
//   fatura += gasto;
//   console.log(
//     `gastei R$ ${gasto.toFixed(2)} --------- fatura: R$ ${fatura.toFixed(2)}`
//   );
//   fatura > limite && console.log("estourou limite do cartão");
// }

//Jogo de Cara ou Coroa - mio de treis

var rodada = 1;
var moeda = "";
var escolhaJogador = "";
var vitoria = 0;
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "cara" : "coroa";
  escolhaJogador = Math.random() >= 0.5 ? "cara" : "coroa";

  if (escolhaJogador == moeda) {
    console.log("Parabéns você ganhou!");
    vitoria++;
  } else {
    console.log("que pena, você perdeu!");
    derrota++;
  }

  console.log(moeda);
  rodada++;
}

console.log("------------------------");
console.log("         Placar         ");
console.log("------------------------");
console.log(`vitórias: ${vitoria}`)
console.log(`derrotas: ${derrota}`)
