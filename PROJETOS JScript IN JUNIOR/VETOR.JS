let user = parseInt(prompt("Digite a quantidade de números: "));
let vetor = [Infinity];
let count = 0;
for (let i = 0; i < user; i++) {
    let x = parseInt(prompt(`Digite o ${i+1}° número: `))
    vetor.push(x)
    if (vetor[i] <= x) {
        count++
    }
}
console.log(count);