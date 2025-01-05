function adicionarJogador() {
    let player = {};
    player['nome'] = prompt("nome: ");
    player['idade'] = parseInt(prompt("idade: "));
    player['posicao'] = prompt("posição: ")
    player['pontuacao'] = parseInt(prompt("pontos: "));
    time.push(player);
    alert(`
        Jogador adicionado com sucesso!
        Nome: ${player.nome} | Idade: ${player.idade} | Posição: ${player.posicao} | Pontuação: ${player.pontuacao}
        `)
}
function buscarPorPosicao() {
    if (time.length === 0) {
        return alert("Time sem jogadores");
    } else {
        let position = prompt("posição: ");
        let players = time.filter(player => player.posicao === position);
        let impressao = "";
        for (let player of players) {
            impressao += `Nome: ${player.nome} | Idade: ${player.idade} | Posição: ${player.posicao} | Pontuação: ${player.pontuacao}\n`
        }
        return (impressao == "") ? alert("Nenhum jogador encontrado") : alert(impressao);
    }
}
function listarTime() {
    if (time.length === 0) {
        return alert("Time sem jogadores");
    } else {
        let impressao = "";
        for (let player of time) {
        impressao += `Nome: ${player.nome} | Idade: ${player.idade} | Posição: ${player.posicao} | Pontuação: ${player.pontuacao}\n`;
    }
        return alert(impressao);
    }
}
function calcularPontuacaoMedia() {
    if (time.length === 0) {
        return alert("Time sem jogadores");
    } else {
        let soma = 0;
        for (let player of time) {
            soma += player.pontuacao;
        }
        return alert("Média: " + (soma/time.length).toFixed(0));
    }
}
let time = [];
function main() {
    let user = 0;
    while (user != 5) {
        user = prompt(
        `Digite uma opção:
        1 - Adicionar jogador
        2 - Buscar por posição
        3 - Listar time
        4 - Calcular pontuação média
        5 - Sair`
        );
        switch (user) {
            case '1':
                adicionarJogador();
                break;
            case '2':
                buscarPorPosicao();
                break;
            case '3':
                listarTime();
                break;
            case '4':
                calcularPontuacaoMedia();
                break;
            case '5':
                console.log(time);
                break;
        }
    }
}
main();