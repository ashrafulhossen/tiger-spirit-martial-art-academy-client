// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import LoadingData from "../../../../components/LoadingData/LoadingData";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import SingleClass from "../../../Classes/Classes/sections/SingleClass/SingleClass";

const PopularClasses = () => {
	const [popularClasses, setPopularClasses] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const [loadingData, setLoadingData] = useState(true);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch(`http://localhost:5000/popularClasses`);
			const data = await res.json();
			setPopularClasses(data);
			setLoadingData(false);
		};
		loadData();
	}, []);

	const showAllEvent = () => setShowAll(!showAll);

	if (loadingData) {
		return <LoadingData />;
	}

	return (
		<div className="py-20 bg-purple-50">
			<div className="max-w-7xl mx-auto">
				<SectionHeading
					heading="Popular Classes"
					subHeading="Popular martial arts like BJJ, Muay Thai, and Taekwondo offer diverse combat styles, physical fitness, mental discipline, and personal growth."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{popularClasses.length > 0 &&
						(showAll
							? popularClasses
							: popularClasses.slice(0, 6)
						).map((popularClass) => (
							<SingleClass
								key={popularClass._id}
								singleClass={popularClass}
							/>
						))}
				</div>
				<div className="text-center pt-10">
					<button onClick={showAllEvent} className="purple-btn">
						{showAll ? "Show Less" : "Show All"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PopularClasses;
