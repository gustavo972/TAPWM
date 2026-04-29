function processarTresNumeros(num1, num2, num3) {
    const soma = num1 + num2 + num3;
    const quadradoPrimeiro = num1 * num1;
    const quadradoSegundo = num2 * num2;
    
    return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoPrimeiro} e o quadrado do segundo é: ${quadradoSegundo}`;
}

function exercicio1(arrNumeros) {
    if (!Array.isArray(arrNumeros) || arrNumeros.length !== 3) {
        return "Erro: O argumento deve ser um array com exatamente 3 números.";
    }

    return processarTresNumeros.apply(null, arrNumeros);
}

function exercicio2(arrLetras) {
    if (!Array.isArray(arrLetras) || arrLetras.length !== 5) {
        return "Erro: O argumento deve ser um array com exatamente 5 letras.";
    }

    const palavrasGeradas = [];

    while (palavrasGeradas.length < 10) {
        const letrasEmbaralhadas = [...arrLetras].sort(() => Math.random() - 0.5);
        const novaPalavra = letrasEmbaralhadas.join('');
        
        if (!palavrasGeradas.includes(novaPalavra)) {
            Array.prototype.push.apply(palavrasGeradas, [novaPalavra]);
        }
    }

    return palavrasGeradas;
}

console.log("=== Teste Exercício 1 ===");
const meusNumeros = [3, 4, 5];
console.log("Entrada:", meusNumeros);
console.log("Saída:", exercicio1(meusNumeros));

console.log("\n=== Teste Exercício 2 ===");
const minhasLetras = ['A', 'B', 'C', 'D', 'E'];
console.log("Entrada:", minhasLetras);
const resultadoPalavras = exercicio2(minhasLetras);
console.log(`Saída (10 palavras distintas):`);
console.table(resultadoPalavras);
