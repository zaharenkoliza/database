<?php
include "cors.php";
include 'db_connect.php';
header("Access-Control-Allow-Origin: http://localhost:5173");

echo '<pre>';
print_r($_COOKIE);
echo '</pre>';

if (!isset($_COOKIE['token'])) {
	http_response_code(401);
	echo json_encode(["error" => "Нет токена"]);
	exit;
}

$token = $_COOKIE['token'];

// Проверяем токен в БД
$stmt = $pdo->prepare("SELECT login_user FROM s335141.tokens WHERE token = ?");
$stmt->execute([$token]);
$user = $stmt->fetch();

if (!$user) {
	http_response_code(403);
	echo json_encode(["error" => "Неверный токен"]);
	exit;
}

echo json_encode(["status" => "success", "login_user" => $user["login_user"]]);
?>