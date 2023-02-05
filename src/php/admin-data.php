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
    // Fetch data from the database
    $query = "SELECT * FROM contact_submits";
    $result = mysqli_query($conn, $query);

    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }

    // Return data in JSON format
    header('Content-Type: application/json');
    echo json_encode($data);
?>
