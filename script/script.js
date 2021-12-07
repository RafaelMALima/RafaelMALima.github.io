document.addEventListener('DOMContentLoaded', function(event){
    console.log(document.referrer)
    console.log(document.location.host)
    if (document.referrer == document.location.host){
        texto = document.createElement('p')
        texto.innerHTML = "A pagina que voce esta tentando acessar ainda nao esta pronta!"
        texto.style.color = "#FF0000"
        texto.style.align = 'center'
        document.querySelector('body').appendChild(texto)
    }
    botao = document.querySelector('#back')
    botao.addEventListener('click', function(){
        window.history.back(-1)
        console.log(document.history.back());
})
})
