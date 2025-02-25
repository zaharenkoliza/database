<?php
include 'db_connect.php';
include 'cors.php';

$login = $_POST['login'] ?? null;
$password = $_POST['password'] ?? null;

if (empty($login) || empty($password)) {
	echo json_encode(['status' => 'error', 'message' => 'No login or password']);
	exit;
}

$stmt = $pdo->prepare('SELECT s335141.auth(:login, :password)');
$stmt->execute(['login' => $login, 'password' => $password]);
$result = $stmt->fetchColumn();

$response = json_decode($result, true);

if ($response && isset($response['status']) && $response['status'] === 'success') {

	setcookie("token", $response['token'], [
		"expires" => time() + 3600,
		"path" => "/",
		"domain" => "localhost",
		'secure' => false,
		"httponly" => true,
		"samesite" => "Lax"
	]);

	echo json_encode([
		'status' => 'success',
		'info' => $response
	]);
} else {
	echo json_encode([
		'status' => 'error',
		'message' => $response['message'] ?? 'Неверный логин или пароль.'
	]);
}
?>