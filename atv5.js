function ano(anonasc, anoatual) {
  return anonasc - anoatual;
}

var nasc = [20, 1, 2002];

console.log(
  `a pessoa que nasceu em 20/1/2002, atualmente em 28/2/2024 tem ${ano(
    2024,
    nasc[2]
  )} anos`
);
console.log("");
console.log("");
function mediaCombustivel(combustivel, kml) {
  return combustivel * kml;
}
console.log(`carro 1: 20L -> percorre ${mediaCombustivel(20, 12)}kms.`);
console.log(`carro 2: 8L -> percorre ${mediaCombustivel(8, 12)}kms.`);
console.log(`carro 3: 2L -> percorre ${mediaCombustivel(2, 12)}kms.`);

console.log("");
console.log("");

// var id = 18;
// function id(idade) {
//   if (id < 16) console.log("Você não pode votar");

//   if (id == 16 && 17) console.log("Você pode votar");

//   if (id >= 18) console.log("Seu voto é obrigatório");

//   if (id >= 85) console.log("Você pode votar");
//   console.log(`Olá tenho ${id}, posso votar?`);
// }

var idade = 86;

function votar(idade) {
  if (votar < 16) {
    console.log(`Você não pode votar`);
  } else if (idade >= 16 && idade < 18) {
    console.log(`Você pode votar, mas não é obrigatório`);
  } else if (idade >= 18 && idade <= 85) {
    console.log(`Você deve votar`);
  } else if (idade >= 86) {
    console.log("Você pode votar, mas não é obrigatório");
  }
}
votar(idade);

console.log("");
console.log("");

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log("Você não pode votar");
      break;
    case idade >= 16 && idade < 18:
      console.log("Você pode votar, mas não é obrigatório");
      break;
    default:
      console.log("Você deve votar");
      break;
  }
}
votacao(20);
