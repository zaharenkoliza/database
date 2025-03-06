import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost/database/api",
	withCredentials: true,
	headers: { "Content-Type": "multipart/form-data" },
});

export default class GamesService {

	static async getGames() {
		return this.#request('get', '/');
	}

	static async getGameData(token) {
		return this.#request('get', `/${token}`);
	}

	static async joinRoom(token) {
		return this.#request('get', `/join_room/${token}`);
	}

	static async leaveRoom(token) {
		return this.#request('get', `/leave_room/${token}`);
	}

	static async makeDecision(token, word) {
		return this.#request('post', `/make_decision/${token}`, { word });
	}

	static async getPlayers(token) {
		return this.#request('get', `/get_players/${token}`);
	}

	static async createRoom(number, speed, name) {
		return this.#request('post', '/create_room/', { number, speed, name });
	}

	static async endLayout(token) {
		return this.#request('get', `/end_layout/${token}`);
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
