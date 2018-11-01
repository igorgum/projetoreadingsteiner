<?php
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Content-Type");
require("phpmailer/class.phpmailer.php");

$diaAgora = date('d.m.Y');
$data = json_decode(file_get_contents('php://input'));
$antes = '<div class="msgcriptografada">';
$depois = '</div>';

/*
estrutura do json:
	{
		emailEmissor=''
		senhaEmissor=''
		emailReceptor=''
		mensagem=''
		assunto=''
	}
*/

if ($data != NULL){
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPAuth = true;
	$mail->Username = $data->emailEmissor;
	$mail->Password = $data->senhaEmissor;
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = "ssl"; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port  = 465;
	$mail->From = $data->emailEmissor; 
	$mail->FromName = "";
	$mail->AddAddress($data->emailReceptor);
	$mail->IsHTML(true);
	$mail->CharSet = 'iso-8859-1';

	$mail->Subject  = $data->assunto;
	$mail->Body = $antes . $diaAgora .  $data->mensagem . $depois;
	$mail->AltBody = $antes . $diaAgora .  $data->mensagem . $depois;

	$enviado = $mail->Send();

	$mail->ClearAllRecipients();
	$mail->ClearAttachments();

	if ($enviado) {
	echo "E-mail enviado com sucesso!";
	} else {
	echo "Não foi possível enviar o e-mail.";
	echo "Informações do erro: 
	" . $mail->ErrorInfo;
	}
}else{
	echo '<body style="background-image:url(bg.png); background-size: cover;">';
}