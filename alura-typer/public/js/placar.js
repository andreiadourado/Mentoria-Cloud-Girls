$("#botao-placar").click(mostraPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Seu-nome";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);


    corpoTabela.append(linha);
    $(".placar").slideDown(500);
    scrollPlacar();
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>"); //criando a tag html
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

     // ícone dentro do link
     link.append(icone);

     // link dentro da coluna
     colunaRemover.append(link);
 
     // coluna dentro da linha
     linha.append(colunaUsuario);
     linha.append(colunaPalavras);
     linha.append(colunaRemover);
 
    return linha;
}


function removeLinha(event) {
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut(1000); /*remoção gradual*/
    setTimeout(function() {
        linha.remove();
    }, 1000);
}    


function mostraPlacar() {
    $(".placar").slideToggle(600); /*toggle: adiciona ou esconde um elemento- slide: suavizar a transição */
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("body").animate(
    {
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}