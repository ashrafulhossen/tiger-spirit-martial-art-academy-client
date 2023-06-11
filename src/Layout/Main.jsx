// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import Navbar from "../Page/Shared/Navbar/Navbar";

const Main = () => {
	return (
		<div>
			<Navbar />
			<div className="min-h-[calc(100vh-525px)]">
				<Outlet />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Main;
