//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array(lista) onde ficaram os nomes das pessoas 
let amigosList = [];
//coloca um autofocus no campo de digitar um nome sem alterar o html
focaCampo();
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

//Essa funcionalidade é um escutador que pega o evento do enter e atribui uma função a ele com arrow function
addEventListener('keypress', event => {
    if (event.key == 'Enter') {
        adicionarAmigo();
    }
})

//Função impede que o usuário coloque um nome que já tem na lista, passando o paramentro do nome
function verificaRedundancia(nome) {
    if (amigosList.includes(nome)) {
        alert('Nome já adicionado na lista! Por favor escolha outro');
        return;
    } else {
        amigosList.push(nome);
        insereNOCampo();
        limpaCampo();
        focaCampo();
    }
}

//função que cria um elemnto li e coloca um texto dentro
function insereNOCampo() {
    const amigos = creatFields('#listaAmigos', 'li');
    for (let i = 0; i < amigosList.length; i++) {
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

//função para criar elemento li e pegar o campo
function creatFields(tag, element) {
    const ulAmigos = document.querySelector(tag);
    const liField = document.createElement(element);
    ulAmigos.appendChild(liField);
    return liField;

}

//invoca inserirNome sortado caso o array não seja um array vazio
function sortearAmigo() {
    const numeroSorteado = geraIndiceAleatorio();
    if (!amigosList.length) {
        alert('Por favor, Adicione algum nome a lista!')
    } else {
        let nome = amigosList[numeroSorteado];
        let result = creatFields('#resultado', 'li');
        result.innerHTML = nome;
    }
}

//function que apenas coloca um autofocus sem precisar na estrutra fo html
function focaCampo() {
    nomeAmigo = document.querySelector('#amigo').focus();
}

//função que limpa todos os li's dos campos para poder inserir novas pessoas e fazer um novo sorteio
function novoSorteio() {
    amigosList = [];
    const fieldResul = document.querySelector('#resultado');
    const fieldLista = document.querySelector('#listaAmigos');
    fieldLista.innerHTML = '';
    fieldResul.innerHTML = '';
    console.log(amigosList);
    focaCampo();
}


