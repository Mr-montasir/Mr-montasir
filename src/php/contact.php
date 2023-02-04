<?php include 'config.php'; ?>
<?php
$username = $_POST['username'];
$email = $_POST['email'];
$name = $_POST['user_message'];

echo '_________';
echo 'Username: ' . $username;
echo 'Email: ' . $email;
echo 'Name: ' . $name;
echo '_________';