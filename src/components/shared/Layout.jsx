import React from "react";

// outlet is used because layout is wrapping dashboard
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Layout = () => {
	

	return (
		<div className="bg-neutral-50 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
				<div className="grid grid-cols-2 gap-20 p-10 md:pr-20 min-h-0">
					<Outlet />
				</div>
			
		</div>
	)
};

export default Layout;