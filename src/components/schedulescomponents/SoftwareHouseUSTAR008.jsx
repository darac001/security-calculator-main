import React from "react";

const Reader = ({ reader, n, wiegand }) => {
  return (
    <tr className="px-6  text-center h-2 border border-[#e2e2e2]">
      <td className="px-6  text-center font-bold h-2 border border-[#e2e2e2]">
        {wiegand}
      </td>
      <td className="px-6  text-center h-2 border border-[#e2e2e2]">
        {reader[n].lvl}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {reader[n].device}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {reader[n].desc}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {reader[n].type}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {reader[n].notes}
      </td>
    </tr>
  );
};
const Input = ({ input, n, inp }) => {
  return (
    <tr className="px-6  text-center h-2 border border-[#e2e2e2]">
      <td className="px-6  text-center font-bold h-2 border border-[#e2e2e2]">
        {inp}
      </td>
      <td className="px-6  text-center h-2 border border-[#e2e2e2]">
        {input[n].lvl}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {input[n].device}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {input[n].desc}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {input[n].type}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {input[n].notes}
      </td>
    </tr>
  );
};
const Output = ({ output, n, outp }) => {
  return (
    <tr className="px-6  text-center h-2 border border-[#e2e2e2]">
      <td className="px-6  text-center font-bold h-2 border border-[#e2e2e2]">
        {outp}
      </td>
      <td className="px-6  text-center h-2 border border-[#e2e2e2]">
        {output[n].lvl}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {output[n].device}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {output[n].desc}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {output[n].type}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {output[n].notes}
      </td>
    </tr>
  );
};

const SoftwareHouseUSTAR008 = ({ reader,input,output }) => {
  return (
    <>
      <div>USTAR008</div>
      <table id="my-table" className="w-full text-sm text-left text-gray-800 ">
        <thead className="text-xs text-gray-700 bg-gray-50  ">
          <tr className="px-6 py-2 text-center text-white bg-slate-400 ">
            <th
              scope="col"
              colSpan={7}
              className="px-6 py-1 text-lg text-left h-2"
            >
              ACM#1
            </th>
          </tr>
          <tr>
            <th
              scope="col"
              colSpan={1}
              className="px-6 py-1 text-center h-2 border border-[#e2e2e2]"
            >
              TERMINAL
            </th>
            <th
              scope="col"
              className="px-6 py-1 text-center h-2 border border-[#e2e2e2]"
              colSpan={1}
            >
              LEVEL
            </th>
            <th
              scope="col"
              className="px-6 py-1 text-center h-2 border border-[#e2e2e2]"
              colSpan={1}
            >
              DEVICE/DOOR ID
            </th>
            <th
              scope="col"
              className="px-6 py-1 text-center h-2 border border-[#e2e2e2]"
              colSpan={1}
            >
              DESCRIPTION
            </th>
            <th
              scope="col"
              className="px-6 py-1 text-center h-2 border border-[#e2e2e2]"
              colSpan={1}
            >
              DEVICE TYPE
            </th>
            <th
              scope="col"
              className="px-6 py-1 text-center h-2 border border-[#e2e2e2]"
              colSpan={1}
            >
              NOTES
            </th>
          </tr>
        </thead>
        <tbody className="text-[12px]">
          <tr className="px-6  text-left h-2 border border-[#e2e2e2]">
            <th
              scope="col"
              colSpan={7}
              className="px-6  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
            >
              READERS
            </th>
          </tr>
          <Reader reader={reader} n="0" wiegand="WIEGAND1" />
          <Reader reader={reader} n="1" wiegand="WIEGAND2" />
          <tr className="px-6  text-left h-2 border border-[#e2e2e2]">
            <th
              scope="col"
              colSpan={7}
              className="px-6  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
            >
              INPUTS
            </th>
          </tr>
            <Input input={input} n="0" inp="IN1"/>
            <Input input={input} n="1" inp="IN2"/>
          <tr className="px-6  text-left h-2 border border-[#e2e2e2]">
            <th
              scope="col"
              colSpan={7}
              className="px-6  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
            >
              OUTPUTS
            </th>
          </tr>
            <Output output={output} n="0" outp="OUT1"/>
            <Output output={output} n="1" outp="OUT2"/>
        </tbody>
      </table>
    </>
  );
};

export default SoftwareHouseUSTAR008;
