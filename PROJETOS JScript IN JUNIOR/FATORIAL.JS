function fatorial(n) {
    if (parseInt(n) == n && parseInt(n) > 0) {
        let f = 1;
        for (let i = 1; i <= parseInt(n); i++) {
            f *= i;
        }
        return f;
    } else {
        return "Inválido";
    }
}

function main() {
    let user = "S"
    while (user.toUpperCase() === "S") {
        let n = prompt("Digite um número inteiro positivo para calcular o fatorial: ");
        let f = fatorial(n);
        alert(`O resultado do fatorial de ${n} é: ${f}`);
        while (f == "Inválido") {
            n = prompt("Digite um número inteiro positivo válido: ");
            f = fatorial(n);
            alert(`O resultado do fatorial de ${n} é: ${f}`);
        }
        console.log(`O resultado do fatorial de ${n} é: ${f}`);
        user = prompt("Deseja continuar? (S/N) ");
    }
}
main();