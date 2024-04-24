<?php

$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = "randy918@gmail.com";

$body = "This is a test";

$headers = "From: Randy Miller <randy918@gmail.com>\r\n";
$headers .= "Reply-To: randy918@gmail.com>\r\n";
$headers .= "Content-type: text/html\r\n";


// $name = $_post['name'];
// $email = $_POST['email'];
// $phone= $_POST['phone'];
// $message = $_POST['message'];

echo "your name is $name".". ";
echo "your subject is $subject" . ". ";
echo "your email is $email" . ". ";
echo "your phone is $phone" . ". ";
echo "your message is $message" . ". ";

mail($to,  $body,  $message,  $headers);

require_once('..../htdocs/vendor/phpmailer/phpmailer/src/PHPMailer.php');

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->CharSet="UTF-8";
$mail->SMTPSecure = 'tls';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->Username = 'MyUsername@gmail.com';
$mail->Password = 'valid password';
$mail->SMTPAuth = true;

$mail->From = 'MyUsername@gmail.com';
$mail->FromName = 'Mohammad Masoudian';
$mail->AddAddress('anotherValidGmail@gmail.com');
$mail->AddReplyTo('phoenixd110@gmail.com', 'Information');

$mail->IsHTML(true);
$mail->Subject    = "PHPMailer Test Subject via Sendmail, basic";
$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!";
$mail->Body    = "Hello";

if(!$mail->Send())
{
  echo "Mailer Error: " . $mail->ErrorInfo;
}
else
{
  echo "Message sent!";
}

?>

