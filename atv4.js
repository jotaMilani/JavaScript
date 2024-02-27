var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matriz);
console.log("");
console.log("");
console.log(matriz[0][0], matriz[1][1], matriz[2][2]);
console.log(matriz[0][2], matriz[1][1], matriz[2][0]);
console.log(matriz[2][0], matriz[1][1], matriz[0][2]);
console.log(matriz[2][2], matriz[1][1], matriz[0][0]);

var usuario = ["Henrique", 22, "Preto", "Maracuja", "Rua Don Carlo Gnocchi, Milão, Itália", "Thor"];
console.log(
  "Olá, ",
  usuario[0],
  "Seja Bem-Vindo ao nosso sistema.",
  "O senhor mora no endereço ",
  usuario[4],
  "possui um pet com o nome de ",
  usuario[5],
  "Sua idade é ",
  usuario[1],
  "possui um gosto pouco peculir, tendo como fruta preferida o ",
  usuario[3],
  "E sua cor preferida é",
  usuario[2]
);
