function comprar() {
  let tipo = document.querySelector("#tipo-ingresso");
  let quantidade = parseInt(document.querySelector("#qtd").value);

  if (tipo.value == "pista") {
    comprarPista(quantidade);
  }
}

function comprarPista(quantidade) {
  let quantidadePista = parseInt(document.querySelector("#qtd-pista").textContent);

  if (quantidade > quantidadePista) {
    alert("Quantidade indisponível!");
  } else {
    quantidadePista = quantidadePista - quantidade;
    document.querySelector("#qtd-pista").textContent = quantidadePista;
    alert("Compra realizada com sucesso!");
  }
}
