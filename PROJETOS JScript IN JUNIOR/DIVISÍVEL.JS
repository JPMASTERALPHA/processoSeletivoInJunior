function fizzbuzz() {
    let user = parseInt(prompt("Digite um número inteiro: "), 10);
    if (user % 15 === 0) {
       return "fizzbuzz";
    }
    else if (user % 3 === 0) {
        return "fizz";
    }
    else if (user % 5 === 0) {
        return "buzz";
    }
}
console.log(fizzbuzz());