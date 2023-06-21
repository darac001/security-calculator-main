import React from "react";

// outlet is used because layout is wrapping dashboard
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Layout = () => {
	

	return (
		<div className="bg-neutral-50  overflow-hidden flex flex-row">
			<Sidebar />
				<div className="min-h-0 h-screen overflow-y-scroll">
					<Outlet />
				</div>
			
		</div>
	)
};

export default Layout;