//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array(lista) onde ficaram os nomes das pessoas 
let amigosList = [];

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

//função que apenas criar um elemnto li e coloca um texto dentro
function insereNOCampo() {
    const listaAmigos = document.querySelector('#listaAmigos');
    const amigos = document.createElement('li');

    for (let i = 0 ; i < amigosList.length ; i++ ) {
        listaAmigos.appendChild(amigos);
        amigos.innerHTML = amigosList[i];
    }
}

//função que limpa o campo quanso usuário termina de digitar
function limpaCampo() {
    nomeAmigo = document.querySelector('#amigo');
    nomeAmigo.value = '';
}


