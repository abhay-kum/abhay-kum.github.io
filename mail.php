<?php

$to_email = 'abhaykumariiit@gmail.com';
$subject = 'From abhaykumar.me';
$msg = $_POST['message'];
$email=$_POST['email'];
$name=$_POST['fullname'];

$message="I am ".$name ."my email id is:".$email."i want to say that ".$msg;

$headers = 'From: noreply @ company. com';
//check if the email address is invalid $secure_check
$secure_check = sanitize_my_email($to_email);
if ($secure_check == false) {
    echo "incorrect input";
} else { //send email
    mail($to_email, $subject, $message, $headers);
    echo "<script>alert('Thank you for contacting me ! i will notify you')</script>";
}

?>
