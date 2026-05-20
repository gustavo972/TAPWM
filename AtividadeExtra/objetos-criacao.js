function obterDados(tecnica) {
  return {
    nome: prompt(`${tecnica} — Nome:`),
    idade: Number(prompt(`${tecnica} — Idade:`)),
    hobby: prompt(`${tecnica} — Hobby:`),
  };
}

function Pessoa(nome, idade, hobby) {
  this.nome = nome;
  this.idade = idade;
  this.hobby = hobby;
}

Pessoa.prototype.apresentar = function () {
  return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
};

class PessoaClasse {
  constructor(nome, idade, hobby) {
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  }
}

const prototipoPessoa = {
  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  },
};

const dados1 = obterDados("pessoa1 — Objeto literal");
const pessoa1 = {
  nome: dados1.nome,
  idade: dados1.idade,
  hobby: dados1.hobby,
  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  },
};

const dados2 = obterDados("pessoa2 — new Object()");
const pessoa2 = new Object();
pessoa2.nome = dados2.nome;
pessoa2.idade = dados2.idade;
pessoa2.hobby = dados2.hobby;
pessoa2.apresentar = function () {
  return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
};

const dados3 = obterDados("pessoa3 — Função construtora");
const pessoa3 = new Pessoa(dados3.nome, dados3.idade, dados3.hobby);

const dados4 = obterDados("pessoa4 — Classe (class)");
const pessoa4 = new PessoaClasse(dados4.nome, dados4.idade, dados4.hobby);

const dados5 = obterDados("pessoa5 — Object.create()");
const pessoa5 = Object.create(prototipoPessoa);
pessoa5.nome = dados5.nome;
pessoa5.idade = dados5.idade;
pessoa5.hobby = dados5.hobby;

const pessoas = [
  { objeto: "pessoa1", tecnica: "Objeto literal", pessoa: pessoa1 },
  { objeto: "pessoa2", tecnica: "new Object()", pessoa: pessoa2 },
  { objeto: "pessoa3", tecnica: "Função construtora", pessoa: pessoa3 },
  { objeto: "pessoa4", tecnica: "Classe (class)", pessoa: pessoa4 },
  { objeto: "pessoa5", tecnica: "Object.create()", pessoa: pessoa5 },
];

pessoas.forEach(({ objeto, tecnica, pessoa }) => {
  const frase = pessoa.apresentar();
  console.log(frase);
  alert(`${objeto} — ${tecnica}\n\n${frase}`);
});
