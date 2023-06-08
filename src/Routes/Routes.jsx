import { createBrowserProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";

export const router = createBrowserProvider([
	{
		path: "/",
		element: <Main />,
		children: [{ path: "/", element: <Home /> }]
	}
]);
