function calcularFinanceiro() {
    var ganhoAnual = 0;
    var gastoAnual = 0;

    for (var i = 1; i <= 12; i++) {
        var ganhoMensal = parseFloat(prompt("Digite o ganho bruto do mês " + i + ":"));
        var gastoMensal = parseFloat(prompt("Digite os gastos do mês " + i + ":"));

        ganhoAnual += ganhoMensal;
        gastoAnual += gastoMensal;
    }

    var saldoFinanceiro = ganhoAnual - gastoAnual;

    var resultado = saldoFinanceiro >= 0 ? "lucro" : "prejuízo";

    alert("Ganho bruto anual: R$" + ganhoAnual.toFixed(2));
    alert("Gasto anual: R$" + gastoAnual.toFixed(2));
    alert("Saldo financeiro: R$" + saldoFinanceiro.toFixed(2));
    alert("A empresa teve " + resultado + ".");
}

calcularFinanceiro();