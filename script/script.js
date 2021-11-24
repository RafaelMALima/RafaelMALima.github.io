document.addEventListener('DOMContentLoaded', function(event){
    botao = document.querySelector('#back')
    botao.addEventListener('click', function(){
        document.history.back()
        console.log(document.history.back());
})
})
