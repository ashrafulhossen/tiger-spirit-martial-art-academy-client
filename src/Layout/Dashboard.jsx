// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AdminDashboard from "../Page/Dashboard/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../Page/Dashboard/InstructorDashboard/InstructorDashboard";

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const [userRole, setUserRole] = useState("");

	useEffect(() => {
		const data = async () => {
			const res = await fetch(`http://localhost:5000/users/${user.uid}`);
			const data = await res.json();
			setUserRole(data.role);
		};
		data();
	}, []);

	if (userRole === "student") {
		return <AdminDashboard />;
	} else if (userRole === "instructor") {
		return <InstructorDashboard />;
	} else if (userRole === "admin") {
		return <AdminDashboard />;
	}
};

export default Dashboard;
