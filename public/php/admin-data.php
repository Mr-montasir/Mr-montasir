<?php include 'config.php' ?>
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
