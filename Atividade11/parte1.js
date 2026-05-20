function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
}

Retangulo.prototype.calcularArea = function () {
  return this.base * this.altura;
};

function criarRetangulo(base, altura) {
  const retangulo = new Retangulo(base, altura);
  const area = retangulo.calcularArea();
  const mensagem = `Retângulo de base ${retangulo.base} e altura ${retangulo.altura} possui área igual a ${area}`;

  console.log("Base:", retangulo.base);
  console.log("Altura:", retangulo.altura);
  console.log("Área:", area);
  console.log(mensagem);

  return { retangulo, area, mensagem };
}
