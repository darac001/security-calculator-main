import React, { useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import Header from "./Header";
import img from "../assets/Group2.svg";
import { useState } from "react";
import ReadOnly from "./batterycomponents/ReadOnly";
import Editable from "./batterycomponents/Editable";
import FirstRow from "./batterycomponents/FirstRow";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import XLSX from "xlsx-js-style";
import { MANUFACTURERS, PRODUCTS } from "../constants/products";

const Battery = () => {
  const items = JSON.parse(localStorage.getItem("my-key"));

  const [date, setDate] = useState(new Date());

  const [manuf, setManuf] = useState("--Select--");

  const reset=[{
    id: "",
    name: "",
    quantity: "",
    standby: "",
    totalStandby: "",
    alarm: "",
    totalAlarm: "",
  }]

  // const [currents, setCurrents] = useState(items);
  const [currents, setCurrents] = useState(
    items
      ? items
      : [
          {
            id: 1,
            name: "",
            quantity: "1",
            standby: "",
            totalStandby: "",
            alarm: "",
            totalAlarm: "",
          },
        ]
  );

  const [addNewData, setAddNewData] = useState({
    id: "",
    name: "",
    quantity: "1",
    standby: "",
    totalStandby: "",
    alarm: "",
    totalAlarm: "",
  });
  const [addNewData2, setAddNewData2] = useState({
    id: "",
    name: "",
    quantity: "1",
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
  const [contingency, setContingency] = useState(20);
  const [totalAh, setTotalAh] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [editCurrentId, setEditCurrentId] = useState(null);

  const [requiredBattery, setRequiredBattery] = useState(0);

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
    // console.log(items[1].name);
    if (items.length>1) {
      setCurrentAdded(true);
    }
  }, []);
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
    let total = (
      (1 + Number(contingency) / 100) *
      (Number(ahStandby) + Number(ahAlarm))
    ).toFixed(2);

    let battery = Math.ceil(total);
    // console.log(ahStandbyCalc);
    setSumOfStandby(totalStandbySum);
    setSumOfAlarm(totalAlarmSum);
    setAhStandby(ahStandbyCalc);
    setAhAlarm(ahAlarmCalc);
    setTotalAh(total);
    setRequiredBattery(battery);

    localStorage.setItem("my-key", JSON.stringify(currents));
  }, [
    currents,
    sumOfStandby,
    autonomyStandby,
    sumOfAlarm,
    autonomyAlarm,
    ahStandby,
    ahAlarm,
    contingency,
  ]);

  const title = "BATTERY SIZE CALCULATOR";
  const para1 =
    " Determines size of the battery to meet specific required hours of autonomy based on the load.";
  const para2 = " Enter your values in the calculator below!";

  function handleAddNewDevice(e) {
    e.preventDefault();
    const newDevice = {
      // using the length of the array for a unique id
      id: currents.length + 1,
      name: addNewData.name,
      quantity: addNewData.quantity,
      standby: Number(addNewData.standby).toFixed(2),
      totalStandby: (addNewData.quantity * addNewData.standby).toFixed(2),
      alarm: Number(addNewData.alarm).toFixed(2),
      totalAlarm: (addNewData.quantity * addNewData.alarm).toFixed(2),
    };
    const newCurrents = [...currents, newDevice];

    setCurrents(newCurrents);
    setCurrentAdded(true);
    setAddNewData({
      id: "",
      name: "",
      quantity: "1",
      standby: "",
      totalStandby: "",
      alarm: "",
      totalAlarm: "",
    });
  }

  const resetCalcs = () => {
    setCurrents(reset);
    setCurrentAdded(false)
    localStorage.setItem("my-key", JSON.stringify(reset));
  };

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

  const handleDelete = (currentId) => {
    const newerCurrents = [...currents];
    const indexOfDelete = currents.findIndex(
      (current) => current.id === currentId
    );
    newerCurrents.splice(indexOfDelete, 1);
    setCurrents(newerCurrents);
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

  const cancelEdit = () => {
    setEditCurrentId(null);
  };

  const handleMfgChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setManuf(e.target.value);
    setAddNewData2({ ...addNewData2, [name]: value });
  };

  const handleProductChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    const data = PRODUCTS[`${manuf}`].filter(function (d) {
      return d.name === e.target.value;
    });

    // console.log(data);
    // console.log(data[0].standby);
    addNewData2.standby = data[0].standby;
    addNewData2.alarm = data[0].alarm;
    setAddNewData2({ ...addNewData2, [name]: value });
  };
  const handleProductQtyChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddNewData2({ ...addNewData2, [name]: value });
  };
  function handleAddNewDevice2(e) {
    e.preventDefault();
    const newDevice = {
      // using the length of the array for a unique id
      id: currents.length + 1,
      name: addNewData2.name,
      quantity: addNewData2.quantity,
      standby: Number(addNewData2.standby).toFixed(2),
      totalStandby: (addNewData2.quantity * addNewData2.standby).toFixed(2),
      alarm: Number(addNewData2.alarm).toFixed(2),
      totalAlarm: (addNewData2.quantity * addNewData2.alarm).toFixed(2),
    };
    const newCurrents = [...currents, newDevice];

    setCurrents(newCurrents);
    setCurrentAdded(true);
    setAddNewData({
      id: "",
      name: "",
      quantity: "1",
      standby: "",
      totalStandby: "",
      alarm: "",
      totalAlarm: "",
    });
  }

  // *******************************************************
  //  pdf export

  const createPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text(`Project Name: ${projectName}`, 14, 16);
    doc.setFontSize(10);
    doc.text(`Created: ${date.toLocaleDateString()}`, 14, 22);
    doc.autoTable({
      margin: { top: 30 },
      html: "#my-table",
      theme: "striped",
      columnStyles: {
        0: {
          columnWidth: 10,
        },
        1: {
          columnWidth: 10,
        },
        2: {
          columnWidth: 30,
        },
        3: {
          columnWidth: 30,
        },
        4: {
          columnWidth: 30,
        },
        5: {
          columnWidth: 30,
        },
        6: {
          columnWidth: 30,
        },
      },

      styles: {
        cellPadding: 1,
        fontSize: 8,
        lineColor: [44, 62, 80],
        lineWidth: 0.1,
      },

      headStyles: {
        valign: "middle",
        halign: "left",
        fillColor: [220, 220, 220],
        textColor: [0, 0, 0],
      },
      bodyStyles: { valign: "middle", halign: "left", cellWidth: "50" },
    });
    doc.autoTable({
      columnStyles: {
        0: {
          columnWidth: 5,
        },
        1: {
          columnWidth: 5,
        },
        2: {
          columnWidth: 15,
        },
      },
      html: "#my-table2",
      theme: "striped",
      tableWidth: 60,
      styles: {
        cellPadding: 1,
        fontSize: 8,
        lineColor: [44, 62, 80],
        lineWidth: 0.1,
      },

      headStyles: {
        valign: "middle",
        halign: "center",
        fillColor: [220, 220, 220],
        textColor: [0, 0, 0],
      },
      bodyStyles: { valign: "middle", halign: "left", cellWidth: "30" },
    });
    if (projectName) {
      doc.save(`${projectName}.pdf`);
    } else {
      doc.save("project.pdf");
    }
  };

  // *******************************************************
  // excel export

  const createExcel = () => {
    const new_workbook = XLSX.utils.book_new();
    let tbl1 = document.getElementById("my-table");
    let tbl2 = document.getElementById("my-table2");

    let worksheet_tmp1 = XLSX.utils.table_to_sheet(tbl1);
    let worksheet_tmp2 = XLSX.utils.table_to_sheet(tbl2);

    let a = XLSX.utils.sheet_to_json(worksheet_tmp1, { header: 1 });
    let b = XLSX.utils.sheet_to_json(worksheet_tmp2, { header: 1 });

    a = a.concat("").concat(b);

    let worksheet = XLSX.utils.json_to_sheet(a, { skipHeader: true });
    worksheet["!cols"] = [
      { width: 30 },
      { width: 20 },
      { width: 20 },
      { width: 20 },
      { width: 20 },
      { width: 20 },
    ];
    worksheet["!rows"] = [
      { hpt: 30 },
      { hpt: 20 },
      { hpt: 20 },
      { hpt: 20 },
      { hpt: 20 },
      { hpt: 20 },
    ];
    // worksheet["!cols"] = [{ s: { font: { bold: true, color: { rgb: "AA4A44" } } } }];

    XLSX.utils.book_append_sheet(new_workbook, worksheet, "worksheet");
    if (projectName) {
      XLSX.writeFile(new_workbook, `${projectName}.xlsx`);
    } else {
      XLSX.writeFile(new_workbook, "project.xlsx");
    }
  };

  return (
    <>
      <div className="md:p-5 col-span-2 ">
        <Header title={title} para1={para1} para2={para2} />
        <p className="py-3 text-left text-[12px] font-bold text-[#29abe0]">
          CHOOSE FROM THE LIST (all values are @12VDC)
        </p>

        <div className="flex flex-col justify-center items-center">
          <form
            className="flex flex-col gap-3 min-w-full "
            onSubmit={handleAddNewDevice2}
          >
            <div>
              <table className=" text-sm text-left text-gray-800 ">
                <thead className="text-xs text-gray-700 bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3 ">
                      MANUFACTURER
                    </th>
                    <th scope="col" className="px-6 py-3">
                      MODEL NM.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      QTY.
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                      TOTAL mA
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        className="md:w-[200px] py-3 px-4 border border-[#e2e2e2] text-[14px] text-gray-400  "
                        type="text"
                        id="mfg"
                        name="mfg"
                        value={manuf}
                        onChange={handleMfgChange}
                        required
                      >
                        {/* {SWH.map((prod) => {
                          return <option>{prod.name}</option>;
                        })} */}
                        {MANUFACTURERS.map((mfg) => {
                          return <option>{mfg}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <select
                        className="md:w-[200px] py-3 px-4 border border-[#e2e2e2] text-[14px] text-gray-400  "
                        type="text"
                        id="name"
                        name="name"
                        value={addNewData2.name}
                        onChange={handleProductChange}
                        required
                      >
                        {PRODUCTS[`${manuf}`].map((prod) => {
                          return <option>{prod.name}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        id="quantity"
                        name="quantity"
                        value={addNewData2.quantity||1}
                        onChange={handleProductQtyChange}
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

        <hr className="my-6 w-full" />

        <p className="py-3 mt-10 text-left text-[12px] font-bold text-[#29abe0]">
          CREATE CUSTOM DEVICE
        </p>
        <div className="flex flex-col justify-center items-center">
          <form
            className="flex flex-col gap-3 min-w-full"
            onSubmit={handleAddNewDevice}
          >
            <div>
              <table className=" text-sm text-left text-gray-800 ">
                <thead className="text-xs text-gray-700 bg-gray-50 ">
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
                        className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400 "
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        id="quantity"
                        name="quantity"
                        value={addNewData.quantity||1}
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
                        step={1}
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
                        step={1}
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

      <div className="flex p-5 flex-col md:full w-full col-span-3" id="pdf">
        {/* <div className="text-s font-bold text-white p-2 text-center bg-[#29abe0]">TOTALS</div> */}
        {/* <hr className="mb-4"/> */}
        <form onSubmit={handleEditSubmit}>
          <table
            id="my-table"
            className="w-full text-sm text-left text-gray-800 table-fixed"
          >
            <thead className="text-xs text-gray-700 bg-gray-50  ">
              <tr className="px-6 py-3 text-center text-white  bg-[#29abe0] h-">
                <th
                  scope="col"
                  colSpan={7}
                  className="px-6 py-2 text-lg text-center h-2"
                >
                  TOTALS
                </th>
              </tr>
              <tr>
                <th
                  scope="col"
                  colSpan={3}
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
                  colSpan={2}
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
                      handleDelete={handleDelete}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
          <div className="flex gap-2">
          {currentAdded&&<button
            onClick={resetCalcs}
            type="button"
            className="w-[100px] text-[14px] mt-5 py-2 px-4 border border-[#29abe0] text-[#29abe0] font-semibold"
          >
            RESET
          </button>}

        </div>
          <div>
            <br />
            <br />
            <br />
          </div>
          <div>
            <div className="flex gap-5">
              <div>
                <div className="flex  gap-3">
                  <input
                    type="text"
                    id="name"
                    name="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Project Name"
                    className=" md:w-1/2 mb-2 py-2 px-4 border border-[#e2e2e2] placeholder-gray-400 "
                  />
                  <div>
                    <DatePicker onChange={setDate} selected={date}  />
                  </div>
                </div>
                <table
                  id="my-table2"
                  className="w-full text-xs text-gray-800 bg-gray-50  table-fixed"
                >
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
                      className="px-6 py-2 text-left border border-[#e2e2e2]"
                      colSpan={2}
                    >
                      REQUIRED STANDBY (H)
                    </th>
                    <td className=" py-2 px-4 max-h-2 bg-white border border-[#e2e2e2] placeholder-gray-400">
                      {autonomyStandby}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-2 text-left border border-[#e2e2e2]"
                      colSpan={2}
                    >
                      REQUIRED ALARM (H)
                    </th>
                    <td className=" py-2 px-4 max-h-2 bg-white border border-[#e2e2e2] placeholder-gray-400">
                      {autonomyAlarm}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-2 text-left border border-[#e2e2e2]"
                      colSpan={2}
                    >
                      CONTINGENCY FACTOR (%)
                    </th>
                    <td className=" py-2 px-4 max-h-2 bg-white border border-[#e2e2e2] placeholder-gray-400">
                      {contingency}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-2 text-left h-2 border border-[#e2e2e2]"
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
                      className="px-6 py-2 text-left h-2 border border-[#e2e2e2]"
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
                      className="px-6 py-2 text-left h-2 border border-[#e2e2e2]"
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
                      className="px-6 py-2 text-left h-2 border border-[#e2e2e2]"
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
                      className="px-6 py-2 text-left h-2 border border-[#e2e2e2]"
                      colSpan={2}
                    >
                      TOTAL (AH)
                    </th>
                    <td className=" md:w-full py-2 px-4 max-h-2 bg-white border border-[#e2e2e2] placeholder-gray-400">
                      {totalAh}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-2 text-left h-2 border border-[#e2e2e2]"
                      colSpan={2}
                    >
                      REQUIRED BATTERY (AH)
                    </th>
                    <td className=" md:w-full py-2 px-4 max-h-2 bg-green-200 font-bold border border-[#e2e2e2] placeholder-gray-400">
                      {requiredBattery}
                    </td>
                  </tr>
                </table>
              </div>

              <div className="flex flex-col items-end pr-28">
                <p className="px-6 py-3 text-left text-[16px] font-bold">
                  {" "}
                  ENTER THE VALUES:
                </p>
                <table
                  id="my-table3"
                  className="w-2/3 text-xs text-gray-800 bg-gray-50  table-fixed"
                >
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
                </table>
              </div>

              {/* <div>

             
              <table className="w-1/2 text-sm text-left text-gray-800 ">
                <thead className="text-xs text-gray-700 bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3 ">
                      STANDBY(H)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ALARM(H)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      CONTINGENCY(%)
                    </th>
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
                        className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400 "
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
                        step={1}
                        id="standby"
                        name="standby"
                        value={addNewData.standby}
                        onChange={handleInputChange}
                        required
                        placeholder="0"
                        className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              </div> */}
            </div>
          </div>
        </form>
        <div className="flex gap-2">
          <button
            onClick={createPDF}
            type="button"
            className="w-[100px] text-[14px] mt-5 py-2 px-4 border border-[#29abe0] text-[#29abe0] font-semibold"
          >
            PDF
          </button>
          <button
            onClick={createExcel}
            type="button"
            className="w-[100px] text-[14px] mt-5 py-2 px-4 border border-[#29abe0] text-[#29abe0] font-semibold"
          >
            Excel
          </button>
        </div>
        {/* <img src={img} /> */}
      </div>
    </>
  );
};

export default Battery;
