function NASA() {
    function contagemRegressiva() {
        console.log("Iniciando contagem regressiva para o lançamento do foguete:");
        for (let segundos = 10; segundos > 0; segundos--) {
            console.log(segundos + "...");
            espera(1000); // Espera 1 segundo (1000 milissegundos)
        }
        console.log("Foguete lançado!");
    }

    function espera(milissegundos) {
        var data = new Date();
        var tempoAtual = data.getTime();
        while (true) {
            var dataAtual = new Date();
            if (dataAtual.getTime() - tempoAtual >= milissegundos) {
                break;
            }
        }
    }

    contagemRegressiva();
}

NASA(); 