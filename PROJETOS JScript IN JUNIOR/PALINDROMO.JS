function palindromo() {
    let s = prompt("Digite uma palavra para verificar se é palíndromo: ")
    .toLowerCase().split(" ")
    .join("").split("")
    let r = s.slice().reverse()
    return s.join("") === r.join("") ? "É Palíndromo" : "Não é Palíndromo"
}
console.log(palindromo())