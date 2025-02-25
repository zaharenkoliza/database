import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const toggleDialog = () => {
		setIsDialogOpen(!isDialogOpen);
	};

	const handleLogin = async (e) => {
		e.preventDefault(); 
		console.log("Login form submitted");

		try {
			const data = new FormData();
			data.append("login", username);
			data.append("password", password);

			const response = await api.post("/auth.php", data);

			if (response.status === 200) {
				alert("Успешный вход!");
				navigate("/profile");
			}
		} catch (error) {
			alert("Ошибка входа");
			console.error("Ошибка:", error.response?.data || error.message);
		}
	};

	return (
		<>
			<h1>Саботёр</h1>
			<p>онлайн настольная игра</p>
			<div>
			<button onClick={toggleDialog}>войти</button>
			<button>регистрация</button>
			<button>правила</button>
			</div>

			{isDialogOpen && (
			<dialog open>
				<form id="loginForm" onSubmit={handleLogin}>
					<h2>Войти</h2>
					<input name="login" type="text" placeholder="Логин" required value={username} 
							onChange={(e) => setUsername(e.target.value)}/>
					<input name="password" type="password" placeholder="Пароль" required value={password} 
							onChange={(e) => setPassword(e.target.value)}/>
					<button type="submit">Войти</button>
				</form>
				<button onClick={toggleDialog}>Закрыть</button>
			</dialog>
		  )}
		</>
	);
}

export default Login;