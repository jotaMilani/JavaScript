var anoNascimento = 2003;

if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003!`);

if (anoNascimento < 2003) console.log(`A pessoa nasceu antes de 2003!`);

if (anoNascimento == 2003) console.log(`A pessoa nasceu em 2003!`);

// function sinaleiro(cor) {
//   if (cor == "vermelho") console.log("pare");

//   if (cor == "amarelo") console.log("preste atenção");

//   if (cor == "verde") console.log("siga");
//   else console.log("qurebado");
// }
// sinaleiro("");

console.log("");
console.log("");
const login = "adm"; //digitado pelo usuário
var senha = "123456"; //digitado pelo usuário
//banco de dados
const loginUser = "adm"; //banco de dados
const senhaUser = "adm"; //banco de dados
if (login == loginUser || senha == senhaUser)
  //&& significa E  -- || significa OU
  console.log(`Acesso permitido!`);
else console.log(`Acesso negado!`);

var idade = 18;

if (idade <= 18) {
  console.log("entrou no if...");
  idade++, console.log("incrementei a idade...");
  console.log(`a nova idade é ${idade}`);
  console.log(`agora estou saindo do bloco de códigos if`);

  console.log(`Terminei!`);
}

//desvio condicional if incline (ternario)
var preco = 500;

var resultado = preco <=100 ? "tá barato" : "Vish tá caro"

console.log(resultado);  