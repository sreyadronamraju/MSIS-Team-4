<?php

if (isset($_GET['personID'])) {
  $stmt = $db->prepare(
    'SELECT * FROM Person
    WHERE personID = ?'
  );
  $stmt->execute([$_GET['personID']]);
} else {
  $stmt = $db->prepare('SELECT * FROM Person');
  $stmt->execute();
}
$persons = $stmt->fetchAll();
