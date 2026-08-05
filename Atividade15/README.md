# Atividade 15 - Guia de Cursos Fatec Sorocaba

Aplicação web desenvolvida para a disciplina de Técnicas Avançadas de Programação Web e Mobile (TAPWM). Permite selecionar um curso de graduação da Fatec Sorocaba a partir de uma caixa de seleção (`<select>`), solicitar confirmação do usuário e exibir as informações detalhadas do curso escolhido em uma janela pop-up customizada.

---

## 📌 Descrição da Atividade

A atividade consiste na implementação de uma interface interativa com caixa de seleção de cursos. Ao alterar o valor selecionado (evento `onchange`), a aplicação aciona uma caixa de diálogo nativa `confirm()`. Se o usuário confirmar a ação ("OK"), uma nova janela com dimensões de 600x300 pixels é aberta via `window.open()` exibindo detalhes sobre duração, modalidade, turno, área de atuação, descrição e link para o site oficial da Fatec Sorocaba.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página principal e do pop-up dinâmico.
- **CSS3:** Estilização minimalista e responsiva (Flexbox, custom select e tipografia Inter).
- **JavaScript (Vanilla JS):** Manipulação do DOM, tratamento do evento `onchange`, caixas de diálogo `confirm()` e abertura de janelas via `window.open()`.

---

## 📁 Estrutura do Projeto

```
Atividade15/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

---

## ⚙️ Funcionalidades Implementadas

1. **Caixa de Seleção de Cursos (`<select>`):**
   - Lista completa com os 9 cursos da Fatec Sorocaba (ADS, DSM, BD, GE, LOG, FM, PM, POL, SB).
2. **Confirmação Prévia (`confirm()`):**
   - Pergunta interativamente: *"Deseja abrir informações sobre o curso de [Nome do Curso]?"*.
   - Se o usuário clicar em "Cancelar", a ação é abortada e a caixa de seleção é resetada.
3. **Abertura de Janela Pop-up (`window.open()`):**
   - Pop-up centralizada com dimensões fixadas em 600x300 pixels.
   - Renderização limpa com informações detalhadas e botão para fechar a janela.
4. **Mapeamento Estruturado de Dados:**
   - Dados dos cursos armazenados em um objeto JavaScript (`const cursos = { ... }`), evitando encadeamentos excessivos de `if/else`.

---

## 🚀 Como Executar

1. Clone ou baixe o repositório.
2. Navegue até a pasta `Atividade15/`.
3. Abra o arquivo `index.html` em qualquer navegador web moderno.
4. Selecione qualquer curso na caixa de seleção e confirme a abertura do pop-up.
