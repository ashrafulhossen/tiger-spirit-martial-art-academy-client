import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
	</React.StrictMode>
);
