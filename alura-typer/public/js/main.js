var frase = $(".frase").text(); //$ -> jQuery -> querySelector | text -> pega o conteúdo de texto 
var numPalavras = frase.split(" ").length; //contando as palavras

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);
