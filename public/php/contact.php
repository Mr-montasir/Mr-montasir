<?php include 'config.php' ?>
<?php
$username = $_POST['username'];
$contact_method = $_POST['contact_method'];
$message = $_POST['user_message'];
$method = $_POST['method'];

if (!empty($username) && !empty($contact_method) && !empty($message)) {
    $sql = "INSERT INTO contact_submits (user_name, user_contact_method, method, user_message)
    VALUES ('$username', '$contact_method', '$method', '$message')";

    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br> Server:" . mysqli_error($conn);
    }
} else {
    echo "Error: missing required fields.";
}

