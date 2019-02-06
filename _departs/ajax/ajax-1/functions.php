<?php

// Connexion à la base de données
$user = 'root';
$pass = 'root';

try {
    $dbh = new PDO('mysql:host=localhost;dbname=dc_ajax', $user, $pass);
    $dbh->exec("set names utf8");
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
