<?php

$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = "randy918@gmail.com";

$body = "This is a test";

$headers = "From: Randy Miller <bitbybitokcontact@gmail.com>\r\n";
$headers .= "Reply-To: bitbybitokcontact@gmail.com>\r\n";
$headers .= "Content-type: text/html\r\n";



// $name = $_post['name'];
// $email = $_POST['email'];
// $phone= $_POST['phone'];
// $message = $_POST['message'];

echo "your name is $name" . ". ";
echo "your subject is $subject" . ". ";
echo "your email is $email" . ". ";
echo "your phone is $phone" . ". ";
echo "your message is $message" . ". ";

// mail($to, $subject, $message, $headers); // could be important???

/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';



//Create a new PHPMailer instance--
$mail = new PHPMailer();
$mail->isSMTP();
$mail->Mailer = "smtp";

$mail->SMTPDebug  = 1;
$mail->SMTPAuth = false;
$mail->SMTPSecure = "tls";
$mail->Port       = 587;
$mail->Host       = "a2plcpnl0503.prod.iad2.secureserver.net";
$mail->Username   = "contactmessages@bitbybit.org";
$mail->Password   = "NewHorse33!";

$mail->IsHTML(true);
$mail->AddAddress("randy918@gmail.com", "Randy Miller");
// $mail->AddAddress("lbarron@bitbybitok.org", "Lindsay Barron");
$mail->AddAddress("bitbybitokcontact@gmail.com", "Contact Recorder");
$mail->SetFrom("contactmessages@bitbybit.org", "Randy Miller");
$mail->AddReplyTo("bitbybitokcontact@gmail.com", "Randy Miller");
// $mail->AddCC("cc-recipient-email@domain", "cc-recipient-name");
$mail->Subject = "A message from BxB 'Contact Us'";
$content = "<b>Name: </b> $name" . "<br><br>" .
    "<b>Subject: </b>$subject" . "<br><br>" .
    "<b>Email: </b>$email" . "<br><br>" .
    "<b>Phone: </b>$phone" . "<br><br>" .
    "<b>Message: </b>$message";


$mail->MsgHTML($content);

if (!$mail->Send()) {
    echo "Error while sending Email.";
    var_dump($mail);
} else {
    echo "Email sent successfully";
}
