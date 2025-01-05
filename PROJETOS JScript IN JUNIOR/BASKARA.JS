let [a, b, c] = prompt("Digite respectivamente os coeficientes a, b, c espaçados: ").split(' ').map(Number)
let delta = (b**2)-4*a*c
if (delta >= 0) {
    let x1 = ((-b)+(delta**0.5))/(2*a)
    let x2 = ((-b)-(delta**0.5))/(2*a)
    alert(`Raízes reais: ${x1} e ${x2}`)
}
else {
    alert("Não possui raízes reais!")
}