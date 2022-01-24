import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MainNavigation from "./components/layout/main-navigation/MainNavigation";
import DefaultLayout from "./components/layout/default-layout/DefaultLayout";

ReactDOM.render(
	<React.StrictMode>
		<MainNavigation />
		<DefaultLayout>
			<App />
		</DefaultLayout>
	</React.StrictMode>,
	document.getElementById("root")
);
