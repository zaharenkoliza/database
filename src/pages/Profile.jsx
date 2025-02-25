import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const Profile = () => {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await api.get("/check_token.php");
				console.log(response);
				// setUser(response.data.user); // Сохраняем данные пользователя
			} catch (error) {
				console.error("Ошибка авторизации:", error.response?.data || error.message);
				navigate("/login"); // Перенаправляем на страницу входа
			}
			finally {
				setLoading(false);
			}
		};

		checkAuth();
	}, [navigate]);

	if (loading) {
	return <div>Загрузка...</div>;
	}

	return (
	<div>
		<h1>Profile Page</h1>
		{/* Контент профиля */}
	</div>
	);
};

export default Profile;
