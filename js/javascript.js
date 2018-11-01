$(document).ready(function() {
  $('.scrollspy').scrollSpy();
  $(".button-collapse").sideNav({closeOnClick: true});
  $('.materialboxed').materialbox();
  
    $("#submit").on('click', function(){
        var formData = '{"emailEmissor":"' + $('#emailEmissor').val() +'","senhaEmissor":"' + $('#senhaEmissor').val() +'","emailReceptor":"' + $('#emailReceptor').val() +'","mensagem":"' + $('#mensagem').val() +'","assunto":"' + $('#assunto').val() +'"}';
        $.ajax({
            url: $("#serverPhp").val(), // url where to submit the request
            type : "POST", // type of action POST || GET
            dataType : 'text', // data type
            data : formData,
            success : function(result) {
				$(".formulario").hide();
				$("body").css('background-image', 'url("img/bg2.gif")');
				$("footer").hide();
				setTimeout(function(){
					alert("D-email enviado");
				}, 1000);
            },
            error: function(xhr, resp, text) {
				alert("Erro ao enviar D-email");
            }
        })
    });
	
	$(function btnHabilita(){
		if($("#mensagem").hasClass("valid") && $("#assunto").hasClass("valid") && $("#emailEmissor").hasClass("valid") && $("#senhaEmissor").hasClass("valid") && $("#emailReceptor").hasClass("valid") && $("#serverPhp").hasClass("valid")){
			$("#submit").removeClass("disabled");
		}else{
			$("#submit").addClass("disabled");
		}
		setTimeout(btnHabilita, 1000);
	});
});