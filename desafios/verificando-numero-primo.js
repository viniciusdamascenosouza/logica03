// Desafio: Verificar se um número é primo
function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Teste
console.log(ehPrimo(7)); // Saída: true (7 é primo)
