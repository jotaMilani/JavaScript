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
