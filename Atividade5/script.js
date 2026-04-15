let participacoes = [];

function atualizarTela() {
    let divResultados = document.getElementById('results');
    let corpoTabela = document.querySelector('#dataTable tbody');
    let spanContador = document.getElementById('participantCount');
    let btnSalvar = document.getElementById('submitBtn');

    if (spanContador) {
        spanContador.innerText = participacoes.length;
    }

    if (participacoes.length === 0) {
        divResultados.innerHTML = '<p class="empty-state">Sem dados para analisar.</p>';
        corpoTabela.innerHTML = '<tr><td colspan="4" class="empty-state">Nenhum registro ainda</td></tr>';
        return;
    }

    let somaIdade = 0;
    let maiorIdade = 0;
    let menorIdade = 999;
    let qtdPessimo = 0;
    let qtdOtimoBom = 0;
    let homens = 0;
    let mulheres = 0;
    let outros = 0;

    for (let i = 0; i < participacoes.length; i++) {
        let p = participacoes[i];
        
        somaIdade += p.idade;
        
        if (p.idade > maiorIdade) {
            maiorIdade = p.idade;
        }
        if (p.idade < menorIdade) {
            menorIdade = p.idade;
        }

        if (p.opiniao === 1) qtdPessimo++;
        if (p.opiniao === 3 || p.opiniao === 4) qtdOtimoBom++;

        if (p.sexo === 'masculino') homens++;
        else if (p.sexo === 'feminino') mulheres++;
        else outros++;
    }

    let media = (somaIdade / participacoes.length).toFixed(2);
    let porcentagem = ((qtdOtimoBom / participacoes.length) * 100).toFixed(2);

    divResultados.innerHTML = `
        <div class="data-item"><strong>Média de Idade</strong><span>${media} anos</span></div>
        <div class="data-item"><strong>Mais Velho</strong><span>${maiorIdade} anos</span></div>
        <div class="data-item"><strong>Mais Novo</strong><span>${menorIdade} anos</span></div>
        <div class="data-item"><strong>Qtd. de Péssimo</strong><span>${qtdPessimo}</span></div>
        <div class="data-item"><strong>Ótimo/Bom (%)</strong><span>${porcentagem}%</span></div>
        <div class="data-item"><strong>Homens</strong><span>${homens}</span></div>
        <div class="data-item"><strong>Mulheres</strong><span>${mulheres}</span></div>
        <div class="data-item"><strong>Outros (Sexo)</strong><span>${outros}</span></div>
    `;

    corpoTabela.innerHTML = '';
    
    participacoes.forEach(function(p, index) {
        let txtOpiniao = '';
        if (p.opiniao === 1) txtOpiniao = 'Péssimo';
        else if (p.opiniao === 2) txtOpiniao = 'Regular';
        else if (p.opiniao === 3) txtOpiniao = 'Bom';
        else if (p.opiniao === 4) txtOpiniao = 'Ótimo';

        let linha = `<tr>
            <td>${index + 1}</td>
            <td>${p.idade}</td>
            <td style="text-transform: capitalize;">${p.sexo}</td>
            <td>${txtOpiniao} (${p.opiniao})</td>
        </tr>`;
        
        corpoTabela.innerHTML += linha;
    });

    if (participacoes.length >= 45) {
        btnSalvar.disabled = true;
        btnSalvar.innerText = 'Limite de 45 avaliações atingido';
        document.getElementById('idade').disabled = true;
        document.getElementById('sexo').disabled = true;
        document.getElementById('opiniao').disabled = true;
    }
}

let form = document.getElementById('surveyForm');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (participacoes.length >= 45) {
            return;
        }

        let inputIdade = document.getElementById('idade').value;
        let inputSexo = document.getElementById('sexo').value;
        let inputOpiniao = document.getElementById('opiniao').value;

        participacoes.push({
            idade: parseInt(inputIdade),
            sexo: inputSexo,
            opiniao: parseInt(inputOpiniao)
        });

        form.reset();
        document.getElementById('idade').focus();
        
        atualizarTela();
    });
}

atualizarTela();
