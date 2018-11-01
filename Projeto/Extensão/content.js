$(function muda(){
  if($('[class*="msgcriptografada"]').length){

    ///////////////////////////////////////////////////////////////////////////
    chrome.runtime.sendMessage({type: "notification", options: {
    type: "basic",
    iconUrl: ("icone.png"),
    title: 'Reading;Steiner',
    message: 'The divergence number has changed. El Psy Kongroo.'
    }});
    ///////////////////////////////////////////////////////////////////////////

    var conteudoOriginal = $('[class*="msgcriptografada"]').html();
	  var restoDaMensagem = conteudoOriginal.substring(10);

    var dataNormal = conteudoOriginal.substring(0,10);
    //mini bug do milenio
	var Fix1 = dataNormal.substring(0,2);
	var Fix2 = dataNormal.substring(3,5);
	var Fix3 = dataNormal.substring(6,10);
	dataNormal = Fix2 + "." + Fix1 + "." + Fix3;
    //
    var dataLeapt = Date.parse(dataNormal).addDays(-7);
    var diaSemana = dataLeapt.getDay();
    var mes = dataLeapt.getMonth();

    var horarioInicial = $('.g3').html();
    var hora = horarioInicial.indexOf(":")-2;
    var minuto = horarioInicial.indexOf(":")+3;
    var horarioNovo = horarioInicial.substring(hora, minuto);

    switch(diaSemana) {
        case 0:
            diaSemana = "dom, ";
            break;
        case 1:
            diaSemana = "seg, ";
            break;
        case 2:
            diaSemana = "ter, ";
            break;
        case 3:
            diaSemana = "qua, ";
            break;
        case 4:
           diaSemana = "qui, ";
           break;
        case 5:
            diaSemana = "sex, ";
            break;
        case 6:
            diaSemana = "sáb, ";
            break;
        default:
            diaSemana = "dom, ";
    }

    switch(mes) {
        case 0:
            mes = "jan de ";
            break;
        case 1:
            mes = "fev de ";
            break;
        case 2:
            mes = "mar de ";
            break;
        case 3:
            mes = "abr de ";
            break;
        case 4:
            mes = "mai de ";
            break;
        case 5:
            mes = "jun de ";
            break;
        case 6:
            mes = "jul de ";
            break;
        case 7:
            mes = "ago de ";
            break;
        case 8:
            mes = "set de ";
            break;
        case 9:
            mes = "out de ";
            break;
        case 10:
            mes = "nov de ";
            break;
        case 11:
            mes = "dez de ";
            break;
        default:
            mes = "dez de ";
    }

    var msg = diaSemana;
    msg += dataLeapt.toString('d ');
    msg += ' de ';
    msg += mes;
    msg += dataLeapt.toString('yyyy');
    msg += " " + horarioNovo;

    $(".g3").html(msg);
    $('[class*="msgcriptografada"]').html(restoDaMensagem);
    $('[class*="msgcriptografada"]').removeAttr("class");
  }
  setTimeout(muda, 1000);
});
