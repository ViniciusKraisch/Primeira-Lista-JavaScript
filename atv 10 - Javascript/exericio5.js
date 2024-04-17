function ImparPar(number) {
    return number % 2 === 0;
}

function transformNumber(number) {
    if (isEven(number)) {
        // Se for par, transforma em ímpar adicionando 1
        return number + 1;
    } else {
        // Se for ímpar, transforma em par subtraindo 1
        return number - 1;
    }
}

let inputNumber = parseInt(prompt("Digite um número:"));

let transformedNumber = transformNumber(inputNumber);
console.log("O número transformado é: " + transformedNumber);