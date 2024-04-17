const readline = require('readline-sync');

function ordenarDecrescente(valores) {
    return valores.sort((a, b) => b - a);
}

function main() {
    let valores = [];

    for (let i = 0; i < 4; i++) {
        const valor = parseInt(readline.question("Digite um valor inteiro: "));
        valores.push(valor);
    }

    valores = ordenarDecrescente(valores);

    console.log("Valores em ordem decrescente:");
    for (const valor of valores) {
        console.log(valor);
    }
}

main();