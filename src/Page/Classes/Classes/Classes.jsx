import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import React from "react";
import SingleClass from "../../../components/SingleClass/SingleClass";
import useSecureAxios from "../../../hook/useSecureAxios";
import LoadingData from "../../../components/LoadingData/LoadingData";

const Classes = () => {
	const {secureAxios} = useSecureAxios();

	const { data: allClasses = [], isLoading } = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await secureAxios.get(`/classes`);
			return res.data;
		}
	});

	if(isLoading) {
		return <LoadingData/>
	}

	return (
		<div className=" bg-purple-100">
			<div className="max-w-7xl mx-auto py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{allClasses.length > 0 &&
						allClasses.map((singleClass) => (
							<SingleClass
								key={singleClass._id}
								singleClass={singleClass}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Classes;
