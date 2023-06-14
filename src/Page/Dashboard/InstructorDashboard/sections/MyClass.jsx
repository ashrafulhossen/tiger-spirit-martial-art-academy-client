import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import LoadingData from "../../../../components/LoadingData/LoadingData";
import useSecureAxios from "../../../../hook/useSecureAxios";
import MySingleClass from "./MySingleClass";

const MyClass = () => {
	const { user } = useContext(AuthContext);
    const {secureAxios} = useSecureAxios();
	const {
		data: allClasses = [],
		isLoading,
	} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await secureAxios(`/classes/${user?.uid}`);
			return res.data;
		}
	});

	if (isLoading) {
		return <LoadingData />;
	}

	const updateEvent = () => {};
	return (
		<div className="rounded-xl bg-purple-100 block py-4 px-4 mt-2">
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th className="text-xl">Class Image</th>
							<th className="text-xl">Class Name</th>
							<th className="text-xl">Total Enrolled</th>
							<th className="text-xl">Available Seats</th>
							<th className="text-xl">Price</th>
							<th className="text-xl">status</th>
							<th className="text-xl">Feedback</th>
						</tr>
					</thead>
					<tbody>
						{allClasses.length > 0 &&
							allClasses.map((singleClass) => (
								<MySingleClass
									key={singleClass._id}
									singleClass={singleClass}
									updateEvent={updateEvent}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyClass;
