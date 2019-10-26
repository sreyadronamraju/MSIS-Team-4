<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM PersonCert,Person, Cert
  WHERE PersonCert.personID=Person.personID
  and PersonCert.certID=Cert.certID
  and certDate < CURDATE();');
$stmt->execute();
$pcerts = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($pcerts, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
