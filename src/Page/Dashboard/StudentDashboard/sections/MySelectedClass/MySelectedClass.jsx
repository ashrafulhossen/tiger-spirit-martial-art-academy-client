import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";
import useSecureAxios from "../../../../../hook/useSecureAxios";
import SingleSelectedClass from "./SingleSelectedClass";

const MySelectedClass = () => {
	const { user } = useContext(AuthContext);
	const [secureAxios] = useSecureAxios();
	// use secure axios with react query
	const { data: allSelectedClasses = [], refetch } = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/student/${user?.uid}/selectedClass`
			);
			return res.data;
		}
	});

	const enrollEvent = async (_id) => {
		const res = await secureAxios.put(
			`/student/${user?.uid}/enrollment/?enrollClass=${_id}`,
			{
				method: "PUT",
				headers: {
					"content-type": "application/json",
					"authorization" : `Bearer ${localStorage.getItem("TigerSpiritMartialArtAcademyJWT")}`
				}
			}
		);
		if (res.data.modifiedCount) {
			Swal.fire({
				icon: "success",
				title: "Your selected class is enrolled",
				showConfirmButton: false,
				timer: 1000
			});
			refetch();
		}
	};

	const deleteEvent = (_id) => {
		const deleteClass = async () => {
			const res = await secureAxios.delete(
				`/student/${user?.uid}/delete/?class=${_id}`
			);
			if (res.data.deletedCount) {
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
				refetch();
			}
		};
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result) => {
			if (result.isConfirmed) {
				deleteClass();
			}
		});
	};

	console.log(allSelectedClasses);
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
						{allSelectedClasses.length > 0 &&
							allSelectedClasses.map((selectedClass) => (
								<SingleSelectedClass
									key={selectedClass._id}
									showButton={true}
									selectedClass={selectedClass}
									enrollEvent={enrollEvent}
									deleteEvent={deleteEvent}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MySelectedClass;
