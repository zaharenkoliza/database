import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost/database/api",
	withCredentials: true,
	headers: { "Content-Type": "multipart/form-data" },
});

export default api;
