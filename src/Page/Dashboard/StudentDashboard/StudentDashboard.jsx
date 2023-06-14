// eslint-disable-next-line no-unused-vars
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyEnrolledClass from "./sections/MyEnrolledClass/MyEnrolledClass";
import MySelectedClass from "./sections/MySelectedClass/MySelectedClass";

const StudentDashboard = () => {
	return (
		<div className="py-10 max-w-7xl  mx-auto">
			<Tabs className="flex flex-col items-center">
				<TabList className="flex items-center justify-center border-b border-zinc-400 w-full">
					<Tab>My Selected Classes</Tab>
					<Tab>My Enrolled Classes</Tab>
				</TabList>
				<TabPanel className="w-full">
					<MySelectedClass />
				</TabPanel>
				<TabPanel className="w-full">
					<MyEnrolledClass />
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default StudentDashboard;
