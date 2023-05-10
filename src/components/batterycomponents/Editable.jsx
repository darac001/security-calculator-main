import React, {useState} from "react";
import { FaRegSave,FaCheckCircle } from "react-icons/fa"
import { MdCancel} from "react-icons/md";
import { FcCheckmark,FcCancel} from "react-icons/fc";
const Editable = ({editData, handleEditInputChange,cancelEdit}) => {

  //   const [isHovering, setIsHovering] = useState(false);
  //   const[saveHover,setSaveHover]=useState(false)
  //   const[cancelHover,setCancelHover]=useState(false)
  
  //   const handleSaveMouseOver=()=>{
  //     setIsHovering(true)
  //     setSaveHover(true)
  //   }
  //   const handleSaveMouseOut=()=>{
  //     setIsHovering(false)
  //     setSaveHover(false)
    
  // }

  return (
    <tr>
      <td colSpan={2}>
        <input
          type="text"          
          name="name" 
          value={editData.name} 
          onChange={handleEditInputChange}        
          required     
          className=" md:w-full py-2 px-4 bg-blue-50 border border-[#e2e2e2] placeholder-gray-400 text-ellipsis "
        />
      </td>
      <td>
        <input
          type="number"          
          name="quantity"
          value={editData.quantity}   
          onChange={handleEditInputChange}  
          required     
          className=" md:w-full py-2 px-4 bg-blue-50 border border-[#e2e2e2] placeholder-gray-400  "
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
          className=" md:w-full py-2 px-4 bg-blue-50  border border-[#e2e2e2] placeholder-gray-400  "
        />
      </td>
      <td>
        <input
          type="number"
          name="totalStandby"
         
          className=" md:w-full py-2 px-4 bg-blue-50 border border-[#e2e2e2] placeholder-gray-400  "
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
          className=" md:w-full py-2 px-4 bg-blue-50 border border-[#e2e2e2] placeholder-gray-400  "
        />
      </td>
      <td>
        <input
          type="number"
          name="totalAlarm"
           
          className=" md:w-full py-2 px-4 bg-blue-50 border border-[#e2e2e2] placeholder-gray-400  "
        />
      </td>



      <td className="text-left flex pl-2">

        <div className="tooltip flex flex-col p-1">          
        <button 
        type="submit"
        className="text-xl items-center "
        // onMouseOver={handleSaveMouseOver}
        // onMouseOut={handleSaveMouseOut}
        >
          <FcCheckmark/>
          </button>
            <span className="tooltiptext block">Save</span>          
        </div>


        <div className="tooltip flex flex-col p-1">
        <button 
        onClick={()=>cancelEdit()}        
        className="text-xl items-center"
        >
          <FcCancel/>
          </button>
          <span className="tooltiptext block">Cancel</span>  

        </div>
      </td>      

      
      </tr>
  );
};

export default Editable;
