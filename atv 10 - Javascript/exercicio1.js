function somarNumeros() {
    let soma = 0;
    let continuar = true;
    
    while (continuar) {
        let numero = parseFloat(prompt("Digite um numero (ou digite '0' para encerrar):"));

        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert ("Por favor, digite um número válido.");
        }

        continuar = confirm("Deseja adicionar mais numeros?");
        {
            alert ("A sina dis números é: " + soma);

        }

        somarNumeros();


    }
}