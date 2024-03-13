class Aluno {
  constructor(nome, ra, dataNasc, curso) {
    this.nome = nome;
    this.ra = ra;
    this.dataNasc = dataNasc;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.dataNasc;
  }
  registro() {
    console.log(`Olá, meu nome é ${
      this.nome
    }, tenho ${this.calcularIdade()} anos, 
faço o curso de ${this.curso} e meu ra é ${this.ra}`);
  }
}
var aluno = new Aluno("Paulo", 3042, 2000, "Filosofia");

aluno.registro();

// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51
console.log("");
console.log("");

class sorvete {
  constructor(sabor, preço, tamanho) {
    this.sabor = sabor;
    this.preço = preço;
    this.tamanho = tamanho;
  }
  getPreco() {
    return this.preco;
  }
  sorvete() {
    console.log(
      `o sorvete de ${this.sabor}, do tamanho${this.tamanho}, é ${this.preço} reais.`
    );
  }

  setpreco(novoPreco) {
    this.preco = novoPreco;
  }
}
var sorvMor = new sorvete("morango", 12, " G");
sorvMor.sorvete();

console.log("");
console.log("");

var sorvChoc = new sorvete("chocolate", 4, " P ");
sorvChoc.sorvete();

console.log("");
console.log("");

var sorvMel = new sorvete("melancia", 8, "  M ");
sorvMel.sorvete();

console.log("");
console.log("");

sorvMor.setpreco(10.51);
sorvMor.sorvete();

console.log("");
console.log("---------------------------------------------------------------");

//testando função fornecida pelo gemini

function compararStrings(str1, str2) {
  // Converte ambas as strings para minúsculas
  const str1Minusculas = str1.toLowerCase();
  const str2Minusculas = str2.toLowerCase();

  // Compara as strings minúsculas
  return str1Minusculas === str2Minusculas;
}

// Exemplo de uso
const strA = "Olá Mundo!";
const strB = "olá mundo!";

const strC = "Olá Mundinho!";
const strD = "olá mundo!";

const resultado = compararStrings(strA, strB);
const resultado2 = compararStrings(strC, strD);

if (resultado) {
  console.log("As strings são iguais, ignorando maiúsculas e minúsculas.");
} else {
  console.log("As strings são diferentes.");
}
//---------------
if (resultado2) {
  console.log("As strings são iguais, ignorando maiúsculas e minúsculas.");
} else {
  console.log("As strings são diferentes.");
}
//Explicação:

//A função compararStrings recebe duas strings como parâmetros.
//As strings são convertidas para minúsculas usando o método toLowerCase().
//As strings minúsculas são comparadas usando o operador de igualdade estrita (===).
//O resultado da comparação é retornado.
console.log("");
console.log(
  "-------------------------------------------------------------------------------"
);

function extrairNumeros(str) {
  // Expressão regular para encontrar números
  const regex = /\d+/g;

  // Encontra todos os números na string
  const numeros = str.match(regex);

  // Retorna os números como uma lista
  return numeros;
}

// Exemplo de uso
const str = "Olá Mundo 1234! 5678";

const numeros = extrairNumeros(str);

console.log(numeros); // ["1234", "5678"]

//Explicação:

//A função extrairNumeros recebe uma string como parâmetro.
//A expressão regular /\d+/g é utilizada para encontrar todos os números na string.
//O método match() é usado para encontrar todas as ocorrências da expressão regular na string.
//Os números encontrados são retornados como uma lista.
console.log("");
console.log(
  "-------------------------------------------------------------------------------");

  function inverterFrase(frase) {
    // Separa a frase em palavras
    const palavras = frase.split(" ");
  
    // Inverte a ordem das palavras
    palavras.reverse();
  
    // Retorna a frase com a ordem das palavras invertida
    return palavras.join(" ");
  }
  
  // Exemplo de uso
  const frase = "Olá Mundo!";
  
  const fraseInvertida = inverterFrase(frase);
  
  console.log(fraseInvertida); // "!odnuM aloH"
  
  //Explicação:

//A função inverterFrase recebe uma frase como parâmetro.
//A frase é dividida em palavras usando o método split(" ").
//A ordem das palavras é invertida usando o método reverse().
//A frase com a ordem das palavras invertida é retornada usando o método join(" ").