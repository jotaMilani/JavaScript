// //abstração - abstraindo as características mais importantes e descartando detalhes irrelevantes!!

// // class Pet {
// //   constructor(nome, idade, tipo) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipo = tipo;
// //   }
// //   alimentar() {
// //     console.log(`${this.nome} foi alimentado!`);
// //   }
// // }
// // const meuPet = new Pet("Lewandowski", 6, "Cachorro");

// // console.log(
// //   `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos!`
// // );

// // meuPet.alimentar();

// // console.log("----------HERANÇA------------");
// // class Animal {
// //   constructor(nome, idade, tipoAlimentacao) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipoAlimentacao = tipoAlimentacao;
// //   }
// //   alimentar() {
// //     console.log(`O animal ${this.nome} foi alimentado`);
// //   }
// //   emitirSom() {
// //     console.log(`Barulho padrão de animal!`);
// //   }
// // }
// // class cachorro extends Animal {
// //   alimentar() {
// //     console.log(`o cachorro ${this.nome} foi alimentado`);
// //   }
// //   emitirSom() {
// //     console.log(`uauau`);
// //   }
// // }
// // const pet = new Animal("Cz", 10, "Comida espacial");
// // const meuCachorro = new cachorro("Roben", 6, "Ração");

// // pet.alimentar();
// // pet.emitirSom();
// // console.log("");
// // meuCachorro.alimentar();
// // meuCachorro.emitirSom();
// // console.log("-----------encapsulamento------------");

// // class Petzinho {
// //   constructor(nome, idade, tipo) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipo = tipo;
// //   }
// //   getNome() {
// //     return this.nome;
// //   }
// //   setNome(novoNome) {
// //     this.nome = novoNome;
// //   }
// // }
// // const novoPetzinho = new Petzinho("Bobby", 4, "cachorro");

// // console.log(novoPetzinho.getNome()); //Bobby
// // novoPetzinho.setNome("Nico");
// // console.log(novoPetzinho.getNome()); //Nico

// // console.log("--------------------Polimorfismo--------------------");
// // class Animal {
// //   constructor(nome) {
// //     this.nome = nome;
// //   }

// //   fazerBarulho() {
// //     console.log("O animal faz um barulho genérico.");
// //   }
// // }

// console.log("--------------------Polimorfismo--------------------");
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }

// class Gato extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }

// // Exemplo de uso
// const animais = [
//   new Cachorro("Rex"),
//   new Gato("Mia"),
//   new Animal("Bob"), // Animal genérico
// ];

// for (const animal of animais) {
//   animal.fazerBarulho();
// }

console.log("-------exemplos-------");
//criando uma classe Retângulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }
  obterArea() {
    return this.comprimento * this.largura;
  }
  obterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  setComprimento(novoComprimento) {
    this.comprimento = novoComprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}

//Criando um objeto do tipo Retângulo

var ret = new Retangulo(10, 15);

function displayRet(retangulo) {
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`);
  console.log(`largura = ${retangulo.largura}`);
  console.log(`área = ${retangulo.obterArea()}`);
  console.log(`perímetro = ${retangulo.obterPerimetro()}`);
}
displayRet(ret);
ret.setComprimento(20);
displayRet(ret);
ret.setLargura(20);
displayRet(ret);
