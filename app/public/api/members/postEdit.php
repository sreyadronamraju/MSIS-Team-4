<?php
// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'UPDATE Person SET firstName=?,lastName=?,sexAtBirth=?,dob=?,phoneNumber=?,email=?,dateHired=?,position=?,isActive=?,radioNumber=?,stationNumber=? WHERE personID=?'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['sexAtBirth'],
  $_POST['dob'],
  $_POST['phoneNumber'],
  $_POST['email'],
  $_POST['dateHired'],
  $_POST['position'],
  $_POST['isActive'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['personID']
]);




// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../members/');