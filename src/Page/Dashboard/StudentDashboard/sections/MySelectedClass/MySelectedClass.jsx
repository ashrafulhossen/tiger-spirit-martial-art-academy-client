// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";

const MySelectedClass = () => {
	const { user } = useContext(AuthContext);
	const [allSelectedClasses, setAllSelectedClasses] = useState([]);

	useEffect(() => {
		const loadSelectedClasses = async () => {
			const res = await fetch(
				`http://localhost:5000/user/?=${user?.uid}`
			);
			const data = await res.json();
			setAllSelectedClasses(data);
		};
		loadSelectedClasses();
	}, []);

	console.log(allSelectedClasses);
	return (
		<div className="rounded-xl bg-purple-100 block py-4 px-4 mt-2">
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th className="text-xl">Class</th>
							<th className="text-xl">Instructor Name</th>
							<th className="text-xl">Available Seats</th>
							<th className="text-xl">Price</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		</div>
	);
};

export default MySelectedClass;
