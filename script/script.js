document.addEventListener('DOMContentLoaded', function(event){
    botao = document.querySelector('#back')
    botao.addEventListener('click', function(){
        window.history.back(-1)
        console.log(document.history.back());
})
})
