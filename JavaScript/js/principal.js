
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
	    var imc = calculaImc(peso,altura);
	    //tdImc.textContent = imc.toFixed(2);//fixando em duas casas decimais
	}else{
	    tdImc.textContent = 'Altura e/ou peso inválidos!';
	}   
	

}

function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}








console.log(imc)
