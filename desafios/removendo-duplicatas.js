function removerDuplicatas(array) {
  return [...new Set(array)];
}

let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log("Remover duplicatas:", novaListaSemDuplicatas);
