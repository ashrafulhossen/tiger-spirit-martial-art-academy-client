import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import React from "react";
import LoadingData from "../../../../components/LoadingData/LoadingData";
import useSecureAxios from "../../../../hook/useSecureAxios";
import AdminSingleClass from "./AdminSingleClass";

const AdminManageClasses = () => {
	const { secureAxios } = useSecureAxios();

	const { data: allClasses = [],isLoading, refetch} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await secureAxios.get(`/classes`);
			return res.data;
		}
	});

	console.log(allClasses);

	if (isLoading) {
		return <LoadingData />;
	}

	const approvedEvent = async (_id) => {
		const res = await secureAxios.put(`/selectedClass/${_id}/approved`);
		console.log(res.data);
	};
	const deniedEvent = async (_id) => {
		const res = await secureAxios.put(`/selectedClass/${_id}/denied`);
		if(res.data.matchedCount) {
            refetch()
        }
	};
	const feedbackEvent = async (_id) => {
		const res = await secureAxios.put(`/selectedClass/${_id}/feedback`);
		console.log(res.data);
	};

	return (
		<div className="rounded-xl bg-purple-100 block py-4 px-4 mt-2">
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th className="text-xl">Class Image</th>
							<th className="text-xl">Class Name</th>
							<th className="text-xl">Instructor</th>
							<th className="text-xl">Available Seats</th>
							<th className="text-xl">Price</th>
							<th className="text-xl">status</th>
						</tr>
					</thead>
					<tbody>
						{allClasses.length > 0 &&
							allClasses.map((singleClass) => (
								<AdminSingleClass
									key={singleClass._id}
									singleClass={singleClass}
									approvedEvent={approvedEvent}
                                    deniedEvent={deniedEvent}
                                    feedbackEvent={feedbackEvent}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};


export default AdminManageClasses;
