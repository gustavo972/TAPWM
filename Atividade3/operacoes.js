let numero1 = parseFloat(prompt("Informe o primeiro número:"));
let numero2 = parseFloat(prompt("Informe o segundo número:"));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;

let divisao;
let resto;

if (numero2 === 0) {
    divisao = "Erro: Divisão por zero não é permitida.";
    resto = "Erro: Divisão por zero não é permitida.";
} else {
    divisao = numero1 / numero2;
    resto = numero1 % numero2;
}

let mensagem = "Resultados das Operações:\n\n";
mensagem += "Soma: " + soma + "\n";
mensagem += "Subtração: " + subtracao + "\n";
mensagem += "Multiplicação: " + multiplicacao + "\n";
mensagem += "Divisão: " + divisao + "\n";
mensagem += "Resto da divisão: " + resto;

alert(mensagem);
