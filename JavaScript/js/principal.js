
//alert('Olá Mundo');
//console.log('Oi Mundo');

var titulo = (document.querySelector('.titulo')); //especificando um conteúdo pela classe(boas práticas)
console.log(titulo); //imprime todo o conteúdo, com as tags
console.log(titulo.textContent); //imprime só o conteúdo de texto

titulo.textContent = 'Aparecida Nutricionista'; //atribuindo um novo valor o conteúdo de texto do título

//calculando o IMC dos pacientes

var pacientes = document.querySelectorAll('.paciente'); //selecionando todos os pacientes - retorna um array
for (var i = 0; i<pacientes.length; i++){

	var paciente = pacientes[i];
	
	var tdPeso = paciente.querySelector('.info-peso');
	var peso = tdPeso.textContent;

	//console.log(paciente);
	//console.log(tdPeso);
	//console.log(peso);

	var tdAltura = paciente.querySelector('.info-altura');
	var altura = tdAltura.textContent;

	//console.log(paciente); 
	//console.log(tdAltura); 
	//console.log(altura); 

	var pesoValido = true;
	var alturaValida = true;

	if(peso<0 || peso > 1000){ //if ou
	    //console.log('peso inválido');
	    pesoValido = false;
	    tdImc.textContent = 'Peso inválido!'; 
	    paciente.style.classList.add('paciente-invalido') //adicionando uma classe 
	}

	if (altura<0 || altura>3.00){
	    //console.log('altura inválida');
	    alturaValida = false;
	    tdImc.textContent = 'Altura inválida!';
	    paciente.style.classList.add('paciente-invalido') //adicionando uma classe 
	}

	var tdImc = paciente.querySelector('.info-imc');

	if(pesoValido&&alturaValida){ //if e - só calcula o imc se peso e altura forem válidos
	    var imc = peso / (altura * altura);
	    tdImc.textContent = imc.toFixed(2);//fixando em duas casas decimais
	}else{
	    tdImc.textContent = 'Altura e/ou peso inválidos!';
	}    

}

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




/*function mostraMensagem(){
	console.log("Olá, fui clicado"); 
}*/	


console.log(imc)
