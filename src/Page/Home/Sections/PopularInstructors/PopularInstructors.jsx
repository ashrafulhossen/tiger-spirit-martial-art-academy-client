// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import LoadingData from "../../../../components/LoadingData/LoadingData";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import SingleInstructor from "../../../../components/SingleInstructor/SingleInstructor";

const PopularInstructors = () => {
	const [popularInstructors, setPopularInstructors] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch(`http://localhost:5000/popularInstructors`);
			const data = await res.json();
			setPopularInstructors(data);
		};
		loadData();
	}, []);

	return (
		<div className="py-20 px-4 bg-purple-100 bg-opacity-80">
			<div className="max-w-7xl mx-auto">
				<SectionHeading
					heading="Popular Instructors"
					subHeading="Martial art instructors are skilled and knowledgeable individuals who guide students, imparting techniques, discipline, and values for personal growth."
				/>
				{popularInstructors.length > 0 ? <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{popularInstructors.map(popularInstructor => <SingleInstructor key={popularInstructor._id} singleInstructor={popularInstructor}/>)}
				</div> : <LoadingData />}
			</div>
		</div>
	);
};

export default PopularInstructors;
