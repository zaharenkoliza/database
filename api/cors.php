<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Обрабатываем preflight-запрос
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	http_response_code(204); // Отправляем пустой ответ
	exit;
}
?>
