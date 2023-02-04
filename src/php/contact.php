<?php include 'config.cae31156a3cdefc4a75f.php'; ?>
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

