const cursos = {
  ads: {
    nome: "Análise e Desenvolvimento de Sistemas (ADS)",
    duracao: "3 anos (6 semestres)",
    modalidade: "Presencial",
    turno: "Tarde / Noite",
    areaAtuacao: "Desenvolvimento de software, análise de sistemas, banco de dados, arquitetura de software e gestão de TI.",
    descricao: "Capacita o profissional para analisar, projetar, documentar, especificar, testar, implantar e manter sistemas computacionais de informação.",
    linkOficial: "https://www.fatecsorocaba.edu.br/curso-ads.asp"
  },
  dsm: {
    nome: "Desenvolvimento de Software Multiplataforma (DSM)",
    duracao: "3 anos (6 semestres)",
    modalidade: "Presencial / Híbrida",
    turno: "Manhã / Noite",
    areaAtuacao: "Desenvolvimento web, aplicações mobile, computação em nuvem (Cloud), IoT e Inteligência Artificial.",
    descricao: "Forma especialistas no projeto e desenvolvimento de soluções de software que rodam em múltiplas plataformas (Web, Mobile, Desktop e Nuvem).",
    linkOficial: "https://www.fatecsorocaba.edu.br/curso-dsm.asp"
  },
  bd: {
    nome: "Banco de Dados (BD)",
    duracao: "3 anos (6 semestres)",
    modalidade: "Presencial",
    turno: "Noite",
    areaAtuacao: "Administração de Banco de Dados (DBA), Engenharia de Dados, Ciência de Dados, BI e Segurança da Informação.",
    descricao: "Focado na concepção, implementação, administração e otimização de bancos de dados relacionais e Não-Relacionais (NoSQL), além de inteligência de negócios.",
    linkOficial: "https://www.fatecsorocaba.edu.br/curso-bd.asp"
  },
  ge: {
    nome: "Gestão Empresarial (GE)",
    duracao: "3 anos (6 semestres)",
    modalidade: "Presencial / EaD",
    turno: "Manhã / Noite / EAD",
    areaAtuacao: "Administração geral, gestão financeira, recursos humanos, marketing, logística e planejamento estratégico.",
    descricao: "Desenvolve competências para gerenciar processos organizacionais, otimizar recursos e planejar negócios com visão sistêmica e empreendedora.",
    linkOficial: "https://www.fatecsorocaba.edu.br/curso-ge.asp"
  },
  log: {
    nome: "Logística (LOG)",
    duracao: "3 anos (6 semestres)",
    modalidade: "Presencial",
    turno: "Tarde / Noite",
    areaAtuacao: "Gestão de cadeias de suprimentos (Supply Chain), transporte, armazenagem, distribuição e comércio exterior.",
    descricao: "Prepara o profissional para planejar e coordenar a movimentação e armazenamento de materiais, reduzindo custos e aumentando a eficiência logística.",
    linkOficial: "https://www.fatecsorocaba.edu.br/curso-log.asp"
  },
  fm: {
    nome: "Fabricação Mecânica (FM)",
    duracao: "3 anos (6 semestres)",
    modalidade: "Presencial",
    turno: "Tarde / Noite",
    areaAtuacao: "Indústria metalmecânica, processos de usinagem, controle de qualidade e planejamento de produção industrial.",
    descricao: "Capacita na elaboração e gestão de processos de fabricação mecânica, seleção de materiais e otimização de linhas de produção industrial.",
    linkOficial: "https://www.fatecsorocaba.edu.br/curso-fm.asp"
  },
  pm: {
    nome: "Projetos Mecânicos (PM)",
    duracao: "3 anos (6 semestres)",
    modalidade: "Presencial",
    turno: "Manhã / Tarde",
    areaAtuacao: "Desenvolvimento de produtos, modelagem CAD 3D, projetos de máquinas, ferramentaria e simulação estrutural.",
    descricao: "Forma profissionais capazes de conceber e detalhar projetos de sistemas mecânicos utilizando ferramentas modernas de computação gráfica e engenharia.",
    linkOficial: "https://www.fatecsorocaba.edu.br/curso-pm.asp"
  },
  pol: {
    nome: "Polímeros (POL)",
    duracao: "3 anos (6 semestres)",
    modalidade: "Presencial",
    turno: "Noite",
    areaAtuacao: "Indústria plástica, desenvolvimento de novos materiais poliméricos, reciclagem e processos de moldagem.",
    descricao: "Desenvolve competências no gerenciamento de processos de transformação de plásticos e borracha, bem como na formulação e testes de materiais.",
    linkOficial: "https://www.fatecsorocaba.edu.br/curso-pol.asp"
  },
  sb: {
    nome: "Sistemas Biomédicos (SB)",
    duracao: "3 anos (6 semestres)",
    modalidade: "Presencial",
    turno: "Manhã",
    areaAtuacao: "Engenharia clínica, hospitais, manutenção e calibração de equipamentos médico-hospitalares de alta tecnologia.",
    descricao: "Prepara o especialista para gerenciar, instalar, calibrar e manter equipamentos eletrônicos e de diagnóstico em ambientes de saúde e medicina.",
    linkOficial: "https://www.fatecsorocaba.edu.br/curso-sb.asp"
  }
};

function tratarSelecaoCurso(selectElement) {
  const chaveCurso = selectElement.value;
  if (!chaveCurso || !cursos[chaveCurso]) return;

  const curso = cursos[chaveCurso];
  const mensagemConfirmacao = `Deseja abrir informações sobre o curso de ${curso.nome}?`;

  if (confirm(mensagemConfirmacao)) {
    abrirJanelaCurso(curso);
  }

  selectElement.value = "";
}

function abrirJanelaCurso(curso) {
  const largura = 600;
  const altura = 300;
  const esquerda = (screen.width - largura) / 2;
  const topo = (screen.height - altura) / 2;

  const popup = window.open(
    '',
    '_blank',
    `width=${largura},height=${altura},top=${topo},left=${esquerda},scrollbars=yes,resizable=yes`
  );

  if (!popup) {
    alert("O navegador bloqueou a abertura da janela. Por favor, permita pop-ups para visualizar os detalhes do curso.");
    return;
  }

  const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>${curso.nome} - Fatec Sorocaba</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #ffffff;
      color: #0f172a;
      padding: 1.25rem;
      line-height: 1.45;
      font-size: 0.85rem;
    }
    .header {
      border-bottom: 2px solid #b91c1c;
      padding-bottom: 0.5rem;
      margin-bottom: 0.75rem;
    }
    h2 {
      font-size: 1.1rem;
      color: #b91c1c;
      font-weight: 700;
    }
    .tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 0.35rem;
    }
    .tag {
      background-color: #f1f5f9;
      color: #334155;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .section {
      margin-bottom: 0.6rem;
    }
    .section-title {
      font-weight: 700;
      color: #334155;
      font-size: 0.775rem;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      display: block;
      margin-bottom: 0.15rem;
    }
    p {
      color: #475569;
      font-size: 0.825rem;
    }
    .footer-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.85rem;
      padding-top: 0.6rem;
      border-top: 1px solid #e2e8f0;
    }
    .btn-link {
      background-color: #b91c1c;
      color: #ffffff;
      text-decoration: none;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      font-size: 0.775rem;
      font-weight: 600;
      display: inline-block;
    }
    .btn-link:hover {
      background-color: #991b1b;
    }
    .btn-close {
      background-color: #e2e8f0;
      color: #475569;
      border: none;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      font-size: 0.775rem;
      font-weight: 600;
      cursor: pointer;
    }
    .btn-close:hover {
      background-color: #cbd5e1;
    }
  </style>
</head>
<body>
  <div class="header">
    <h2>${curso.nome}</h2>
    <div class="tags">
      <span class="tag">⏱️ ${curso.duracao}</span>
      <span class="tag">🎓 ${curso.modalidade}</span>
      <span class="tag">🕒 ${curso.turno}</span>
    </div>
  </div>

  <div class="section">
    <span class="section-title">Descrição</span>
    <p>${curso.descricao}</p>
  </div>

  <div class="section">
    <span class="section-title">Área de Atuação</span>
    <p>${curso.areaAtuacao}</p>
  </div>

  <div class="footer-actions">
    <a href="${curso.linkOficial}" target="_blank" class="btn-link">Página Oficial Fatec</a>
    <button onclick="window.close()" class="btn-close">Fechar Janela</button>
  </div>
</body>
</html>`;

  popup.document.open();
  popup.document.write(htmlContent);
  popup.document.close();
}
