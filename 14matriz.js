//criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];

console.table(matriz);

//obtendo elemento com base e seus índices
console.log("matriz[1,2 =", matriz[1][2]);
console.log("matriz[1,2 =", matriz[2][0]);

//Alterando valores de elementos  com base e seus índices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);