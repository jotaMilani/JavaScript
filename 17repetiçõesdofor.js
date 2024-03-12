for (let i = 0; i <= 1000; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  
  //escreva todos os numeros de 1 a 20 com for
  console.log("");
  for (let o = 1; o <= 20; o++) {
    console.log(o);
  }
  
  //todos o snumeros de 1 a 20 com for pares
  
  console.log("");
  for (let j = 2; j <= 20; j += 2) {
    console.log(j);
  }
  
  console.log("---------------------------------------------");
  console.log("---------------------------------------------");
  console.log("---------------------------------------------");
  var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
  
  console.log(numeros);
  var somar = 0;
  for (let i = 0; i < numeros.length; i++) {
    somar += numeros[i];
  }
  console.log(`a soma dos elementos é ${somar}`);
  
  var mult = 0;
  for (let p = 0; p < numeros.length; p++) {
    numeros[p] *= 3;
  }
  console.log(`a multiplicação dos elementos é ${numeros}`);
  
  console.log("---------------------------------------------");
  console.log("---------------------------------------------");
  console.log("---------------------------------------------");
  
  var matriz = [
    [8, 4, 1],
    [3, 7, 8],
  ];
  
  
  console.table(matriz);
  
  for (var linha = 0; linha<matriz.length; linha++)
  {
      for (var coluna = 0; coluna<matriz[0].length; coluna++)
      {
          console.log(`matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`)
      }
  
  }