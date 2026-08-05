function validar() {
  var form = document.formularioPrincipal;
  var inputNome = form.elements['nome'];
  var inputEmail = form.elements['email'];
  var inputComentario = form.elements['comentario'];
  var radioPesquisa = form.elements['primeiraVez'];

  var valorNome = inputNome.value.trim();
  var valorEmail = inputEmail.value.trim();
  var valorComentario = inputComentario.value.trim();

  if (valorNome === "" || valorNome.length < 10) {
    alert("Erro no campo Nome:\nO nome não pode estar vazio e deve ter no mínimo 10 caracteres.");
    inputNome.focus();
    return false;
  }

  if (valorEmail === "" || valorEmail.indexOf("@") === -1 || valorEmail.indexOf(".") === -1) {
    alert("Erro no campo E-mail:\nPor favor, informe um endereço de e-mail válido.");
    inputEmail.focus();
    return false;
  }

  if (valorComentario === "" || valorComentario.length < 20) {
    alert("Erro no campo Comentário:\nO comentário não pode estar vazio e deve ter no mínimo 20 caracteres.");
    inputComentario.focus();
    return false;
  }

  var opcaoSelecionada = null;
  if (radioPesquisa) {
    for (var i = 0; i < radioPesquisa.length; i++) {
      if (radioPesquisa[i].checked) {
        opcaoSelecionada = radioPesquisa[i].value;
        break;
      }
    }
  }

  if (!opcaoSelecionada) {
    alert("Erro na Pesquisa:\nA seleção é obrigatória. Escolha 'Sim' ou 'Não' para a pergunta.");
    return false;
  }

  if (opcaoSelecionada === "Sim") {
    alert("Que bom que você voltou a visitar esta página!");
  } else if (opcaoSelecionada === "Não") {
    alert("Volte sempre à está página!");
  }

  return true;
}
