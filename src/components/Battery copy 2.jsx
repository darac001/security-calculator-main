import React, { useEffect } from "react";
import Header from "./Header";
import img from "../assets/Group2.svg";
import { useState } from "react";

const Battery = () => {
  
  const [currents, setCurrents] = useState([{
    id: 1,
    name: "",
    quantity: "",
    standby: "",
    totalStandby: "",
    alarm: "",
    totalAlarm: "",
  },]);


  const [addNewData, setAddNewData] = useState({
    id: "",
    name: "",
    quantity: "",
    standby: "",
    totalStandby: "",
    alarm: "",
    totalAlarm: "",
  });

  const [sumOfStandby, setSumOfStandby] = useState(0);
  const [sumOfAlarm, setSumOfAlarm] = useState(0);

  let totalStandbySum = currents.reduce((total, current) => {
    return Number(total) + Number(current.totalStandby);
  }, 0);
  let totalAlarmSum = currents.reduce((total, current) => {
    return Number(total) + Number(current.totalAlarm);
  }, 0);

  const filteredCurrents = currents.filter((current) => {
    return current.name !== "";
  });
  console.log(filteredCurrents);
  console.log(currents);

  useEffect(() => {
    // console.log(totalStandbySum);
    // console.log(totalAlarmSum);
    setSumOfStandby(totalStandbySum);
    setSumOfAlarm(totalAlarmSum);
  }, [currents]);

  const title = "BATTERY SIZE CALCULATOR";
  const para1 = " xxxxxxxxxxxxxxxxx";
  const para2 =
    " xxxxxxxxxxxxxxxxxxxxxxxxxxxalculator is designed for applications using AWG and mm2 sizes only. Enter your values in the calculator below!";

  function handleAddNewDevice(e) {
    e.preventDefault();
    const newDevice=
      {
        // using the length of the array for a unique id
        id: currents.length + 1,
        name: addNewData.name,
        quantity: addNewData.quantity,
        standby: addNewData.standby,
        totalStandby: addNewData.quantity * addNewData.standby,
        alarm: addNewData.alarm,
        totalAlarm: addNewData.quantity * addNewData.alarm,
      }
      const newCurrents=[...currents,newDevice]
    

    setCurrents(newCurrents);
    setAddNewData({
      id: "",
      name: "",
      quantity: "",
      standby: "",
      totalStandby: "",
      alarm: "",
      totalAlarm: "",
    })
    
    
  }

  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setAddNewData({ ...addNewData, [name]: value });
  };

  
  return (
    <>
      <div className="md:p-5 ">
        <Header title={title} para1={para1} para2={para2} />
        <div className="flex flex-col justify-center items-center">
          <form
            className="flex flex-col gap-3 "
            onSubmit={handleAddNewDevice}
          >
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  {/* <tr>
                    <th scope="col" className="px-6 py-3" colSpan={2}></th>
                    <th scope="col" className="px-6 py-3" colSpan={2}>
                      STANDBY CURRENT
                    </th>
                    <th scope="col" className="px-6 py-3" colSpan={2}>
                      ALARM CURRENT
                    </th>
                  </tr> */}
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      DESCRIPTION
                    </th>
                    <th scope="col" className="px-6 py-3">
                      QTY.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      STANDBY (mA)
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                      TOTAL mA
                    </th> */}
                    <th scope="col" className="px-6 py-3">
                      ALARM (mA)
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                      TOTAL mA
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        id="name"
                        name="name"                        
                                   value={addNewData.name} 
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Motion Detector"
                        className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        id="quantity"
                        name="quantity"
                        value={addNewData.quantity}          
                        onChange={handleInputChange}
                        required
                        placeholder="0"
                        className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        step={0.1}
                        id="standby"                        
                        name="standby"      
                        value={addNewData.standby}                  
                        onChange={handleInputChange}
                        required
                        placeholder="0"
                        className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
                      />
                    </td>
                    {/* <td className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  ">
                      {currents.totalStandby}
                    </td> */}
                    <td>
                      <input
                        type="number"
                        min="0"
                        step={0.1}
                        id="alarm"
                        // name is important, call it same as it is called in the addNewData object
                        name="alarm"                
                        value={addNewData.alarm} 
                        onChange={handleInputChange}
                        required
                        placeholder="0"
                        className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          <button            
            className="w-full text-[14px] mt-5 py-2 px-4 border border-[#29abe0] text-[#29abe0] font-semibold"
            type="submit"
          >
            Add to Calculator
          </button>
          </form>
        </div>
      </div>
      <div className="flex p-5 flex-col gap-3 md:full w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3" colSpan={2}></th>
              <th scope="col" className="px-6 py-3" colSpan={2}>
                STANDBY CURRENT
              </th>
              <th scope="col" className="px-6 py-3" colSpan={2}>
                ALARM CURRENT
              </th>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-3">
                DESCRIPTION
              </th>
              <th scope="col" className="px-6 py-3">
                QTY.
              </th>
              <th scope="col" className="px-6 py-3">
                mA
              </th>
              <th scope="col" className="px-6 py-3">
                TOTAL mA
              </th>
              <th scope="col" className="px-6 py-3">
                mA
              </th>
              <th scope="col" className="px-6 py-3">
                TOTAL mA
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCurrents.map((curr) => (
              <tr
                className=" md:w-full py-2 px-4 max-h-2 border border-[#e2e2e2] placeholder-gray-400"
                key={curr.id}
              >
                <td className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400">
                  {curr.name}
                </td>
                <td className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400">
                  {curr.quantity}
                </td>
                <td className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400">
                  {curr.standby}
                </td>
                <td className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400">
                  {curr.totalStandby}
                </td>
                <td className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400">
                  {curr.alarm}
                </td>
                <td className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400">
                  {curr.totalAlarm}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>{sumOfStandby}</td>
              <td>{sumOfAlarm}</td>
            </tr>
          </tfoot>
        </table>
        {/* <img src={img} /> */}
      </div>
    </>
  );
};

export default Battery;
