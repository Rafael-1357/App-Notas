var menu = document.getElementById('menu')
var botaoAbrir = document.querySelector('.icone--botao--abrir')
var botaoFechar = document.querySelector('.icone--botao--fechar')
var botoesMenu = document.querySelectorAll('.botoes--menu')
var novaNota = document.getElementById('modal--nova--nota')
var infoNovaNota = window.getComputedStyle(novaNota)

function abrirMenu(){

    for(var i = 0; i < botoesMenu.length; i++){
        botoesMenu[i].classList.toggle('botoes--menu--fechado')
    }

    menu.classList.toggle('menu--fechado')

}

botaoAbrir.onclick = abrirMenu;
botaoFechar.onclick = abrirMenu;

function menuNovaNota() {

    if (infoNovaNota.getPropertyValue('display') === 'none'){
        novaNota.style.display = 'block'
    } else{
        novaNota.style.display = 'none'
    }
    
}
