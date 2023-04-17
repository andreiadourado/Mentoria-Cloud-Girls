var tabela = document.querySelector('#tabela-pacientes');
tabela.addEventListener('dblclick', function(event)){
    event.target.parentNode.classList.add('fadeOut'); //adicionando a classe
      
    setTimeout(function(){ // tempo de espera da remoção
        event.target.parentNode.remove();//removendo a linha clicada - target: identifica a td clicada - parentNode: identifica a tr da td para apagar
    }, 500);
                       
});               
