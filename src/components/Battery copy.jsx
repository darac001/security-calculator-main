import React, { useEffect } from "react";
import Header from "./Header";
import img from "../assets/Group2.svg";
import { useState } from "react";

const Battery = () => {
  const [item, setItem] = useState("");
  const [initial, setInitial] = useState({
    id: 1,
    name: "",
    quantity: "",
    standby: "",
    totalStandby: "",
    alarm: "",
    totalAlarm: "",
  });
  const [currents, setCurrents] = useState([initial]);
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

  function handleAddNewDevice() {
    // e.preventDefault();
    const updateCurrents = [
      ...currents,
      {
        // using the length of the array for a unique id
        id: currents.length + 1,
        name: initial.name,
        quantity: initial.quantity,
        standby: initial.standby,
        totalStandby: initial.quantity * initial.standby,
        alarm: initial.alarm,
        totalAlarm: initial.quantity * initial.alarm,
      },
    ];
    // update the state to the updatedUsers
    setCurrents(updateCurrents);
    
    
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInitial({ ...initial, [name]: value });

    // setCurrents([...currents,initial])
  };
  // console.log(currents);
  return (
    <>
      <div className="md:p-5 ">
        <Header title={title} para1={para1} para2={para2} />
        <div className="flex flex-col justify-center items-center">
          <form
            className="flex flex-col gap-3 "
            // onSubmit={handleSubmit}
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
                        value={initial.name}                  
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
                        value={initial.quantity}                  
                        onChange={handleInputChange}
                        required
                        // placeholder="Qty."
                        className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        id="standby"                        
                        name="standby"
                        value={initial.standby}
                        // onChange={(e)=>console.log(e)}
                        onChange={handleInputChange}
                        required
                        // placeholder="Qty."
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
                        id="alarm"
                        // name is important
                        name="alarm"
                        value={initial.alarm}
                        // onChange={(e)=>console.log(e)}
                        onChange={handleInputChange}
                        required
                        // placeholder="Qty."
                        className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
          <button
            onClick={handleAddNewDevice}
            className="w-full text-[14px] mt-5 py-2 px-4 border border-[#29abe0] text-[#29abe0] font-semibold"
          >
            Add to Calculator
          </button>
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
