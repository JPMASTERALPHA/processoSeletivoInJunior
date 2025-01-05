function cambio() {
    let reais = parseFloat(prompt("Digite o valor em reais: "));
    let us = reais/5.7;
    let euro = reais/6.1;
    return alert(`Valor em US$: ${us.toFixed(2)}\nValor em €: ${euro.toFixed(2)}`);
}
cambio();