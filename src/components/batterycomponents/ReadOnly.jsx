import React, { useState } from "react";
import { FaRegEdit,FaMinusCircle } from "react-icons/fa"

const ReadOnly = ({current,handleEditClick,handleDelete}) => {


  return (
    
    <tr      
      key={current.id}
    >
      <td className=" md:w-full py-2 px-4 h-[38px] bg-white border border-[#e2e2e2] placeholder-gray-400 text-overflow" colSpan={2}>
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
      <td className="text-left flex pl-2">
        <div className="tooltip flex flex-col p-1">          
        <button 
        type="button"
        className="text-lg items-center text-gray-600 "
        onClick={(e) => handleEditClick(e, current)}
        >
          <FaRegEdit/>
          </button>
            <span className="tooltiptext block">Edit</span>          
        </div>


        <div className="tooltip flex flex-col p-1">          
        <button 
        type="button"
        className="text-lg items-center text-red-600 "
        onClick={()=>handleDelete(current.id)}
        >
          <FaMinusCircle/>
          </button>
            <span className="tooltiptext block">Delete</span>          
        </div>

      </td>
    </tr>
  );
};

export default ReadOnly;



