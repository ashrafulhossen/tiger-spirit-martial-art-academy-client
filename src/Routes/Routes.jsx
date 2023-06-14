import { createBrowserRouter } from "react-router-dom";
import Authentication from "../Layout/Authentication";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Classes from "../Page/Classes/Classes/Classes";
import AdminManageClasses from "../Page/Dashboard/AdminDashboard/Sections/AdminManageClasses";
import AdminManageUsers from "../Page/Dashboard/AdminDashboard/Sections/AdminManageUsers";
import AddClass from "../Page/Dashboard/InstructorDashboard/sections/AddClass";
import MyClass from "../Page/Dashboard/InstructorDashboard/sections/MyClass";
import UpdateClass from "../Page/Dashboard/InstructorDashboard/sections/UpdateClass";
import Home from "../Page/Home/Home/Home";
import Instructors from "../Page/Instructors/Instructors/Instructors";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "/instructors",
				element: <Instructors />
			},
			{
				path: "/classes",
				element: <Classes />
			},
			{
				path: "/dashboard",
				element: (
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				),
				children: [
					{
						path: "/dashboard/admin/manageClasses",
						element: <AdminManageClasses />
					},
					{
						path: "/dashboard/admin/manageUsers",
						element: <AdminManageUsers />
					},
					{
						path: "/dashboard/instructor/addClass",
						element: <AddClass />
					},
					{
						path: "/dashboard/instructor/classes",
						element: <MyClass />
					},
					{
						paht: "/dashboard/instructor/classes/:classId/update",
						element: <UpdateClass />,
						loader: ({ params }) =>
							fetch(`http://localhost:5000/classes/${params.classId}`)
					}
				]
			}
		]
	},
	{
		path: "/authentication",
		element: <Authentication />,
		children: [
			{ path: "/authentication/login", element: <Login /> },
			{ path: "/authentication/register", element: <Register /> }
		]
	}
]);
