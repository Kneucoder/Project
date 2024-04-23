<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = 'tariq.essat.r@gmail.com';
  $subject = 'New Contact Form Submission';
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  
  // Send email
  if (mail($to, $subject, $body)) {
    echo 'Message sent.';
  } else {
    echo 'Please try again later.';
  }
} else {
  echo 'Invalid request.';
}
?>