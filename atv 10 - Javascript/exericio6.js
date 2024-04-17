function verificarLetra(letra) {
    letra = letra.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return 'A letra digitada é uma vogal.';
    }
    else if (letra >= 'a' && letra <= 'z') {
        return 'A letra digitada é uma consoante.';
    }
    else {
        return 'Por favor, digite uma letra do alfabeto.';
    }
}

