const numeros = [1, 2, 3, 4, 5];
console.log("")
console.log(numeros);
console.log(numeros[2])
console.log("")
numeros[2]=6
console.log(numeros);
console.log(numeros[2])
console.log("")
var dinos = ["tiranossauro rex", "estegossauro", "anquilossauro"];
console.log(dinos)
console.log(dinos[0])
console.log("")
console.table(dinos);

//adicionando elementos ao vetor existente
dinos.push("Brontossauro","Velocirapitor");
console.table(dinos)

dinos.unshift("Tricerátops")
console.table(dinos)
