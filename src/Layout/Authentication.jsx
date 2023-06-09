// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Footer from "../Page/Shared/Footer/Footer";

const Authentication = () => {
	return (
		<div>
			<Navbar />
			<div className="min-h-[calc(100vh-555px)]">
				<Outlet />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Authentication;
