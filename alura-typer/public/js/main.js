var frase = $(".frase").text(); //$ -> jQuery -> querySelector | text -> pega o conteúdo de texto 
var numPalavras = frase.split(" ").length; //contando as palavras

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

/*escutando o evento click na caixa de digitação*/
var campo = $(".campo-digitacao");/*selecionando o campo*/ 
campo.on("input", function() { /*quando digitar, fazer algo*/
    var conteudo = campo.val(); /*value/conteúdo*/

    /*contagem*/
    var qtdPalavras = conteudo.split(/\S+/).length - 1; /*/\S+/: qualquer caractere, exceto espaço */
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);

    /*desabilitando o campo em t=0*/
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() { /*one: escuta o evento uma única vez */
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
            }
        }, 1000);
    });
  

});

