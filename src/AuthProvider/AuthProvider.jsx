import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from "firebase/auth";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const Auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider(),
		githubProvider = new GithubAuthProvider();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const unsubscribe = Auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
				const loggedUser = { email: user?.email };
				const jwtToken = async () => {
					const res = await fetch("http://localhost:5000/jwt", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(loggedUser)
					});
					const data = await res.json();
					localStorage.setItem(
						"TigerSpiritMartialArtAcademyJWT",
						data.token
					);
				};
				jwtToken();
				setLoading(false);
			} else {
				setLoading(false);
				setUser(null);
			}
		});

		return () => {
			setLoading(false);
			unsubscribe();
		};
	}, []);

	const signUp = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(Auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(Auth, email, password);
	};

	const logOut = () => {
		return signOut(Auth);
	};

	const googleSignIn = () => {
		return signInWithPopup(Auth, googleProvider);
	};

	const githubSignIn = () => {
		return signInWithPopup(Auth, githubProvider);
	};

	const authObj = {
		user,
		signUp,
		signIn,
		logOut,
		googleSignIn,
		githubSignIn,
		loading
	};

	return (
		<AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default AuthProvider;
