class Conta {
  #nomeCorrentista;
  #banco;
  #numeroConta;
  #saldo;

  constructor(nomeCorrentista, banco, numeroConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  get nomeCorrentista() {
    return this.#nomeCorrentista;
  }

  set nomeCorrentista(valor) {
    this.#nomeCorrentista = valor;
  }

  get banco() {
    return this.#banco;
  }

  set banco(valor) {
    this.#banco = valor;
  }

  get numeroConta() {
    return this.#numeroConta;
  }

  set numeroConta(valor) {
    this.#numeroConta = valor;
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(valor) {
    this.#saldo = Number(valor);
  }

  exibirDados() {
    return {
      tipo: "Conta",
      nomeCorrentista: this.nomeCorrentista,
      banco: this.banco,
      numeroConta: this.numeroConta,
      saldo: this.saldo,
    };
  }
}

class Corrente extends Conta {
  #saldoEspecial;

  constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this.saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() {
    return this.#saldoEspecial;
  }

  set saldoEspecial(valor) {
    this.#saldoEspecial = Number(valor);
  }

  exibirDados() {
    return {
      ...super.exibirDados(),
      tipo: "Corrente",
      saldoEspecial: this.saldoEspecial,
    };
  }
}

class Poupanca extends Conta {
  #juros;
  #dataVencimento;

  constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this.juros = juros;
    this.dataVencimento = dataVencimento;
  }

  get juros() {
    return this.#juros;
  }

  set juros(valor) {
    this.#juros = Number(valor);
  }

  get dataVencimento() {
    return this.#dataVencimento;
  }

  set dataVencimento(valor) {
    this.#dataVencimento = valor;
  }

  exibirDados() {
    return {
      ...super.exibirDados(),
      tipo: "Poupanca",
      juros: this.juros,
      dataVencimento: this.dataVencimento,
    };
  }
}

function formatarConta(dados) {
  let texto = `${dados.tipo}\n`;
  texto += `Nome: ${dados.nomeCorrentista}\n`;
  texto += `Banco: ${dados.banco}\n`;
  texto += `Conta: ${dados.numeroConta}\n`;
  texto += `Saldo: R$ ${dados.saldo.toFixed(2)}`;

  if (dados.tipo === "Corrente") {
    texto += `\nSaldo especial: R$ ${dados.saldoEspecial.toFixed(2)}`;
  }

  if (dados.tipo === "Poupanca") {
    texto += `\nJuros: ${dados.juros}%`;
    texto += `\nVencimento: ${dados.dataVencimento}`;
  }

  return texto;
}

function logConta(dados) {
  console.log(`--- ${dados.tipo} ---`);
  Object.entries(dados).forEach(([chave, valor]) => {
    if (chave !== "tipo") console.log(`${chave}:`, valor);
  });
}
