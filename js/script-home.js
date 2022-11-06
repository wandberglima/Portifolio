var paginaAtual = document.getElementById("select").value;
var mensagem = document.getElementById("mensagem");
var passo = document.getElementById("passo");
var qualMetodo = true;

function mudaPagina() {
  const pagina = document.getElementById("select").value;
  if (pagina !== paginaAtual) {
    location.href = "index2.html";
  }
}