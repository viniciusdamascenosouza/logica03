function comprar() {
  let tipo = document.querySelector("#tipo-ingresso");
  let quantidade = parseInt(document.querySelector("#qtd").value);

  if (tipo.value == "pista") {
    comprarPista(quantidade);
  } else if (tipo.value == "superior") {
    comprarSuperior(quantidade);
  } else {
    comprarInferior(quantidade);
  }
}

function comprarPista(quantidade) {
  let quantidadePista = parseInt(
    document.querySelector("#qtd-pista").textContent
  );

  if (quantidade > quantidadePista) {
    alert("Quantidade indisponível!");
  } else {
    quantidadePista = quantidadePista - quantidade;
    document.querySelector("#qtd-pista").textContent = quantidadePista;
    alert("Compra realizada com sucesso!");
  }
}

function comprarSuperior(quantidade) {
  let quantidadeSuperior = parseInt(
    document.querySelector("#qtd-superior").textContent
  );

  if (quantidade > quantidadeSuperior) {
    alert("Quantidade indisponível!");
  } else {
    quantidadeSuperior = quantidadeSuperior - quantidade;
    document.querySelector("#qtd-superior").textContent = quantidadeSuperior;
    alert("Compra realizada com sucesso!");
  }
}

function comprarInferior(quantidade) {
  let quantidadeInferior = parseInt(
    document.querySelector("#qtd-inferior").textContent
  );

  if (quantidade > quantidadeInferior) {
    alert("Quantidade indisponível!");
  } else {
    quantidadeInferior = quantidadeInferior - quantidade;
    document.querySelector("#qtd-inferior").textContent = quantidadeInferior;
    alert("Compra realizada com sucesso!");
  }
}
