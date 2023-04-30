/*var frase = $(".frase").text(); //$ -> jQuery -> querySelector | text -> pega o conteúdo de texto 
var numPalavras = frase.split(" ").length; //contando as palavras

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);*/

var tempoInicial = $("#tempo-digitacao").text();
/*escutando o evento click na caixa de digitação*/
var campo = $(".campo-digitacao");/*selecionando o campo*/ 

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);

    atualizaPlacar();
 
    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });

    $(".tooltip").tooltipster({
        trigger: "custom"
    });
});

function atualizaTamanhoFrase(){
    campo.on("input", function(){
        var frase = $(".frase").text();
        var numPalavras  = frase.split(" ").length;
        var tamanhoFrase = $("#tamanho-frase");
        tamanhoFrase.text(numPalavras);
    }); 
}

function inicializaContadores() {
    campo.on("input", function() { /*quando digitar, fazer algo*/
        var conteudo = campo.val(); /*value/conteúdo*/

        /*contagem*/
        var qtdPalavras = conteudo.split(/\S+/).length - 1; /*/\S+/: qualquer caractere, exceto espaço */
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    })
}


function inicializaMarcadores() {
    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function inicializaCronometro() {
    /*desabilitando o campo em t=0*/
    campo.on("input", function(){
        var tempoRestante = $("#tempo-digitacao").text();    
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });   
}

function reiniciaJogo(){
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

