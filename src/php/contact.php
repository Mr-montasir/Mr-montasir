<?php 
    $servername = "localhost";
    $username = "u914780542_mrmontasir";
    $password = "!Montasir2005";
    $database = "u914780542_mrmontasir";
    
    $conn = mysqli_connect($servername, $username, $password, $database);
    
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>
<?php
$username = $_POST['username'];
$email = $_POST['email'];
$message = $_POST['user_message'];

if (!empty($username) && !empty($email) && !empty($message)) {
    $sql = "INSERT INTO contact_submits (user_name, user_email, user_message)
    VALUES ('$username', '$email', '$message')";

    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br> Server:" . mysqli_error($conn);
    }
} else {
    echo "Error: missing required fields.";
}

