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

const SoftwareHouseUSTAR008 = ({ reader,input,output }) => {
  return (
    <>
    
      <table id="my-table" className="w-1/2 text-sm text-left text-gray-800 ">
        <thead className="text-xs text-gray-700 bg-gray-50  ">
          <tr className="px-6 py-2 text-center text-white bg-slate-400 ">
            <th
              scope="col"
              colSpan={6}
              className="px-2 py-1 text-lg text-left h-2 border border-[#e2e2e2]"
            >
              ACM#1
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
          <Reader reader={reader} n="2" wiegand="WIEGAND3" />
          <Reader reader={reader} n="3" wiegand="WIEGAND4" />
          <Reader reader={reader} n="4" wiegand="WIEGAND5" />
          <Reader reader={reader} n="5" wiegand="WIEGAND6" />
          <Reader reader={reader} n="6" wiegand="WIEGAND7" />
          <Reader reader={reader} n="7" wiegand="WIEGAND8" />
          <tr className="px-2  text-left h-2 border border-[#e2e2e2]">
            <th
              scope="col"
              colSpan={7}
              className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
            >
              INPUTS
            </th>
          </tr>
            <Input input={input} n="0" inp="IN1"/>
            <Input input={input} n="1" inp="IN2"/>
            <Input input={input} n="2" inp="IN3"/>
            <Input input={input} n="3" inp="IN4"/>
            <Input input={input} n="4" inp="IN5"/>
            <Input input={input} n="5" inp="IN6"/>
            <Input input={input} n="6" inp="IN7"/>
            <Input input={input} n="7" inp="IN8"/>
            <Input input={input} n="8" inp="IN9"/>
            <Input input={input} n="9" inp="IN10"/>
            <Input input={input} n="10" inp="IN11"/>
            <Input input={input} n="11" inp="IN12"/>
            <Input input={input} n="12" inp="IN13"/>
            <Input input={input} n="13" inp="IN14"/>
            <Input input={input} n="14" inp="IN15"/>
            <Input input={input} n="15" inp="IN16"/>
            <Input input={input} n="16" inp="IN17"/>
            <Input input={input} n="17" inp="IN18"/>
            <Input input={input} n="18" inp="IN19"/>
            <Input input={input} n="19" inp="IN20"/>
            <Input input={input} n="20" inp="IN21"/>
            <Input input={input} n="21" inp="IN22"/>
            <Input input={input} n="22" inp="IN23"/>
            <Input input={input} n="23" inp="IN24"/>
          <tr className="px-2  text-left h-2 border border-[#e2e2e2]">
            <th
              scope="col"
              colSpan={7}
              className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
            >
              OUTPUTS
            </th>
          </tr>
            <Output output={output} n="0" outp="OUT1"/>
            <Output output={output} n="1" outp="OUT2"/>
            <Output output={output} n="2" outp="OUT3"/>
            <Output output={output} n="3" outp="OUT4"/>
            <Output output={output} n="4" outp="OUT5"/>
            <Output output={output} n="5" outp="OUT6"/>
            <Output output={output} n="6" outp="OUT7"/>
            <Output output={output} n="7" outp="OUT8"/>
            <Output output={output} n="8" outp="OUT9"/>
            <Output output={output} n="9" outp="OUT10"/>
            <Output output={output} n="10" outp="OUT11"/>
            <Output output={output} n="11" outp="OUT12"/>
            <Output output={output} n="12" outp="OUT13"/>
            <Output output={output} n="13" outp="OUT14"/>
            <Output output={output} n="14" outp="OUT15"/>
            <Output output={output} n="15" outp="OUT16"/>

        </tbody>
      </table>
    </>
  );
};

export default SoftwareHouseUSTAR008;
