function fibonacci(n) {
    if (n === 0) {
        return "0"
    }
    else if (n === 1) {
        return "1"
    }
    else {
        let impressao = "0 1 "
        let a1 = 0
        let a2 = 1
        let an = a1+a2
        for (let i = 2; i < n; i++) {
            impressao += `${an} `
            a1 = a2
            a2 = an
            an = a1+a2
        }
        return impressao
    }
}
let user = parseInt(prompt("Digite quantos números da sequência de Fibonacci você quer ver: "))
console.log(`Os ${user} primeiros números da sequência de Fibonacci são: ${fibonacci(user)}`)
alert(`Os ${user} primeiros números da sequência de Fibonacci são: ${fibonacci(user)}`)