function alterarStatus(id) {
  const gameClicado = document.getElementById(`game-${id}`);
  const imagem = gameClicado.querySelector(".dashboard__item__img");
  const nomeGame = gameClicado.querySelector(".dashboard__item__name");
  const botao = gameClicado.querySelector(".dashboard__item__button");

  alert(nomeGame.textContent);
}
