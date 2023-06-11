// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Sections/Banner/Banner";
import PopularClasses from "../Sections/PopularClasses/PopularClasses";
import PopularInstructors from "../Sections/PopularInstructors/PopularInstructors";

const Home = () => {
	return (
		<div className="">
			{/* Banner Section */}
			<Banner />

			{/* Popular Classes Section */}
			<PopularClasses />

			{/* Popular Instructors Section */}
			<PopularInstructors />
		</div>
	);
};

export default Home;
