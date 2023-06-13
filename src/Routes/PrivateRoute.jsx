import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import LoadingData from "../components/LoadingData/LoadingData";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <LoadingData />;
	}

	if (user) {
		return <div>{children}</div>;
	}

	return (
		<div>
			<Navigate to={"/authentication/login"} state={{ from: location }} />
		</div>
	);
};

PrivateRoute.propTypes = {
	children: PropTypes.element.isRequired
};

export default PrivateRoute;
