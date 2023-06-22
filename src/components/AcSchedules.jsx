import { useState } from "react";
import Header from "./Header";
import SoftwareHouseUSTAR008 from "./schedulescomponents/SoftwareHouseUSTAR008";
import { CONTROLLERS } from "../constants/schedulescontrollers";
import {
  READER_PORTS,
  INPUT_PORTS,
  OUTPUT_PORTS,
  READER_LABELS,
  OUTPUT_LABELS,
  INPUT_A_LABELS,
  INPUT_B_LABELS,
} from "../constants/portsUSTAR008";

const AcSchedules = () => {
  const [reader, setReader] = useState([
    { id: 1, lvl: "-", device: "-", desc: "-", type: "-", notes: "-" },
    { id: 2, lvl: "-", device: "-", desc: "-", type: "-", notes: "-" },
  ]);
  const [input, setInput] = useState([
    { id: 1, lvl: "-", device: "-", desc: "-", type: "-", notes: "-" },
    { id: 2, lvl: "-", device: "-", desc: "-", type: "-", notes: "-" },
  ]);
  const [output, setOutput] = useState([
    { id: 1, lvl: "-", device: "-", desc: "-", type: "-", notes: "-" },
    { id: 2, lvl: "-", device: "-", desc: "-", type: "-", notes: "-" },
  ]);

  const [addNewReader, setAddNewReader] = useState({
    id: 1,
    lvl: " ",
    device: " ",
    desc: " ",
    type: " ",
    notes: " ",
  });

  const title = "ACCESS CONTROL SCHEDULES";

  const [manuf, setManuf] = useState("--Select--");
  const [isSWHUSTAR008, setIsSWHUSTAR008] = useState(false);
  const handleMfgChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setManuf(e.target.value);
    setIsSWHUSTAR008(true);
  };
  const [rdrPort, setRdrPort] = useState("--Select--");
  const [rdrPortLabel, setRdrPortLabel] = useState("--Select--");
  const [inputPortA, setInputPortA] = useState("--Select--");
  const [inputPortALabel, setInputPortALabel] = useState("--Select--");
  const [inputPortB, setInputPortB] = useState("--Select--");
  const [inputPortBLabel, setInputPortBLabel] = useState("--Select--");
  const [outputPort, setOutputPort] = useState("--Select--");
  const [outputPortLabel, setOutputPortLabel] = useState("--Select--");

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

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddNewReader({ ...addNewReader, [name]: value });
  };

  function handleAddNewDevice(e) {
    e.preventDefault();
    // add reader
    let updatedList = reader.map((dev) => {
      if (dev.id == rdrPort) {
        return {
          ...dev,
          lvl: addNewReader.lvl,
          device: addNewReader.device,
          desc: addNewReader.desc,
        };
      }
      return dev;
    });
    setReader(updatedList);
    // add inputs
    let updatedInputList = input.map((dev) => {
      if (dev.id == inputPortA || dev.id == inputPortB) {
        return {
          ...dev,
          lvl: addNewReader.lvl,
          device: addNewReader.device,
          desc: addNewReader.desc,
        };
      }

      return dev;
    });
    setInput(updatedInputList);
    // add outputs
    let updatedOutputList = output.map((dev) => {
      if (dev.id == outputPort) {
        return {
          ...dev,
          lvl: addNewReader.lvl,
          device: addNewReader.device,
          desc: addNewReader.desc,
        };
      }

      return dev;
    });
    setOutput(updatedOutputList);
  }

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
                    className="md:w-[200px] py-1 px-4 border border-[#e2e2e2] text-[14px] text-gray-400 hover:bg-slate-100 "
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
              </tr>
            </tbody>
          </table>
          <hr className="my-6 w-full" />
          <p className="pb-3 text-left text-[12px] font-bold text-[#29abe0]">
            ADD NEW DOOR/DEVICE:
          </p>
          <form
            className="flex flex-col gap-3 min-w-full "
            onSubmit={handleAddNewDevice}
          >
            <div>
              <table className=" text-sm text-left text-gray-800 ">
                <thead className="text-xs text-gray-700 bg-gray-50 ">
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        id="device"
                        name="device"
                        value={addNewReader.device}
                        onChange={handleInputChange}
                        required
                        
                        className=" w-[150px] py-1 px-4 border border-[#e2e2e2] placeholder-gray-400 hover:bg-slate-100 "
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        id="lvl"
                        name="lvl"
                        value={addNewReader.lvl}
                        onChange={handleInputChange}
                        className=" w-[150px] py-1 px-4 border border-[#e2e2e2] placeholder-gray-400  hover:bg-slate-100 "
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        id="desc"
                        name="desc"
                        value={addNewReader.desc}
                        onChange={handleInputChange}
                        required
                        
                        className=" w-[250px] py-1 px-4 border border-[#e2e2e2] placeholder-gray-400  hover:bg-slate-100 "
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className=" text-sm text-left text-gray-800 mt-2 ">
                <thead className="text-xs text-gray-700 bg-gray-50 ">
                  <tr>
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
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-400 hover:bg-slate-100  "
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
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-400 hover:bg-slate-100 mr-4 "
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
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-400 hover:bg-slate-100  "
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
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-400 hover:bg-slate-100 mr-4"
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
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-400 hover:bg-slate-100  "
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
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-400 hover:bg-slate-100 mr-4"
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
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-400 hover:bg-slate-100  "
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
                        className=" py-1 px-2 border border-[#e2e2e2] text-[14px] text-gray-400 hover:bg-slate-100 mr-4"
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

      <div className="flex p-5 flex-col w-[800px] " id="pdf">
        <SoftwareHouseUSTAR008 reader={reader} input={input} output={output} />
      </div>
    </>
  );
};

export default AcSchedules;
