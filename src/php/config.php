<?php 
$servername = "localhost";
$username = "u914780542_mrmontasir";
$password = "!Montasir2005";
$database = "u914780542_mrmontasir";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo '<br>';
    echo 'connected successfully';
    echo '<br>';
}