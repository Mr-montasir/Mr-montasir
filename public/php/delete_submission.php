<?php include 'config.php' ?>
<?php
$submission_id = $_GET['submission_id'];
$sql_delete = "DELETE FROM contact_submits WHERE row_id = {$submission_id}";
$run_delete = mysqli_query($conn, $sql_delete);
?>