<?php
$name = $_POST['uname'];
$mail = $_POST['umail'];

$name = htmlspecialchars($name);
$mail = htmlspecialchars($mail);

$name = urldecode($name);
$mail = urldecode($mail);

$name = trim($name);
$mail = trim($mail);

mail("m.garsoss@gmail.com", "Bitstorm: Получить документы по почте. bs9000.ru", "Имя:".$name."\n Эл. почта: ".$mail,"From: m.garsoss@gmail.com \r\n");

//m.garsoss@gmail.com

?>