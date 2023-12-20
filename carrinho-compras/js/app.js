function adicionar() {
  let produto = document.getElementById("produto").value;
  let nome = produto.split("-")[0];
  let valorUni = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let subtotal = valorUni * quantidade;

  alert(nome);
  alert(subtotal);
}
