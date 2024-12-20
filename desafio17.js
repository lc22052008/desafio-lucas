const container = document.querySelector('.container');

// Array com os dados dos jogos (nome e imagem)
const jogos = [
    { nome: 'Pac-Man', imagem: 'pacman.png' },
    { nome: 'Mario Bros', imagem: 'mario.jpg' },
    { nome: 'Pitfall', imagem: 'Modelo 2.png' },
    { nome: 'Enduro', imagem: 'enduro2.png' },
    { nome: 'Donkey Kong', imagem: 'monkey.jpeg' },
    { nome: 'Galaxy', imagem: 'unnamed.png' },
    { nome: 'Tennis', imagem: 'mario-bros.jpg' },   
    // ... adicione os demais jogos aqui ...
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');
    gameBox.innerHTML = `<img src="${jogo.imagem}" alt="${jogo.nome}"><h2>${jogo.nome}</h2>`;
    return gameBox;
}

// Preenchendo a grade
jogos.forEach(jogo => {
    container.appendChild(criarGameBox(jogo));
});