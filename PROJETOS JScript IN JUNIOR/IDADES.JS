function verificarIdades() {
    let array = prompt("Digite o ano de nascimento de cada pessoa, separados com espaço: ").split(" ").map((ano) => parseInt(ano))
    let ano = parseInt(prompt("Digite o ano atual: "))
    for (let i = 0; i < array.length; i++) {
        if (ano-array[i] >= 18) {
            console.log(`Pessoa ${i+1}: Maior de idade`)
            array[i] = "maior"
        }
        else {
            console.log(`Pessoa ${i+1}: Menor de idade`)
            array[i] = "menor"
        }
    }
    console.log(array)
}
verificarIdades()