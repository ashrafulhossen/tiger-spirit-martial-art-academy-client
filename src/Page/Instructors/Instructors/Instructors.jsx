// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleInstructor from "../../../components/SingleInstructor/SingleInstructor";

const Instructors = () => {
	const instructors = useLoaderData();
	console.log(instructors);
	return (
		<div className=" bg-purple-100">
			<div className="max-w-7xl mx-auto py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{instructors.length > 0 &&
						instructors.map((singleInstructor) => (
							<SingleInstructor
								key={singleInstructor._id}
								singleInstructor={singleInstructor}
								showBtn={true}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Instructors;
