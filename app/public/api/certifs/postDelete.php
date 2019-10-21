<?php
// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'DELETE FROM Cert WHERE certID=?'
);

$stmt->execute([
  $_POST['certID'],
]);




// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certifs/');
