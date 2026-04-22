function obterMaiorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ordenarCrescente(num1, num2, num3) {
    const arrayNumeros = [num1, num2, num3];
    return arrayNumeros.sort((a, b) => a - b);
}

function ehPalindromo(texto) {
    if (typeof texto !== 'string' || texto.trim() === '') return false;
    const textoLimpo = texto.replace(/\s+/g, '').toLowerCase();
    const textoInvertido = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoInvertido;
}

function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2 || palavra1.trim() === '' || palavra2.trim() === '') {
        return 'erro';
    }
    if (palavra1.includes(palavra2)) {
        return 'é um subconjunto';
    } else {
        return 'não é um subconjunto';
    }
}

function obterDiaDaSemana(dataBase) {
    const diasDaSemana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];

    if (typeof dataBase === 'string' && dataBase.includes('-')) {
        const partes = dataBase.split('-');
        const dataLocal = new Date(partes[0], partes[1] - 1, partes[2]);
        return diasDaSemana[dataLocal.getDay()];
    }

    const data = new Date(dataBase);
    if (isNaN(data.getTime())) {
        return 'Data inválida';
    }
    return diasDaSemana[data.getDay()];
}

function exibirResultado(idElemento, mensagem, sucesso = true) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensagem;
    elemento.className = 'result ' + (sucesso ? 'success' : 'error');
    elemento.style.display = 'block';
}

document.getElementById('btnMaior').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('maiorNum1').value);
    const n2 = parseFloat(document.getElementById('maiorNum2').value);
    const n3 = parseFloat(document.getElementById('maiorNum3').value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        exibirResultado('resMaior', 'Erro: Preencha todos os 3 campos numéricos.', false);
        return;
    }

    const maior = obterMaiorDeTres(n1, n2, n3);
    exibirResultado('resMaior', `O maior número é: ${maior}`);
});

document.getElementById('btnOrdem').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('ordemNum1').value);
    const n2 = parseFloat(document.getElementById('ordemNum2').value);
    const n3 = parseFloat(document.getElementById('ordemNum3').value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        exibirResultado('resOrdem', 'Erro: Preencha todos os 3 campos numéricos.', false);
        return;
    }

    const ordenados = ordenarCrescente(n1, n2, n3);
    exibirResultado('resOrdem', `Em ordem crescente: ${ordenados.join(', ')}`);
});

document.getElementById('btnPalindromo').addEventListener('click', () => {
    const texto = document.getElementById('palindromoStr').value;
    
    if (texto.trim() === '') {
        exibirResultado('resPalindromo', 'Erro: Digite uma palavra ou frase para verificar.', false);
        return;
    }

    const ehPalin = ehPalindromo(texto);
    if (ehPalin) {
        exibirResultado('resPalindromo', `Verdadeiro! "${texto}" é um palíndromo.`);
    } else {
        exibirResultado('resPalindromo', `Falso. "${texto}" não é um palíndromo.`, false);
    }
});

document.getElementById('btnSubconjunto').addEventListener('click', () => {
    const palavra1 = document.getElementById('subPalavra1').value;
    const palavra2 = document.getElementById('subPalavra2').value;

    const resultado = verificarSubconjunto(palavra1, palavra2);
    
    if (resultado === 'erro') {
        exibirResultado('resSubconjunto', 'Erro: Nenhuma palavra pode ser vazia.', false);
    } else if (resultado === 'é um subconjunto') {
        exibirResultado('resSubconjunto', `Resultado: "${palavra2}" ${resultado} de "${palavra1}".`);
    } else {
        exibirResultado('resSubconjunto', `Resultado: "${palavra2}" ${resultado} de "${palavra1}".`, false);
    }
});

document.getElementById('btnData').addEventListener('click', () => {
    const dataSelecionada = document.getElementById('dataInput').value;
    
    if (!dataSelecionada) {
        exibirResultado('resData', 'Erro: Por favor, selecione uma data no calendário.', false);
        return;
    }

    const diaDaSemana = obterDiaDaSemana(dataSelecionada);
    if (diaDaSemana === 'Data inválida') {
        exibirResultado('resData', diaDaSemana, false);
    } else {
         exibirResultado('resData', `O dia da semana da data selecionada é: ${diaDaSemana}`);
    }
});
