import React from "react";

const Header = ({ title, para1, para2 }) => {
  return (
    <div >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-[#808080] text-[21px] w-full md:block hidden mt-2">
        {para1}
      </p>
      <p className="text-[#808080] text-[14px] w-full md:block hidden mt-2">
        {para2}
      </p>
      <hr className="my-6 w-full"/>
    </div>
  );
};

export default Header;
