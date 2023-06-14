import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const secureAxios = axios.create({
	baseURL: "http://localhost:5000"
});

const useSecureAxios = () => {
	const { logOut } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		secureAxios.interceptors.request.use((config) => {
			const token = localStorage.getItem(
				"TigerSpiritMartialArtAcademyJWT"
			);
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});

		secureAxios.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (
					error.response &&
					(error.response.status === 401 ||
						error.response.status === 403)
				) {
					await logOut();
					navigate("/authentication/login");
				}
				return Promise.reject(error);
			}
		);
	}, [logOut, navigate]);

	return [secureAxios];
};

export default useSecureAxios;
