<?php
include('functions.php');

global $dbh;
$query = "SELECT users.id,
				users.login,
				users.pass
				FROM users
        WHERE users.login = '$_POST[username]'
        AND users.pass = MD5('$_POST[password]');";

$stmt = $dbh->prepare($query);
$stmt->execute();

$user = $stmt->fetch();

if(is_array($user)) {
    session_start();
    $_SESSION['admin'] = true;
    $_SESSION['login'] = $user['login'];
    echo '1'; // on 'retourne' la valeur 1 au javascript si la connexion est bonne
} else {
    echo '0'; // on 'retourne' la valeur 0 au javascript si la connexion n'est pas bonne
}
