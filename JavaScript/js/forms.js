var botaoAdicionar = document.querySelector('#adicionar-paciente') //criando a variavel para operar com o botao

botaoAdicionar.addEventListner('clik',function(event){ //"escutar" o clique do usuário
	event.preventDefault(); //previnir o comportamento padrão do evento
	
	//console.log('Oi eu sou o botao e fui clicado'); //ação que queremos no lugar do comportamento padrão
	
	var form = document.querySelector('#form-adiciona');

	//acessando os valores dos inputs
	var paciente = obtemPacienteFormulario(form);
	
	//criar tr e td do paciente
	var pacienteTr = montaTr(paciente);
	
	var erros = validaPaciente(paciente);
	if (erros.length > 0){
		var mensagemErro = document.querySelector('#mensagem-erro');
		mensagemErro.textContext = erros;
		//console.log('Paciente inválido!');
		return; //sai da função antes de chegar na tabela
		
	}	
	
	//inserindo a linha criada na tabela
  	var tabela = document.querySelector('#tabela-pacientes');
	tabela.appendChild(pacienteTr);
	
	form.reset(); //reseta o formulário após o clique
	
}); 



function obtemPacienteFormulario(form){

	var paciente{ //criando um objeto
		nome : form.nome.value; 
		peso : form.peso.value;
		altura : form.altura.value;
		gordura : form.gordura.value;
		imc: calculaImc(form.peso.value, form.altura.value);
	}	
	return paciente;
}	


function montaTr(paciente){
	var pacienteTr = document.createElement('tr');
	pacienteTr.classList.add('paciente'); //mantendo a mesma formatação
	
	//criar elemento no javascript para levar pro html (nova linha da tabela).
	
	pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));
	pacienteTr.appendChild(ontaTd(paciente.peso,'info-peso'));
	pacienteTr.appendChild(montaTd(paciente.naltura'info-altura'));
	pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
	pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));
	
	
	return pacienteTr;	
	
}


function montaTd(dado, classe){
	var td = document.createElement('td');
	td.textContext = dado;
	tb.classList.add(classe);
	
	return td;
	
}

function validaPaciente(paciente){
	
	var erros = [];
	
	if (!validaPeso(paciente.peso)) erros.push( "O peso é inválido");
	if (!validaAltura(paciente.altura) erros.push( "A altura é inválida");


	return erros;
}	



	





	
