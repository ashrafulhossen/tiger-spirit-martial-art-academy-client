import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import LoadingData from "../../../../components/LoadingData/LoadingData";
import useSecureAxios from "../../../../hook/useSecureAxios";
import AdminSingleUser from "./AdminSingleUser";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const AdminManageUsers = () => {
    const {user} = useContext(AuthContext);
	const { secureAxios } = useSecureAxios();

	const {
		data: allClasses = [],
		isLoading,
		refetch
	} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await secureAxios.get(`/users`);
			const users = res.data || [];
            return users.length > 0 && users.filter(singleUser => singleUser.uid !== user.uid)
		}
	});

	if (isLoading) {
		return <LoadingData />;
	}

	const makeInstructor = async (uid) => {
		const res = await secureAxios.put(`/users/${uid}/makeInstructor`);
		console.log(res.data);
	};
	const makeAdmin = async (uid) => {
		const res = await secureAxios.put(`/users/${uid}/makeAdmin`);
		if (res.data.matchedCount) {
			refetch();
		}
	};
	return (
		<div className="rounded-xl bg-purple-100 block py-4 px-4 mt-2">
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th className="text-xl">User Name</th>
							<th className="text-xl">User Email</th>
							<th className="text-xl">User Role</th>
						</tr>
					</thead>
					<tbody>
						{allClasses.length > 0 &&
							allClasses.map((singleClass) => (
								<AdminSingleUser
									key={singleClass._id}
									singleUser={singleClass}
									makeInstructor={makeInstructor}
									makeAdmin={makeAdmin}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminManageUsers;
