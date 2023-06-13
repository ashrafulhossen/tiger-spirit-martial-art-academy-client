import { createBrowserRouter } from "react-router-dom";
import Authentication from "../Layout/Authentication";
import Main from "../Layout/Main";
import Classes from "../Page/Classes/Classes/Classes";
import {
	default as Dashboard,
	default as StudentDashboard
} from "../Page/Dashboard/StudentDashboard/StudentDashboard";
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
				element: <Instructors />,
				loader: () => fetch(`http://localhost:5000/instructors`)
			},
			{
				path: "/classes",
				element: <Classes />,
				loader: () => fetch(`http://localhost:5000/classes`)
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
						path: "/dashboard",
						element: <StudentDashboard />
					},
					{
						path: "/dashboard/instructor/:user",
						element: <StudentDashboard />
					},
					{
						path: "/dashboard/admin/:user",
						element: <StudentDashboard />
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
