<?php
$name = $_POST['uname'];
$phone = $_POST['uphone'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$name = urldecode($name);
$phone = urldecode($phone);

$name = trim($name);
$phone = trim($phone);

mail("m.garsoss@gmail.com", "Bitstorm: Получить расчет окупаемости. bs9000.ru", "Имя:".$name."\n Телефон: ".$phone,"From: m.garsoss@gmail.com \r\n");

//m.garsoss@gmail.com

?>