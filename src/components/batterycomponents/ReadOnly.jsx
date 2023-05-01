import React from "react";
import { FaRegEdit } from "react-icons/fa"

const ReadOnly = ({current,handleEditClick}) => {
  

  return (
    
    <tr      
      key={current.id}
    >
      <td className=" md:w-full py-2 px-4 h-[38px] bg-white border border-[#e2e2e2] placeholder-gray-400">
        {current.name}
      </td>
      <td className=" md:w-full py-2 px-4 h-[38px] bg-white border border-[#e2e2e2] placeholder-gray-400">
        {current.quantity}
      </td>
      <td className=" md:w-full py-2 px-4 h-[38px] bg-white border border-[#e2e2e2] placeholder-gray-400">
        {current.standby}
      </td>
      <td className=" md:w-full py-2 px-4 h-[38px] bg-white border border-[#e2e2e2] placeholder-gray-400">
        {current.totalStandby}
      </td>
      <td className=" md:w-full py-2 px-4 h-[38px] bg-white border border-[#e2e2e2] placeholder-gray-400">
        {current.alarm}
      </td>
      <td className=" md:w-full py-2 px-4 h-[38px] bg-white border border-[#e2e2e2] placeholder-gray-400">
        {current.totalAlarm}
      </td>
      <td className="md:w-full py-2 px-4 h-[38px]">
      <button
          type="button"
          className="text-xs text-white bg-sky-400 flex py-1 px-2 rounded-lg items-center "
          onClick={(e) => handleEditClick(e, current)}
        >
          <FaRegEdit className="text-sm mr-1"/>Edit
        </button>

      </td>
    </tr>
  );
};

export default ReadOnly;
