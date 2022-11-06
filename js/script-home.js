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

const metodo = (value) => {
  if (value === "Codificar") {
    document.getElementById("botao").innerHTML = "Codificar Mensagem!";
    qualMetodo = true;
  } else {
    document.getElementById("botao").innerHTML = "Decodificar Mensagem!";
    qualMetodo = false;
  }
};

const usarMetodo = (mensagem, passo) => {
  if (passo > 39 || passo < 0) {
    alert("O passo deve ser maior ou igual a 0 e menor que 39!");
  } else {
    if (qualMetodo) {
      codificar(mensagem, passo);
    } else {
      decodificar(mensagem, passo);
    }
  }
};

const codificar = (mensagem, passo) => {
  let mensagemCodificada = "";
  for (let i = 0; i < mensagem.length; i++) {
    const indiceLetra = alfabeto.indexOf(mensagem[i].toUpperCase());
    if (indiceLetra !== -1) {
      const validaIndice =
        indiceLetra + passo > 38
          ? indiceLetra + passo - 39
          : indiceLetra + passo;
      mensagemCodificada += alfabeto[validaIndice];
    } else {
      mensagemCodificada += mensagem[i];
    }
  }
  document.getElementById("resultado").value = mensagemCodificada;
};

const decodificar = (mensagem, passo) => {
  let mensagemCodificada = "";
  for (let i = 0; i < mensagem.length; i++) {
    const indiceLetra = alfabeto.indexOf(mensagem[i].toUpperCase());
    if (indiceLetra !== -1) {
      const validaIndice =
        indiceLetra - passo < 0
          ? indiceLetra - passo + 39
          : indiceLetra - passo;
      mensagemCodificada += alfabeto[validaIndice];
    } else {
      mensagemCodificada += mensagem[i];
    }
  }
  document.getElementById("resultado").value = mensagemCodificada;
};

var alfabeto = [
  "A",
  "Á",
  "Â",
  "Ã",
  "À",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "É",
  "Ê",
  "F",
  "G",
  "H",
  "I",
  "Í",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ó",
  "Õ",
  "Ô",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "Ú",
  "Ü",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];