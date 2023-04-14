var botaoAdicionar = document.querySelector('#adicionar-paciente') //criando a variavel para operar com o botao

botaoAdicionar.addEventListner('clik',function(event){ //"escutar" o clique do usuário
	event.preventDefault(); //previnir o comportamento padrão do evento
	
	//console.log('Oi eu sou o botao e fui clicado'); //ação que queremos no lugar do comportamento padrão
	
	var form = document.querySelector('#form-adiciona');
	
	var nome = form.nome.value; //acessando os valores dos inputs
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;
	
	//criar elemento no javascript para levar pro html (nova linha da tabela)
	
	var pacienteTr = document.createElement('tr');
	var nomeTd = document.createElement('td');
	var alturaTd = document.createElement('td');
	var pesoTd = document.createElement('td');
	var gorduraTd = document.createElement('td');
	var imcTd = document.createElement('td');
	
	//colocar como elementos filhos
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);
	
	//inserindo a linha criada na tabela
  	var tabela = document.querySelector('#tabela-pacientes');
	tabela.appendChild(pacienteTr);

	

	
}); 

