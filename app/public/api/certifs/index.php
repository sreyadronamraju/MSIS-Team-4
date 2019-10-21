<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Cert');
$stmt->execute();
$certifs = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certifs, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
