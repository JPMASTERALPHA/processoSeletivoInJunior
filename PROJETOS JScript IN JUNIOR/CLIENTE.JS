function randomNamesList() { // função para ter uma amostra de nomes aleatórios
    let listaRandom = [
        "Ana", "João", "Beatriz", "Carlos", "Luís", "Mariana", "Fernanda", "Paulo", "Rafaela", "Ricardo",
        "Gabriel", "Larissa", "Lucas", "Patrícia", "Mateus", "Juliana", "Daniel", "Roberta", "Pedro", "Bianca",
        "Renata", "Thiago", "Camila", "André", "Aline", "Diego", "Cláudia", "Gustavo", "Vanessa", "Eduardo",
        "Alice", "Fábio", "Sabrina", "Leonardo", "Natália", "Bruno", "Cecília", "Igor", "Letícia", "Samuel",
        "Amanda", "Victor", "Yasmin", "Felipe", "Sofia", "Rogério", "Helena", "Rafael", "Carolina", "Vinícius"
    ]
    let list = []
    for (let i = 0; i < Math.floor(Math.random()*listaRandom.length); i++) {
        let x = Math.floor(Math.random()*listaRandom.length)
        list.push(listaRandom[x])
    }
    return list;
}

function output(list) {
    let impressao = ""
    for (let i = 0; i < list.length; i++) {
        impressao += `${i+1}° ${list[i]}\n`
    }
    return impressao;
}

function main() {
    let list = randomNamesList()
    let user = "0";
    while (user != "3") {
        user = prompt(
            `Situação da Fila:\n${output(list)}\n` +
            "Digite uma das seguintes opções:\n" +
            "1 - “Novo Cliente”: Adiciona um novo cliente ao final da fila.\n" +
            "2 - “Atender Cliente”: Retira o primeiro cliente da fila e exibe o nome do cliente que está sendo atendido.\n" +
            "3 - “Sair”: Encerra o programa."
        );
        switch (user) {
            case '1':
                let newClient = prompt("Digite o nome do novo cliente:")
                list.push(newClient);
                alert(`Cliente: ${newClient} adicionado com sucesso!`);
                break;
            case '2':
                if (list.length > 0) {
                    alert(`Cliente: ${list[0]} está sendo atendido(a).`);
                    list.shift();
                } else {
                    alert("Não há clientes na fila para atender.");
                }
                break;
            case '3':
                console.log(`Clientes restantes:\n${output(list)}`);
                alert(`Clientes restantes:\n${output(list)}`);
                break;
        }
    }
}
main()