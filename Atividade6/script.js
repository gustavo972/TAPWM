document.getElementById('verifyButton').addEventListener('click', function() {
    const inputA = document.getElementById('sideA').value;
    const inputB = document.getElementById('sideB').value;
    const inputC = document.getElementById('sideC').value;

    const resultContainer = document.getElementById('resultContainer');

    resultContainer.classList.remove('hidden', 'success', 'error');

    if (inputA.trim() === '' || inputB.trim() === '' || inputC.trim() === '') {
        showResult('Erro de Validação', 'Por favor, preencha todos os campos.', 'error');
        return;
    }

    const a = parseFloat(inputA);
    const b = parseFloat(inputB);
    const c = parseFloat(inputC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        showResult('Erro de Validação', 'Por favor, insira apenas valores numéricos válidos.', 'error');
        return;
    }

    if (a <= 0 || b <= 0 || c <= 0) {
        showResult('Erro de Validação', 'Os lados do triângulo devem ser maiores que zero.', 'error');
        return;
    }

    const isTriangle = (
        Math.abs(b - c) < a && a < (b + c) &&
        Math.abs(a - c) < b && b < (a + c) &&
        Math.abs(a - b) < c && c < (a + b)
    );

    if (!isTriangle) {
        showResult('Não é um Triângulo', 'Os valores inseridos não satisfazem a condição de existência de um triângulo.', 'error');
        return;
    }

    let tipo = '';
    
    if (a === b && b === c) {
        tipo = 'Equilátero';
        showResult(`Triângulo ${tipo}`, 'Possui três lados iguais.', 'success');
    } else if (a === b || a === c || b === c) {
        tipo = 'Isósceles';
        showResult(`Triângulo ${tipo}`, 'Possui dois lados iguais.', 'success');
    } else {
        tipo = 'Escaleno';
        showResult(`Triângulo ${tipo}`, 'Possui três lados diferentes.', 'success');
    }
});

function showResult(title, message, type) {
    const resultContainer = document.getElementById('resultContainer');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');

    resultTitle.textContent = title;
    resultMessage.textContent = message;
    
    resultContainer.classList.add(type);
    resultContainer.classList.remove('hidden');
}
