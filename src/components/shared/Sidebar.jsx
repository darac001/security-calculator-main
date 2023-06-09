import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import  Logac from '../../assets/Logac2.svg'

import { DASHBOARD_SIDEBAR_LINKS} from "../../constants/navigation"
import {HiOutlineLogout} from 'react-icons/hi'

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-800 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 md:min-w-[250px] text-white ">
      <div className="flex items-left justify-left my-6 pl-3">
        <img className="w-[220px] " src={Logac} alt="" />
      </div>
  

      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          return <SidebarLink key={link.key} link={link} />;
        })}
      </div>
      {/* <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div> */}
    </div>
  );
};

function SidebarLink({ link }) {
  const { pathname } = useLocation();
  return (<>
  

    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-800 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {/* <img className="fill-slate-100"  src={link.icon} alt="" /> */}
      {link.label}
    </Link>
  
    </>
  );
}

export default Sidebar;