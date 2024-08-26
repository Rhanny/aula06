function maiorNumero(a, b) {
    if (a > b) {
        console.log(`O número ${a} é maior que ${b}.`);
    } else if (b > a) {
        console.log(`O número ${b} é maior que ${a}.`);
    } else {
        console.log("Os dois números são iguais.");
    }
}

// Exemplo de uso
maiorNumero(5, 2);  // "O número 5 é maior que 2."
maiorNumero(2, 5);  // "O número 5 é maior que 2."
maiorNumero(5, 5);  // "Os dois números são iguais."
