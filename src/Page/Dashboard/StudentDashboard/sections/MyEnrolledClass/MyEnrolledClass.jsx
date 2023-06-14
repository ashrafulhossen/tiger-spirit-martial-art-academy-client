import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";
import useSecureAxios from "../../../../../hook/useSecureAxios";
import SingleEnrolledClass from "./SingleEnrolledClass";

const MyEnrolledClass = () => {
	const { user } = useContext(AuthContext);
	const [secureAxios] = useSecureAxios();
	
	const { data: allEnrolledClass = [] } = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/student/${user?.uid}/enrolledClass`
			);
			return res.data;
		}
	});

	console.log(allEnrolledClass);
	return (
		<div className="rounded-xl bg-purple-100 block py-4 px-4 mt-2">
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th className="text-xl">Class Image</th>
							<th className="text-xl">Class Name</th>
							<th className="text-xl">Instructor Name</th>
							<th className="text-xl">Price</th>
							<th className="text-xl"></th>
						</tr>
					</thead>
					<tbody>
						{allEnrolledClass.length > 0 &&
							allEnrolledClass.map((enrolledClass) => (
								<SingleEnrolledClass
									key={enrolledClass._id}
									enrolledClass={enrolledClass}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyEnrolledClass;
