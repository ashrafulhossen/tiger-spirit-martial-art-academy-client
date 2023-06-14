// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const InstructorDashboard = () => {
	return (
		<div className="py-12 px-4">
			<div className="grid grid-cols-5 rounded-xl overflow-hidden">
				<div className="bg-purple-300 w-full h-full px-4 py-8 ">
					<ul className="flex flex-col items-center justify-center gap-6 ">
						<li className="bg-purple-500 w-11/12 h-full rounded-lg hover:scale-105 transition-all duration-300">
							<Link
								to={"/dashboard/instructor/addClass"}
								className="w-full block py-2 text-xl font-semibold text-white text-center"
							>
								Add a Class
							</Link>
						</li>
						<li className="bg-purple-500 w-11/12 h-full rounded-lg hover:scale-105 transition-all duration-300">
							<Link
								to={"/dashboard/instructor/classes"}
								className="w-full block py-2 text-xl font-semibold text-white text-center"
							>
								My Classes
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-span-4 bg-purple-100 w-full h-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default InstructorDashboard;
