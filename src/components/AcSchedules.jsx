import { useEffect, useState } from "react";
import Header from "./Header";
import SoftwareHouseUSTAR008 from "./schedulescomponents/SoftwareHouseUSTAR008";
import SoftwareHouseUSTAR016 from "./schedulescomponents/SoftwareHouseUSTAR016";
import { CONTROLLERS } from "../constants/schedulescontrollers";
import {
  ACM_PORTS,
  READER_PORTS,
  INPUT_PORTS,
  OUTPUT_PORTS,
  READER_LABELS,
  OUTPUT_LABELS,
  INPUT_A_LABELS,
  INPUT_B_LABELS,
} from "../constants/portsUSTAR008";

import { jsPDF } from "jspdf";
import "jspdf-autotable";
import XLSX from "xlsx-js-style";

const AcSchedules = () => {
  const items_readers = JSON.parse(localStorage.getItem("readers"));
  const items_inputs = JSON.parse(localStorage.getItem("inputs"));
  const items_outputs = JSON.parse(localStorage.getItem("outputs"));

  const reset_r = [
    { id: 1, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 2, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 3, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 4, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 5, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 6, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 7, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 8, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 9, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 10, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 11, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 12, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 13, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 14, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 15, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 16, lvl: "", device: "", desc: "", type: "", notes: "" },
  ];

  const reset_i = [
    { id: 1, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 2, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 3, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 4, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 5, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 6, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 7, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 8, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 9, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 10, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 11, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 12, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 13, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 14, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 15, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 16, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 17, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 18, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 19, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 20, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 21, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 22, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 23, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 24, lvl: "", device: "", desc: "", type: "", notes: "" },
  ];

  const reset_o = [
    { id: 1, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 2, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 3, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 4, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 5, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 6, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 7, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 8, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 9, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 10, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 11, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 12, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 13, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 14, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 15, lvl: "", device: "", desc: "", type: "", notes: "" },
    { id: 16, lvl: "", device: "", desc: "", type: "", notes: "" },
  ];

  const [reader, setReader] = useState(items_readers ? items_readers : reset_r);
  const [input, setInput] = useState(items_inputs ? items_inputs : reset_i);
  const [output, setOutput] = useState(items_outputs ? items_outputs : reset_o);

  const [addNewReader, setAddNewReader] = useState({
    id: 1,
    lvl: " ",
    device: " ",
    desc: " ",
    type: " ",
    notes: " ",
  });

  const resetCalcs = () => {
    setReader(reset_r);
    setInput(reset_i);
    setOutput(reset_o);
    setAcmPort("ACM#1")
    setRdrPort("")
    setRdrPortLabel("CR")
    setInputPortA("")
    setInputPortALabel("DC")
    setInputPortB("")
    setInputPortBLabel("RX")
    setOutputPort("")
    setOutputPortLabel("ES")
    localStorage.setItem("readers", JSON.stringify(reset_r));
    localStorage.setItem("inputs", JSON.stringify(reset_i));
    localStorage.setItem("outputs", JSON.stringify(reset_o));
  };

  const title = "ACCESS CONTROL SCHEDULES";

  const [manuf, setManuf] = useState("--Select--");


  const handleMfgChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setManuf(e.target.value);
  };
  const [rdrPort, setRdrPort] = useState("--Select--");
  const [rdrPortLabel, setRdrPortLabel] = useState("CR");
  const [inputPortA, setInputPortA] = useState("--Select--");
  const [inputPortALabel, setInputPortALabel] = useState("DC");
  const [inputPortB, setInputPortB] = useState("--Select--");
  const [inputPortBLabel, setInputPortBLabel] = useState("RX");
  const [outputPort, setOutputPort] = useState("--Select--");
  const [outputPortLabel, setOutputPortLabel] = useState("ES");
  const [acmPort, setAcmPort] = useState("ACM#1");

  const handleRdrPortChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setRdrPort(e.target.value);
  };
  const handleRdrPortLabelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setRdrPortLabel(e.target.value);
  };
  const handleInputPortAChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setInputPortA(e.target.value);
  };
  const handleInputPortALabelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setInputPortALabel(e.target.value);
  };
  const handleInputPortBChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setInputPortB(e.target.value);
  };
  const handleInputPortBLabelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setInputPortBLabel(e.target.value);
  };
  const handleOutputPortChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setOutputPort(e.target.value);
  };
  const handleOutputPortLabelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setOutputPortLabel(e.target.value);
  };
  const handleAcmPortChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setAcmPort(e.target.value);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddNewReader({ ...addNewReader, [name]: value });
  };

  function handleAddNewDevice(e) {
    e.preventDefault();
    // ********************
    // add readers
    let updatedList = reader.map((dev) => {
      if ((acmPort == "ACM#1")) {
        if (dev.id == rdrPort) {
          return {
            ...dev,
            lvl: addNewReader.lvl,
            device: addNewReader.device,
            desc: addNewReader.desc,
            notes: addNewReader.notes,
            type: rdrPortLabel,
          };
        }
        return dev;
      }
      else{
        if (dev.id == Number(rdrPort)+8) {
          return {
            ...dev,
            lvl: addNewReader.lvl,
            device: addNewReader.device,
            desc: addNewReader.desc,
            notes: addNewReader.notes,
            type: rdrPortLabel,
          };
        }
        return dev;
      }
    });
    setReader(updatedList);
    // ********************
    // add inputs
    let updatedInputList = input.map((dev) => {
      if (dev.id == inputPortA) {
        return {
          ...dev,
          lvl: addNewReader.lvl,
          device: addNewReader.device,
          desc: addNewReader.desc,
          notes: addNewReader.notes,
          type: inputPortALabel,
        };
      }
      if (dev.id == inputPortB) {
        return {
          ...dev,
          lvl: addNewReader.lvl,
          device: addNewReader.device,
          desc: addNewReader.desc,
          notes: addNewReader.notes,
          type: inputPortBLabel,
        };
      }

      return dev;
    });
    setInput(updatedInputList);
    // ********************
    // add outputs
    let updatedOutputList = output.map((dev) => {
      if (dev.id == outputPort) {
        return {
          ...dev,
          lvl: addNewReader.lvl,
          device: addNewReader.device,
          desc: addNewReader.desc,
          notes: addNewReader.notes,
          type: outputPortLabel,
        };
      }

      return dev;
    });
    setOutput(updatedOutputList);
  }

  const resetInput = (e) => {
    e.target.value = "";
  };

  useEffect(() => {
    localStorage.setItem("readers", JSON.stringify(reader));
    localStorage.setItem("inputs", JSON.stringify(input));
    localStorage.setItem("outputs", JSON.stringify(output));
  }, [reader, input, output]);

  // *******************************************************
  //  pdf export

  const createPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      format: "a3",
    });
    doc.setFontSize(10);
    // doc.text(`Project Name: ${projectName}`, 14, 16);
    // doc.setFontSize(10);
    // doc.text(`Created: ${date.toLocaleDateString()}`, 14, 22);
    doc.autoTable({
      margin: { top: 15 },
      html: "#my-table",
      theme: "striped",
      columnStyles: {
        0: {
          columnWidth: 20,
        },
        1: {
          columnWidth: 15,
        },
        2: {
          columnWidth: 30,
        },
        3: {
          columnWidth: 50,
        },
        4: {
          columnWidth: 25,
        },
        5: {
          columnWidth: 40,
        },
      },

      styles: {
        cellPadding: 1,
        valign: "middle",
        halign: "center",
        fontSize: 7,
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

    doc.save("project.pdf");
  };

  return (
    <>
      <div className="md:p-5 col-span-5 ">
        <Header title={title} />

        <div className="flex flex-col justify-center items-left">
          <table className=" text-sm text-left text-gray-800 ">
            <thead className="text-xs text-gray-700 bg-gray-50 ">
              <tr>
                <th scope="col">SELECT CONTROLLER FROM THE LIST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select
                    className="md:w-[200px] py-1 px-4 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100 "
                    type="text"
                    id="mfg"
                    name="mfg"
                    value={manuf}
                    onChange={handleMfgChange}
                    required
                  >
                    {CONTROLLERS.map((cnt) => {
                      return <option>{cnt}</option>;
                    })}
                  </select>
                </td>
                <td>
                  <button
                    onClick={resetCalcs}
                    type="button"
                    className="w-[100px] text-[14px] mt-5 py-2 px-4 border border-[#29abe0] text-[#29abe0] font-semibold"
                  >
                    RESET
                  </button>
                </td>
                <button
                  onClick={createPDF}
                  type="button"
                  className="w-[100px] text-[14px] mt-5 py-2 px-4 border border-[#29abe0] text-[#29abe0] font-semibold"
                >
                  PDF
                </button>
              </tr>
            </tbody>
          </table>
          <hr className="my-6 w-full" />
          <p className="pb-3 text-left text-[12px] font-bold text-[#29abe0]">
            ADD NEW DOOR/DEVICE:
          </p>
          <form
            className="flex flex-col gap-3 min-w-full bg-slate-200 p-4"
            onSubmit={handleAddNewDevice}
          >
            <div>
              <table className=" text-sm text-left text-gray-800 ">
                <thead className="text-xs text-gray-700 bg-slate-200 ">
                  <tr>
                    <th scope="col" className="py-1 ">
                      Device/Door ID
                    </th>
                    <th scope="col" className="py-1  ">
                      Level
                    </th>
                    <th scope="col" className="py-1 ">
                      Description
                    </th>
                    <th scope="col" className="py-1 ">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        id="device"
                        name="device"
                        onFocus={(e) => resetInput(e)}
                        value={addNewReader.device}
                        onChange={handleInputChange}
                        className=" w-[150px] py-1 px-4 border border-[#e2e2e2] hover:bg-slate-100 "
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        id="lvl"
                        name="lvl"
                        onFocus={(e) => resetInput(e)}
                        value={addNewReader.lvl}
                        onChange={handleInputChange}
                        className=" w-[150px] py-1 px-4 border border-[#e2e2e2] hover:bg-slate-100 "
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        id="desc"
                        name="desc"
                        onFocus={(e) => resetInput(e)}
                        value={addNewReader.desc}
                        onChange={handleInputChange}
                        className=" w-[250px] py-1 px-4 border border-[#e2e2e2]  hover:bg-slate-100 "
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        id="notes"
                        name="notes"
                        onFocus={(e) => resetInput(e)}
                        value={addNewReader.notes}
                        onChange={handleInputChange}
                        className=" w-[250px] py-1 px-4 border border-[#e2e2e2]  hover:bg-slate-100 "
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className=" text-sm text-left text-gray-800 mt-2 ">
                <thead className="text-xs text-gray-700 bg-slate-200 ">
                  <tr>
                    <th scope="col" className="py-1 " colSpan={1}>
                      ACM
                    </th>
                    <th scope="col" className="py-1 " colSpan={2}>
                      Reader Port
                    </th>

                    <th scope="col" className="py-1  " colSpan={2}>
                      Input Port A
                    </th>

                    <th scope="col" className="py-1  " colSpan={2}>
                      Input Port B
                    </th>

                    <th scope="col" className="py-1  " colSpan={2}>
                      Output Port
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100  mr-4"
                        type="text"
                        id="acmPort"
                        name="acmPort"
                        value={acmPort}
                        onChange={handleAcmPortChange}
                        required
                      >
                        {ACM_PORTS.map((rdr) => {
                          return <option>{rdr}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <select
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100  "
                        type="text"
                        id="reader"
                        name="reader"
                        value={rdrPort}
                        onChange={handleRdrPortChange}
                        required
                      >
                        {READER_PORTS.map((rdr) => {
                          return <option>{rdr}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <select
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100 mr-4 "
                        type="text"
                        id="reader"
                        name="reader"
                        value={rdrPortLabel}
                        onChange={handleRdrPortLabelChange}
                        required
                      >
                        {READER_LABELS.map((rdr_lbl) => {
                          return <option>{rdr_lbl}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <select
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100  "
                        type="text"
                        id="inputA"
                        name="inputA"
                        value={inputPortA}
                        onChange={handleInputPortAChange}
                        required
                      >
                        {INPUT_PORTS.map((inp) => {
                          return <option>{inp}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <select
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100 mr-4"
                        type="text"
                        id="reader"
                        name="reader"
                        value={inputPortALabel}
                        onChange={handleInputPortALabelChange}
                        required
                      >
                        {INPUT_A_LABELS.map((inp_lbl) => {
                          return <option>{inp_lbl}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <select
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100  "
                        type="text"
                        id="inputB"
                        name="inputB"
                        value={inputPortB}
                        onChange={handleInputPortBChange}
                        required
                      >
                        {INPUT_PORTS.map((inp) => {
                          return <option>{inp}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <select
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100 mr-4"
                        type="text"
                        id="reader"
                        name="reader"
                        value={inputPortBLabel}
                        onChange={handleInputPortBLabelChange}
                        required
                      >
                        {INPUT_B_LABELS.map((inp_lbl) => {
                          return <option>{inp_lbl}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <select
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100  "
                        type="text"
                        id="output"
                        name="output"
                        value={outputPort}
                        onChange={handleOutputPortChange}
                        required
                      >
                        {OUTPUT_PORTS.map((outp) => {
                          return <option>{outp}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <select
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-800 hover:bg-slate-100 mr-4"
                        type="text"
                        id="reader"
                        name="reader"
                        value={outputPortLabel}
                        onChange={handleOutputPortLabelChange}
                        required
                      >
                        {OUTPUT_LABELS.map((outp_lbl) => {
                          return <option>{outp_lbl}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <button
                        className=" text-[12px] mx-1 py-0.5 px-3 border border-[#29abe0] text-white bg-[#29abe0] font-semibold "
                        type="submit"
                      >
                        Add to Schedule
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>

      <div className="flex p-5 flex-col  ">
        {manuf=="Software House USTAR008"&&<SoftwareHouseUSTAR008 reader={reader} input={input} output={output} />}
        {manuf=="Software House USTAR016"&&<SoftwareHouseUSTAR016 reader={reader} input={input} output={output} />}
        
      </div>
    </>
  );
};

export default AcSchedules;
