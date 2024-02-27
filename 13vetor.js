const numeros = [1, 2, 3, 4, 5];
console.log("");
console.log(numeros);
console.log(numeros[2]);
console.log("");
numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);
console.log("");
var dinos = ["tiranossauro rex", "estegossauro", "anquilossauro"];
console.log(dinos);
console.log(dinos[0]);
console.log("");
console.table(dinos);

//adicionando elementos ao vetor existente
dinos.push("Brontossauro", "Velocirapitor");
console.table(dinos);

dinos.unshift("Tricerátops");
console.table(dinos);

dinos.pop();
console.table(dinos);

dinos.shift();
console.table(dinos);

dinos.splice(1, 1);
console.table(dinos);

console.log("--------------> continuação da aula <--------------");

var dinos = [
  "triceratopis",
  "tiranossauro rex",
  "estegossauro",
  "aquilossauro",
  "brontossauro",
  "ictiossauro",
  "pterodactilo",
  "espinossauro",
];

console.table(dinos);

var elementoProcurado = "brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "triceratopis";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "pterodactilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);
console.log("------------------------------------");
//criando cópia de array (vetor)
var copia1 = dinos.slice();
console.log("vetor cópia 1");
console.table(copia1);

var copia2 = dinos.slice(1, 3);
console.log("vetor cópia 2");
console.table(copia2);

