import React from "react";

const Reader = ({ reader, n, wiegand }) => {
  return (
    <tr className="px-2  text-center h-2 border border-[#e2e2e2]">
      <td className="px-2  text-center font-bold h-2 border border-[#e2e2e2]">
        {wiegand}
      </td>
      <td className="px-2  text-center h-2 border border-[#e2e2e2]">
        {reader[n].lvl}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {reader[n].device}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {reader[n].desc}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {reader[n].type}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {reader[n].notes}
      </td>
    </tr>
  );
};
const Input = ({ input, n, inp }) => {
  return (
    <tr className="px-2  text-center h-2 border border-[#e2e2e2]">
      <td className="px-2  text-center font-bold h-2 border border-[#e2e2e2]">
        {inp}
      </td>
      <td className="px-2  text-center h-2 border border-[#e2e2e2]">
        {input[n].lvl}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {input[n].device}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {input[n].desc}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {input[n].type}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {input[n].notes}
      </td>
    </tr>
  );
};
const Output = ({ output, n, outp }) => {
  return (
    <tr className="px-2  text-center h-2 border border-[#e2e2e2]">
      <td className="px-2  text-center font-bold h-2 border border-[#e2e2e2]">
        {outp}
      </td>
      <td className="px-2  text-center h-2 border border-[#e2e2e2]">
        {output[n].lvl}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {output[n].device}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {output[n].desc}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {output[n].type}
      </td>
      <td className="px-2 text-center h-2 border border-[#e2e2e2]">
        {output[n].notes}
      </td>
    </tr>
  );
};

const SoftwareHouseESTAR002
 = ({
  reader,
  input,
  output,
  acpName,
  setAcpName,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAcpName({ ...acpName, [name]: value });
  };

  return (
    <>
      <div className="flex w-1/2">
        <div className="flex px-2 items-center">
          <label className="text-[12px] font-bold mr-5">
            ACCESS CONTROL PANEL:
          </label>
          <input
            type="text"
            id="acp_name"
            name="acp_name"
            value={acpName.acp_name}
            onChange={handleInputChange}
            // placeholder="ACP Name"
            className="w-[150px] mb-1 py-1 px-4 text-[12px] border border-[#e2e2e2] placeholder-gray-400 "
          />
        </div>
        <div className="flex items-center w-1/2  px-2">
          <p className="text-[12px] font-bold mr-1">LOCATION:</p>
          <input
            type="text"
            id="acp_location"
            name="acp_location"
            value={acpName.acp_location}
            onChange={handleInputChange}
            // placeholder="ACP Name"
            className="w-[150px]  mb-1 py-1 px-4 text-[12px] border border-[#e2e2e2] placeholder-gray-400 "
          />
        </div>
      </div>
      <div className="flex w-1/2">
        <div className="flex items-center w-1/2  px-2">
          <p className="text-[12px] font-bold mr-2">IP ADDRESS/MAC ADDRESS:</p>
          <input
            type="text"
            id="acp_ip"
            name="acp_ip"
            value={acpName.acp_ip}
            onChange={handleInputChange}
            // placeholder="ACP Name"
            className="w-[150px] mb-1 py-1 px-4 text-[12px] border border-[#e2e2e2] placeholder-gray-400 "
          />
        </div>
      </div>

      <table id="my-table" className="w-1/2 text-sm text-left text-gray-800 ">
        <thead className="text-xs text-gray-700 bg-gray-50  ">
          <tr className="px-6 py-2 text-center text-white bg-slate-400 ">
            <th
              scope="col"
              colSpan={6}
              className="px-2 py-1 text-lg text-left h-2 border border-[#e2e2e2]"
            >
              ISTAR EDGE
            </th>
          </tr>
          <tr>
            <th
              scope="col"
              colSpan={1}
              className="px-2 py-1 text-center h-2 border border-[#e2e2e2] "
            >
              TERMINAL
            </th>
            <th
              scope="col"
              className="px-2 py-1 text-center h-2 border border-[#e2e2e2] "
              colSpan={1}
            >
              LEVEL
            </th>
            <th
              scope="col"
              className="px-2 py-1 text-center h-2 border border-[#e2e2e2] "
              colSpan={1}
            >
              DEVICE/DOOR ID
            </th>
            <th
              scope="col"
              className="px-2 py-1 text-center h-2 border border-[#e2e2e2] w-[300px]"
              colSpan={1}
            >
              DESCRIPTION
            </th>
            <th
              scope="col"
              className="px-2 py-1 text-center h-2 border border-[#e2e2e2] "
              colSpan={1}
            >
              DEVICE TYPE
            </th>
            <th
              scope="col"
              className="px-2 py-1 text-center h-2 border border-[#e2e2e2] w-[100px]"
              colSpan={1}
            >
              NOTES
            </th>
          </tr>
        </thead>
        <tbody className="text-[12px]">
          <tr className="px-2  text-left h-2 border border-[#e2e2e2]">
            <th
              scope="col"
              colSpan={7}
              className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
            >
              READERS
            </th>
          </tr>
          <Reader reader={reader} n="0" wiegand="WIEGAND1" />
          <Reader reader={reader} n="1" wiegand="WIEGAND2" />
          <tr className="px-2  text-left h-2 border border-[#e2e2e2]">
            <th
              scope="col"
              colSpan={7}
              className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
            >
              INPUTS
            </th>
          </tr>
          <Input input={input} n="0" inp="IN1" />
          <Input input={input} n="1" inp="IN2" />
          <Input input={input} n="2" inp="IN3" />
          <Input input={input} n="3" inp="IN4" />
          <Input input={input} n="4" inp="IN5" />
          <Input input={input} n="5" inp="IN6" />
          <Input input={input} n="6" inp="IN7" />
          <Input input={input} n="7" inp="IN8" />

          <tr className="px-2  text-left h-2 border border-[#e2e2e2]">
            <th
              scope="col"
              colSpan={7}
              className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
            >
              OUTPUTS
            </th>
          </tr>
          <Output output={output} n="0" outp="OUT1" />
          <Output output={output} n="1" outp="OUT2" />
          <Output output={output} n="2" outp="OUT3" />
          <Output output={output} n="3" outp="OUT4" />
        </tbody>
      </table>
    </>
  );
};

export default SoftwareHouseESTAR002
;
