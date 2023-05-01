import React from "react";
import { FaRegSave } from "react-icons/fa"
import { MdOutlineCancel } from "react-icons/md";
const Editable = ({editData, handleEditInputChange,cancelEdit}) => {
  return (
    <tr>
      <td>
        <input
          type="text"          
          name="name" 
          value={editData.name} 
          onChange={handleEditInputChange}        
          required     
          className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
        />
      </td>
      <td>
        <input
          type="number"          
          name="quantity"
          value={editData.quantity}   
          onChange={handleEditInputChange}  
          required     
          className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
        />
      </td>
      <td>
        <input
          type="number"
          name="standby"
          step={0.1}
          value={editData.standby}   
          onChange={handleEditInputChange}  
          required     
          className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
        />
      </td>
      <td>
        <input
          type="number"
          name="totalStandby"
         
          className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
        />
      </td>
      <td>
        <input
          type="number"
          name="alarm"
          step={0.1}
          value={editData.alarm}  
          onChange={handleEditInputChange}   
          required     
          className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
        />
      </td>
      <td>
        <input
          type="number"
          name="totalAlarm"
           
          className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
        />
      </td>
      <td className="flex text-center py-2 px-4">
        <button 
        type="submit"
        className="text-xs text-white bg-sky-400 flex py-1 px-2 rounded-lg items-center "
        >
          <FaRegSave className="text-sm mr-1"/>Save
          </button>
        <button 
        onClick={()=>cancelEdit()}
        className="text-xl text-red-500 "
        >
          <MdOutlineCancel/>
          </button>
      </td>
      
      </tr>
  );
};

export default Editable;
{/* <button
type="button"
className="text-xs text-white bg-sky-400 flex py-1 px-2 rounded-lg items-center "
onClick={(e) => handleEditClick(e, current)}
>
<FaRegEdit className="text-sm mr-1"/>Edit
</button> */}