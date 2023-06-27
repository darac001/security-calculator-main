import React from "react";

const Reader = ({ reader, n,n2, wiegand }) => {
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
      <td className="px-6  text-center font-bold h-2 border border-[#e2e2e2]">
        {wiegand}
      </td>
      <td className="px-6  text-center h-2 border border-[#e2e2e2]">
        {reader[n2].lvl}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {reader[n2].device}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {reader[n2].desc}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {reader[n2].type}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {reader[n2].notes}
      </td>
    </tr>
  );
};
const Input = ({ input, n,n2, inp }) => {
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
      <td className="px-6  text-center font-bold h-2 border border-[#e2e2e2]">
        {inp}
      </td>
      <td className="px-6  text-center h-2 border border-[#e2e2e2]">
        {input[n2].lvl}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {input[n2].device}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {input[n2].desc}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {input[n2].type}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {input[n2].notes}
      </td>
    </tr>
  );
};
const Output = ({ output, n,n2, outp }) => {
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
      <td className="px-6  text-center font-bold h-2 border border-[#e2e2e2]">
        {outp}
      </td>
      <td className="px-6  text-center h-2 border border-[#e2e2e2]">
        {output[n2].lvl}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {output[n2].device}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {output[n2].desc}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {output[n2].type}
      </td>
      <td className="px-6 text-center h-2 border border-[#e2e2e2]">
        {output[n2].notes}
      </td>
    </tr>
  );
};

const SoftwareHouseUSTAR016 = ({ reader, input, output }) => {
  return (
    <>
      
        <table id="my-table" className=" w-full text-sm text-left text-gray-800 ">
          <thead className="text-xs text-gray-700 bg-gray-50  ">
            <tr className="px-6 py-2 text-center text-white bg-slate-400 ">
              <th
                scope="col"
                colSpan={6}
                className="px-2 py-1 text-lg text-left h-2 border border-[#e2e2e2]"
              >
                ACM#1
              </th>
              <th
                scope="col"
                colSpan={6}
                className="px-2 py-1 text-lg text-left h-2 border border-[#e2e2e2]"
              >
                ACM#2
              </th>
            </tr>
            <tr>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2]"
              >
                TERMINAL
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2]"
              >
                LEVEL
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2]"
              >
                DEVICE/DOOR ID
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2] w-[300px]"
              >
                DESCRIPTION
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2]"
              >
                DEVICE TYPE
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2] w-[100px]"
              >
                NOTES
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2] "
              >
                TERMINAL
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2]"
              >
                LEVEL
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2]"
              >
                DEVICE/DOOR ID
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2] w-[300px]"
              >
                DESCRIPTION
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2]"
              >
                DEVICE TYPE
              </th>
              <th
                scope="col"
                className="px-2 py-1 text-center h-2 border border-[#e2e2e2] w-[100px]"
              >
                NOTES
              </th>
            </tr>
          </thead>
          <tbody className="text-[12px]">
            <tr className="px-2  text-left h-2 border border-[#e2e2e2]">
              <th
                scope="col"
                colSpan={6}
                className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400 "
              >
                READERS
              </th>
              <th
                scope="col"
                colSpan={6}
                className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400 "
              >
                READERS
              </th>
            </tr>
            <Reader reader={reader} n="0" n2="8" wiegand="WIEGAND1" />
            <Reader reader={reader} n="1" n2="9" wiegand="WIEGAND2" />
            <Reader reader={reader} n="2" n2="10" wiegand="WIEGAND3" />
            <Reader reader={reader} n="3" n2="11" wiegand="WIEGAND4" />
            <Reader reader={reader} n="4" n2="12" wiegand="WIEGAND5" />
            <Reader reader={reader} n="5" n2="13" wiegand="WIEGAND6" />
            <Reader reader={reader} n="6" n2="14" wiegand="WIEGAND7" />
            <Reader reader={reader} n="7" n2="15" wiegand="WIEGAND8" />
            <tr className="px-2  text-left h-2 border border-[#e2e2e2]">
              <th
                scope="col"
                colSpan={6}
                className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400 "
              >
                INPUTS
              </th>
              <th
                scope="col"
                colSpan={6}
                className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400 "
              >
                INPUTS
              </th>
            </tr>
            <Input input={input} n="0" n2="24" inp="IN1" />
            <Input input={input} n="1" n2="25" inp="IN2" />
            <Input input={input} n="2" n2="26" inp="IN3" />
            <Input input={input} n="3" n2="27" inp="IN4" />
            <Input input={input} n="4" n2="28"  inp="IN5" />
            <Input input={input} n="5" n2="29" inp="IN6" />
            <Input input={input} n="6" n2="30" inp="IN7" />
            <Input input={input} n="7" n2="31" inp="IN8" />
            <Input input={input} n="8" n2="32" inp="IN9" />
            <Input input={input} n="9" n2="33" inp="IN10" />
            <Input input={input} n="10" n2="34" inp="IN11" />
            <Input input={input} n="11" n2="35"  inp="IN12" />
            <Input input={input} n="12" n2="36" inp="IN13" />
            <Input input={input} n="13" n2="37" inp="IN14" />
            <Input input={input} n="14" n2="38" inp="IN15" />
            <Input input={input} n="15" n2="39" inp="IN16" />
            <Input input={input} n="16" n2="40" inp="IN17" />
            <Input input={input} n="17" n2="41" inp="IN18" />
            <Input input={input} n="18" n2="42" inp="IN19" />
            <Input input={input} n="19" n2="43" inp="IN20" />
            <Input input={input} n="20" n2="44" inp="IN21" />
            <Input input={input} n="21" n2="45" inp="IN22" />
            <Input input={input} n="22" n2="46" inp="IN23" />
            <Input input={input} n="23" n2="47" inp="IN24" />
            <tr className="px-2  text-left h-2 border border-[#e2e2e2]">
              <th
                scope="col"
                colSpan={6}
                className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
              >
                OUTPUTS
              </th>
              <th
                scope="col"
                colSpan={6}
                className="px-2  text-left h-2 border border-[#e2e2e2] text-white bg-slate-400"
              >
                OUTPUTS
              </th>
            </tr>
            <Output output={output} n="0" n2="16" outp="OUT1" />
            <Output output={output} n="1" n2="17" outp="OUT2" />
            <Output output={output} n="2" n2="18" outp="OUT3" />
            <Output output={output} n="3" n2="19" outp="OUT4" />
            <Output output={output} n="4" n2="20" outp="OUT5" />
            <Output output={output} n="5" n2="21" outp="OUT6" />
            <Output output={output} n="6" n2="22" outp="OUT7" />
            <Output output={output} n="7" n2="23" outp="OUT8" />
            <Output output={output} n="8" n2="24" outp="OUT9" />
            <Output output={output} n="9" n2="25" outp="OUT10" />
            <Output output={output} n="10" n2="26" outp="OUT11" />
            <Output output={output} n="11" n2="27" outp="OUT12" />
            <Output output={output} n="12" n2="28" outp="OUT13" />
            <Output output={output} n="13" n2="29" outp="OUT14" />
            <Output output={output} n="14" n2="30" outp="OUT15" />
            <Output output={output} n="15" n2="31" outp="OUT16" />
          </tbody>
        </table>
      
    </>
  );
};

export default SoftwareHouseUSTAR016;
