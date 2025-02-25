<?php
session_start();

include 'db_connect.php';

if (!isset($_SESSION['token'])) {
	echo json_encode(['status' => 'error', 'message' => 'No token']);
	exit;
}

$amount_of_players = $_POST['amount_of_players'] ?? null;
$time_for_move = $_POST['time_for_move'] ?? null;


// if (empty($login) || empty($password)) {
// 	echo json_encode(['status' => 'error', 'message' => 'No login or password']);
// 	exit;
// }

$stmt = $pdo->prepare('SELECT s335141.new_room(:amount_of_players, :time_for_move)');
$stmt->execute(['amount_of_players' => $amount_of_players ? $amount_of_players : 3, 'time_for_move' => $time_for_move ? $time_for_move : 60]);
$result = $stmt->fetchColumn();

$response = json_decode($result, true);

if ($response && isset($response['status']) && $response['status'] === 'success') {
	$_SESSION['rooms'] = $response['available_rooms'];

	echo "<pre>";
	print_r($response);
	print_r($_SESSION);
	echo "</pre>";
} else {
	echo json_encode([
		'status' => 'error',
		'message' => $response['message'] ?? 'Error'
	]);
}
?>