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
$submission_id = $_GET['submission_id'];
$sql_delete = "DELETE FROM contact_submits WHERE row_id = {$submission_id}";
$run_delete = mysqli_query($conn, $sql_delete);
?>