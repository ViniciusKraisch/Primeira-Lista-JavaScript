function calcularPreco(sabor) {
    switch (sabor) {
        case 'a':
            return 1.50;
        case 'b':
            return 2.50;
        case 'c':
            return 2.50;
        case 'd':
            return 3.20;
        case 'e':
            return 3.40;
        case 'f':
            return 3.00;
        case 'g':
            return 3.60;
        case 'h':
            return 4.00;
        case 'i':
            return 5.00;
        default:
            return 'Sabor inválido';
    }
}

function exibirPreco(saborSelecionado) {
    const preco = calcularPreco(saborSelecionado.toLowerCase());
    if (typeof preco === 'number') {
        console.log(`O preço do picolé é R$ ${preco.toFixed(2)}`);
    } else {
        console.log(preco);
    }
}

