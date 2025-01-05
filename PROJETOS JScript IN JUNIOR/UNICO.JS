function encontrarElementoUnico(list) {
    let unicos = {}
    list.forEach(num => {unicos[num] = (unicos[num] || 0) + 1});
    for (let value in unicos) {
        if (unicos[value] === 1) {
            return `Valor único: ${value}`
        }
    }
}
console.log(encontrarElementoUnico(prompt("Digite números separados por espaço: ").split(" ")))