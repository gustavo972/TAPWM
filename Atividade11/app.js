function executarParte1() {
  const base = Number(prompt("Parte 1 — Base do retângulo (x):", "10"));
  const altura = Number(prompt("Parte 1 — Altura do retângulo (y):", "5"));

  const { retangulo, area, mensagem } = criarRetangulo(base, altura);

  alert(
    `Base: ${retangulo.base}\n` +
    `Altura: ${retangulo.altura}\n` +
    `Área: ${area}\n\n` +
    mensagem
  );
}

function executarParte2() {
  alert("Parte 2 — Conta Corrente");

  const contaCorrente = new Corrente(
    prompt("Nome do correntista:", "Maria Silva"),
    prompt("Banco:", "Banco do Brasil"),
    prompt("Número da conta:", "12345-6"),
    prompt("Saldo:", "1500"),
    prompt("Saldo especial:", "500")
  );

  const dadosCorrente = contaCorrente.exibirDados();
  logConta(dadosCorrente);
  alert(formatarConta(dadosCorrente));

  alert("Parte 2 — Conta Poupança");

  const contaPoupanca = new Poupanca(
    prompt("Nome do correntista:", "João Santos"),
    prompt("Banco:", "Caixa Econômica"),
    prompt("Número da conta:", "98765-4"),
    prompt("Saldo:", "8000"),
    prompt("Juros (%):", "0.5"),
    prompt("Data de vencimento (AAAA-MM-DD):", "2026-12-31")
  );

  const dadosPoupanca = contaPoupanca.exibirDados();
  logConta(dadosPoupanca);
  alert(formatarConta(dadosPoupanca));
}

executarParte1();
executarParte2();
