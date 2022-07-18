const ligar = document.getElementById('on');
// Puxei o botão Ligado para o JS

const desligar = document.getElementById('off');
// Puxei o botão Desligado para o JS

const lamp = document.getElementById('lamp');
// Puxei a imagem da lampada pa JS


function ligado(){
    lamp.src = 'Img/ligada.jpg'
};
// Criei uma função que troca a imagem Para a lampada Ligada

function desligado(){
    lamp.src = 'Img/desligada.jpg'
};
// Criei uma função que troca a imagem Para a Lampada Desligada





ligar.addEventListener('click',ligado);
// Criei um Evento que ao clicar ele usa a funcão ligar
desligar.addEventListener('click',desligado);
// Criei um Evento que ao clicar ele usa a funcão desligar

lamp.addEventListener('mouseover',ligado);
// Criei um Evento que ao passar o mouse em cima da lampada ele troca de imagem

lamp.addEventListener('mouseleave',desligado);
// Criei um Evento que ao passar o mouse em cima da lampada ele troca de imagem



