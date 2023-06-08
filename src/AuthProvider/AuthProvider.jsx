import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const AuthContext = useState;

const AuthProvider = ({ children }) => {
	const Auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const unsubscribe = Auth.onAuthStateChanged((user) => {
			if (user) {
				setLoading(true);
				setUser(user);
			} else {
				setLoading(false);
				setUser(null);
			}
		});

		return () => unsubscribe();
	});

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(Auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(Auth, email, password);
	};

    const logOut = () => {
        return signOut(Auth);
    }

    const googleSignIn = () => {
        return signInWithPopup(Auth, googleProvider);
    }

	const authObj = {
		user,
		signUp,
		signIn,
        logOut,
        googleSignIn,
        loading
	};

	return (
		<AuthContext.provider value={authObj}>{children}</AuthContext.provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default AuthProvider;
