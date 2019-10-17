<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO memberCertifs (personID, certID)
  VALUES (?, ?, ?)'
);

$stmt->execute([
  $_POST['memberCertifs'],
  $_POST['certID']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certifs/');
