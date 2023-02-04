<?php 
$servername = "localhost";
$username = "u914780542_mrmontasir";
$password = "!Montasir2005";
$database = "u914780542_mrmontasir";

$conn = mysqli_connect($servername, $username, $password, $database);
if(!$conn) {
    echo 'Cannot connect to database, if this error still showing please consider contacting me via email or phone number or any other social media, Thanks!';
}