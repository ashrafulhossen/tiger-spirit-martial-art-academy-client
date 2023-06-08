import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Classes from "../Page/Classes/Classes/Classes";
import Dashboard from "../Page/Dashboard/Dashboard/Dashboard";
import Home from "../Page/Home/Home/Home";
import Instructors from "../Page/Instructors/Instructors/Instructors";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/instructors", element: <Instructors /> },
			{ path: "/classes", element: <Classes /> },
			{ path: "/dashboard", element: <Dashboard /> }
		]
	}
]);
