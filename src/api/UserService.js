import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost/database/api",
	withCredentials: true,
	headers: { "Content-Type": "multipart/form-data" },
});

export default class UserService {

	static async auth(data) {
		return this.#request('post', '/auth.php', data);
	}

	static async #request(method, url, data, params) {
		try {
			const config = { method, url, data, params };
			const response = await api(config);

			if (response.data.status === 'error') {
				return response;
			}

			return response.data;
		}	catch (error) {
			console.error(`Ошибка запроса:`, error);
			return { status: 'error', message: error.message };
		}
	}
}
