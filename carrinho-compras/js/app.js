let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
let campoTotal = document.querySelector("#valor-total");
campoTotal.innerHTML = "";

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nome = produto.split("-")[0];
  let valorUni = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let preco = valorUni * quantidade;

  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nome}<span class="texto-azul"> R$${valorUni}</span>
        </section>
    </section>`;

  document.getElementById("quantidade").value = "";
  totalGeral = totalGeral + preco;
  campoTotal.textContent = `R$ ${totalGeral}`;
}

function limpar() {
  let totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  let campoTotal = document.querySelector("#valor-total");
  campoTotal.innerHTML = "";
}
