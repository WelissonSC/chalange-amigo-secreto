//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array(lista) onde ficaram os nomes das pessoas 
let amigosList = [];
//coloca um autofocus no campo de digitar um nome sem alterar o html
nomeAmigo = document.querySelector('#amigo').focus();

//função que adiciona amigo fazendo a verificação com uma regex de string inovocando a função que coloca na tela caso não tenha problema
function adicionarAmigo() {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    let nomeAmigo = document.querySelector('#amigo').value;
    if (regex.test(nomeAmigo) == false) {
        alert('Por favor, insira um nome.');
        limpaCampo()
        return;
    } else {
        verificaRedundancia(nomeAmigo);
    }
}

//Função impede que o usuário coloque um nome que já tem na lista, passando o paramentro do nome
function verificaRedundancia(nome) {
    if (amigosList.includes(nome)) {
        alert('Nome já adicionado na lista! Por favor escolha outro');
        return;
    } else {
        amigosList.push(nome);
        insereNOCampo();
        limpaCampo();
    }
}

//função que cria um elemnto li e coloca um texto dentro
function insereNOCampo() {
    const listaAmigos = document.querySelector('#listaAmigos');
    const amigos = document.createElement('li');

    for (let i = 0; i < amigosList.length; i++) {
        listaAmigos.appendChild(amigos);
        amigos.innerHTML = amigosList[i];
    }
}

//função que limpa o campo quanso usuário termina de digitar
function limpaCampo() {
    nomeAmigo = document.querySelector('#amigo');
    nomeAmigo.value = '';
}

//gera um indice aleatório de acordo com o tamanho do array
function geraIndiceAleatorio() {
    let tamanhoArrayAmigos = amigosList.length;
    let posicaoIndice = Math.floor(Math.random() * tamanhoArrayAmigos);
    return posicaoIndice;
}

//insere no html o nome sorteado recebendo o nome sorteado como paramentro
function insereNomeSorteado(nome) {
    const resultadoArea = document.querySelector('#resultado');
    const nomeSorteado = document.createElement('li');
    resultadoArea.appendChild(nomeSorteado);
    nomeSorteado.innerHTML = nome;
}

//invoca inserirNome sortado caso o array não seja um array vazio
function sortearAmigo() {
    const numeroSorteado = geraIndiceAleatorio();
    if (!amigosList.length) {
        alert('Por favor, Adicione algum nome a lista!')
    } else {
        let nome = amigosList[numeroSorteado];
        insereNomeSorteado(nome);
    }
}




