// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AdminDashboard from "../Page/Dashboard/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../Page/Dashboard/InstructorDashboard/InstructorDashboard";
import StudentDashboard from "../Page/Dashboard/StudentDashboard/StudentDashboard";

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const [userRole, setUserRole] = useState("");

	useEffect(() => {
		const data = async () => {
			const res = await fetch(`https://martial-art-school-server.vercel.app/users/${user.uid}`);
			const data = await res.json();
			setUserRole(data.role);
		};
		data();
	}, []);

	if (userRole === "student") {
		return <StudentDashboard />;
	} else if (userRole === "instructor") {
		return <InstructorDashboard />;
	} else if (userRole === "admin") {
		return <AdminDashboard />;
	}
};

export default Dashboard;
