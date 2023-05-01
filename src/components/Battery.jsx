import React, { useEffect } from "react";
import Header from "./Header";
import img from "../assets/Group2.svg";
import { useState } from "react";
import ReadOnly from "./batterycomponents/ReadOnly";
import Editable from "./batterycomponents/Editable";
import FirstRow from "./batterycomponents/FirstRow";

const Battery = () => {
  const [currents, setCurrents] = useState([
    {
      id: 1,
      name: "",
      quantity: "",
      standby: "",
      totalStandby: "",
      alarm: "",
      totalAlarm: "",
    },
  ]);

  const [addNewData, setAddNewData] = useState({
    id: "",
    name: "",
    quantity: "",
    standby: "",
    totalStandby: "",
    alarm: "",
    totalAlarm: "",
  });
  const [editData, setEditData] = useState({
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
  const [currentAdded, setCurrentAdded] = useState(false);
  const [autonomyStandby, setAutonomyStandby] = useState(4);
  const [autonomyAlarm, setAutonomyAlarm] = useState(0.5);
  const [ahStandby, setAhStandby] = useState(0);
  const [ahAlarm, setAhAlarm] = useState(0);
  const [contingency,setContingency]=useState(20)
  const [totalAh,setTotalAh]=useState(0)

  const [editCurrentId, setEditCurrentId] = useState(null);

  let totalStandbySum = currents.reduce((total, current) => {
    return (Number(total) + Number(current.totalStandby)).toFixed(2);
  }, 0);
  let totalAlarmSum = currents.reduce((total, current) => {
    return (Number(total) + Number(current.totalAlarm)).toFixed(2);
  }, 0);

  const filteredCurrents = currents.filter((current) => {
    return current.name !== "";
  });
  // console.log(filteredCurrents);
  // console.log(currents);

  useEffect(() => {
    // console.log(totalStandbySum);
    // console.log(totalAlarmSum);
    let ahStandbyCalc = (
      (Number(autonomyStandby) * Number(sumOfStandby)) /
      1000
    ).toFixed(2);
    let ahAlarmCalc = (
      (Number(autonomyAlarm) * Number(sumOfAlarm)) /
      1000
    ).toFixed(2);

  // add 20% contingency to the total
    let total = ((1 + Number(contingency)/100)*(Number(ahStandby)+Number(ahAlarm))).toFixed(2)
    // console.log(ahStandbyCalc);
    setSumOfStandby(totalStandbySum);
    setSumOfAlarm(totalAlarmSum);
    setAhStandby(ahStandbyCalc);
    setAhAlarm(ahAlarmCalc);
    setTotalAh(total)
  }, [currents, sumOfStandby, autonomyStandby, sumOfAlarm, autonomyAlarm,ahStandby,ahAlarm,contingency]);

  const title = "BATTERY SIZE CALCULATOR";
  const para1 = " xxxxxxxxxxxxxxxxx";
  const para2 =
    " xxxxxxxxxxxxxxxxxxxxxxxxxxxalculator is designed for applications using AWG and mm2 sizes only. Enter your values in the calculator below!";

  function handleAddNewDevice(e) {
    e.preventDefault();
    const newDevice = {
      // using the length of the array for a unique id
      id: currents.length + 1,
      name: addNewData.name,
      quantity: addNewData.quantity,
      standby: addNewData.standby,
      totalStandby: (addNewData.quantity * addNewData.standby).toFixed(2),
      alarm: addNewData.alarm,
      totalAlarm: (addNewData.quantity * addNewData.alarm).toFixed(2),
    };
    const newCurrents = [...currents, newDevice];

    setCurrents(newCurrents);
    setCurrentAdded(true);
    setAddNewData({
      id: "",
      name: "",
      quantity: "",
      standby: "",
      totalStandby: "",
      alarm: "",
      totalAlarm: "",
    });
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddNewData({ ...addNewData, [name]: value });
  };

  const handleEditClick = (e, current) => {
    e.preventDefault();
    setEditCurrentId(current.id);

    // show existing values to be edited in the edit form once you click the edit button
    const editValues = {
      name: current.name,
      quantity: current.quantity,
      standby: current.standby,
      totalStandby: (current.quantity * current.standby).toFixed(2),
      alarm: current.alarm,
      totalAlarm: (current.quantity * current.alarm).toFixed(2),
    };

    setEditData(editValues);
  };
  const handleEditInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const editedCurrent = {
      id: editCurrentId,
      name: editData.name,
      quantity: editData.quantity,
      standby: editData.standby,
      totalStandby: (editData.quantity * editData.standby).toFixed(2),
      alarm: editData.alarm,
      totalAlarm: (editData.quantity * editData.alarm).toFixed(2),
    };

    const newCurrents = [...currents];
    const indexOfEditedCurrent = currents.findIndex(
      (current) => current.id === editCurrentId
    );
    newCurrents[indexOfEditedCurrent] = editedCurrent;
    setCurrents(newCurrents);
    setEditCurrentId(null);
  };

  const cancelEdit=()=>{
    setEditCurrentId(null)
  }

  return (
    <>
      <div className="md:p-5 col-span-2 ">
        <Header title={title} para1={para1} para2={para2} />
        <div className="flex flex-col justify-center items-center">
          <form className="flex flex-col gap-3 " onSubmit={handleAddNewDevice}>
            <div>
              <table className="w-full text-sm text-left text-gray-800 ">
                <thead className="text-xs text-gray-700 bg-gray-50 ">
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
                    <th scope="col" className="px-6 py-3 ">
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
                        placeholder="e.g. Glassbreak"
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

      <div className="flex p-5 flex-col md:full w-full col-span-3">
        {/* <div className="text-s font-bold text-white p-2 text-center bg-[#29abe0]">TOTALS</div> */}
        {/* <hr className="mb-4"/> */}
        <form onSubmit={handleEditSubmit}>
          <table className="w-full text-sm text-left text-gray-800 table-fixed">
            <thead className="text-xs text-gray-700 bg-gray-50  ">
              <tr className="px-6 py-3 text-center text-white  bg-[#29abe0] h-">
                <th
                  scope="col"
                  colSpan={6}
                  className="px-6 py-2 text-lg text-center h-2"
                >
                  TOTALS
                </th>
              </tr>
              <tr>
                <th
                  scope="col"
                  colSpan={2}
                  className="px-6 py-3 text-center h-2 border border-[#e2e2e2]"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center h-2 border border-[#e2e2e2]"
                  colSpan={2}
                >
                  STANDBY CURRENT
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center h-2 border border-[#e2e2e2]"
                  colSpan={2}
                >
                  ALARM CURRENT
                </th>
              </tr>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center h-2 border border-[#e2e2e2]"
                >
                  DESCRIPTION
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center h-2 border border-[#e2e2e2]"
                >
                  QTY.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center h-2 border border-[#e2e2e2]"
                >
                  mA
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center h-2 border border-[#e2e2e2]"
                >
                  TOTAL mA
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center h-2 border border-[#e2e2e2]"
                >
                  mA
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center h-2 border border-[#e2e2e2]"
                >
                  TOTAL mA
                </th>
                {/* <th scope="col" className="px-6 py-3 text-center h-2 border border-[#e2e2e2]">
                  ACTIONS
                </th> */}
              </tr>
            </thead>
            <tbody>
              {!currentAdded && <FirstRow />}

              {filteredCurrents.map((current) => (
                <>
                  {editCurrentId === current.id ? (
                    <Editable
                      editData={editData}
                      handleEditInputChange={handleEditInputChange}
                      cancelEdit={cancelEdit}
                    />
                  ) : (
                    <ReadOnly
                      current={current}
                      currentAdded={currentAdded}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
          <div>
            <br />
            <br />
            <br />
          </div>
          <div>
            <div className="grid grid-cols-5">
              <table className="w-full text-xs text-gray-800 bg-gray-50  table-fixed col-span-2">
                <tr className="px-6 py-3 text-center text-white  bg-[#29abe0] ">
                  <th
                    scope="col"
                    colSpan={3}
                    className="px-6 py-2 text-lg text-center h-2"
                  >
                    SUMMARY
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left border border-[#e2e2e2]"
                    colSpan={2}
                  >
                    REQUIRED STANDBY (H)
                  </th>
                  <td className="bg-white border p-1 border-[#e2e2e2] placeholder-gray-400">
                    <input
                      type="number"
                      min="0"
                      step={0.1}
                      id="autonomyStandby"
                      name="autonomyStandby"
                      value={autonomyStandby}
                      onChange={(e) => setAutonomyStandby(e.target.value)}
                      required
                      placeholder="Enter number of hours"
                      className=" w-full py-1 px-4 border border-[#c7c4c4] placeholder-gray-400  "
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left border border-[#e2e2e2]"
                    colSpan={2}
                  >
                    REQUIRED ALARM (H)
                  </th>
                  <td className="bg-white border p-1 border-[#e2e2e2] placeholder-gray-400">
                    <input
                      type="number"
                      min="0"
                      step={0.1}
                      id="autonomyAlarm"
                      name="autonomyAlarm"
                      value={autonomyAlarm}
                      onChange={(e) => setAutonomyAlarm(e.target.value)}
                      required
                      placeholder="Enter number of hours"
                      className=" w-full py-1 px-4 border border-[#c7c4c4] placeholder-gray-400  "
                      />
                  </td>
                      </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left border border-[#e2e2e2]"
                      colSpan={2}
                    >
                      CONTINGENCY FACTOR (%)
                    </th>
                    <td className="bg-white border p-1 border-[#e2e2e2] placeholder-gray-400">
                      <input
                        type="number"
                        min="0"
                        id="contingency"
                        name="autonomyAlarm"
                        value={contingency}
                        onChange={(e) => setContingency(e.target.value)}
                        required
                        placeholder="Enter number of hours"
                        className=" w-full py-1 px-4 border border-[#c7c4c4] placeholder-gray-400  "
                      />
                    </td>
                  </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left h-2 border border-[#e2e2e2]"
                    colSpan={2}
                  >
                    TOTAL STANDBY (mA)
                  </th>
                  <td className=" py-2 px-4 max-h-2 bg-white border border-[#e2e2e2] placeholder-gray-400">
                    {sumOfStandby}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left h-2 border border-[#e2e2e2]"
                    colSpan={2}
                  >
                    TOTAL ALARM (mA)
                  </th>
                  <td className=" md:w-full py-2 px-4 max-h-2 bg-white border border-[#e2e2e2] placeholder-gray-400">
                    {sumOfAlarm}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left h-2 border border-[#e2e2e2]"
                    colSpan={2}
                  >
                    TOTAL STANDBY (AH)
                  </th>
                  <td className=" md:w-full py-2 px-4 max-h-2 bg-white border border-[#e2e2e2] placeholder-gray-400">
                    {ahStandby}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left h-2 border border-[#e2e2e2]"
                    colSpan={2}
                  >
                    TOTAL ALARM (AH)
                  </th>
                  <td className=" md:w-full py-2 px-4 max-h-2 bg-white border border-[#e2e2e2] placeholder-gray-400">
                    {ahAlarm}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left h-2 border border-[#e2e2e2]"
                    colSpan={2}
                  >
                    TOTAL (AH)
                  </th>
                  <td className=" md:w-full py-2 px-4 max-h-2 bg-white border border-[#e2e2e2] placeholder-gray-400">
                    {totalAh}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </form>
        {/* <img src={img} /> */}
      </div>
    </>
  );
};

export default Battery;
