import React, { useState } from "react";
import { AWG_VALUES, MM_VALUES } from "../constants/awg";
import classNames from "classnames";
import Header from "./Header";
// import img from "../assets/undraw_calculator_re_alsc.svg"
import img from "../assets/Group2.svg";

const VoltageDrop = () => {
  const [voltage, setVoltage] = useState();
  const [current, setCurrent] = useState();
  const [wiregauge, setWireGauge] = useState();
  const [metricCross, setMetricCross] = useState();
  const [length, setLength] = useState();
  const [drop, setDrop] = useState();
  const [isDrop, setIsDrop] = useState(false);
  const [awg, setAwg] = useState(true);
  const [maxVoltageDrop, setMaxVoltageDrop] = useState();
  const [toggleClass, setToggleClass] = useState(true);

  const title = "VOLTAGE DROP CALCULATOR";
  const para1 =
    " Calculates voltage drop for a specific conductor run.";
  const para2 =
    " When sizing conductors, calculations limits wire size to voltage drop  and NEC ampacity. Voltage Drop Calculator is designed for applications using AWG and mm2 sizes only. Enter your values in the calculator below!";
  // specific resistance for copper (ohmm2/m)
  const ro = 0.0175;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (awg) {
      if (wiregauge >= 0) {
        let mm2 = 0.012668 * 92 ** ((36 - wiregauge) / 19.5);
        setMetricCross(mm2);
        let res = ro;
        let r = ro * ((2 * length * 0.3048) / mm2);
        let u = (current * r).toFixed(2);
        console.log("calcualted drop",u);
        let drop = checkGreaterThanInputVoltage(voltage, u);
        // console.log(voltage);
        // console.log(drop);
        setDrop(drop);
        setIsDrop(true);
        checkVoltageDropMax(u, (voltage * maxVoltageDrop) / 100);
      } else {
        if (wiregauge === "4 / 0") {
          let mm2 = 0.012668 * 92 ** ((36 + 3) / 19.5);
          setMetricCross(mm2);
          let res = ro;
          let r = ro * ((2 * length * 0.3048) / mm2);
          let u = (current * r).toFixed(2);
          let drop = checkGreaterThanInputVoltage(voltage, u);
          setDrop(drop);
          setIsDrop(true);
          checkVoltageDropMax(u, (voltage * maxVoltageDrop) / 100);
        } else if (wiregauge === "3 / 0") {
          let mm2 = 0.012668 * 92 ** ((36 + 2) / 19.5);
          setMetricCross(mm2);
          let res = ro;
          let r = ro * ((2 * length * 0.3048) / mm2);
          let u = (current * r).toFixed(2);
          let drop = checkGreaterThanInputVoltage(voltage, u);
          setDrop(drop);
          setIsDrop(true);
          checkVoltageDropMax(u, (voltage * maxVoltageDrop) / 100);
        } else if (wiregauge === "2 / 0") {
          let mm2 = 0.012668 * 92 ** ((36 + 1) / 19.5);
          setMetricCross(mm2);
          let res = ro;
          let r = ro * ((2 * length * 0.3048) / mm2);
          let u = (current * r).toFixed(2);
          let drop = checkGreaterThanInputVoltage(voltage, u);
          setDrop(drop);
          setIsDrop(true);
          checkVoltageDropMax(u, (voltage * maxVoltageDrop) / 100);
        } else if (wiregauge === "1 / 0") {
          let mm2 = 0.012668 * 92 ** (36 / 19.5);
          setMetricCross(mm2);
          let res = ro;
          let r = ro * ((2 * length * 0.3048) / mm2);
          let u = (current * r).toFixed(2);
          let drop = checkGreaterThanInputVoltage(voltage, u);
          setDrop(drop);
          setIsDrop(true);
          checkVoltageDropMax(u, (voltage * maxVoltageDrop) / 100);
        }
      }
    } else {
      let res = ro;
      let r = ro * ((2 * length) / wiregauge);
      let u = (current * r).toFixed(2);
      let drop = checkGreaterThanInputVoltage(voltage, u);
      setDrop(drop);
      setIsDrop(true);
      checkVoltageDropMax(u, (voltage * maxVoltageDrop) / 100);
    }
  };

  const checkVoltageDropMax = (vd, avd) => {
    if (vd > avd) {
      setToggleClass(false);
      // console.log(vd);
      // console.log(avd);
      // console.log(maxVoltageDrop);
    } else {
      setToggleClass(true);
      // console.log(vd);
      // console.log(avd);
      // console.log(maxVoltageDrop);
    }
  };
  const checkGreaterThanInputVoltage = (inV, calcV) => {
    if (Number(calcV) > Number(inV)) {
      // console.log("calcualted drop bigger than input", calcV);
      // console.log("input voltage if calc v is bigger", inV);
      return inV;
    } else {
      // console.log("calcualted drop", calcV);
      // console.log("input voltage", inV);
      return calcV;
    }
  };

  const resetForm = () => {
    setCurrent("");
    setLength("");
    setVoltage("");
    setDrop("");
    setIsDrop(false);
    setMaxVoltageDrop("");
    setToggleClass(true);
  };

  return (
    <>
      <div className="md:p-5 ">
        <Header title={title} para1={para1} para2={para2} />
        <div className="flex gap-6">
          <form
            className="flex flex-col gap-3 md:w-1/2 w-4/5"
            onSubmit={handleSubmit}
          >
            <input
              type="number"
              id="voltage"
              name="voltage"
              value={voltage}
              // onChange={(e)=>console.log(e)}
              onChange={(e) => setVoltage(e.target.value)}
              required
              placeholder="Input DC Voltage (V)"
              className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
            />
            <input
              type="number"
              id="voltage"
              name="voltage"
              value={maxVoltageDrop}
              // onChange={(e)=>console.log(e)}
              onChange={(e) => setMaxVoltageDrop(e.target.value)}
              required
              placeholder="Allowable Voltage Drop (%)"
              className=" md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
            />

            {/* <label htmlFor="current">Input Current (A)</label> */}
            <input
              type="number"
              id="current"
              name="current"
              value={current}
              step="0.001"
              onChange={(e) => setCurrent(e.target.value)}
              required
              placeholder="Input Current (A)"
              className="md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
            />
            <div className="flex flex-col gap-2 items-left">
              {/* <label htmlFor="length">Wire Length (One Way)</label> */}
              <input
                type="number"
                id="length"
                name="length"
                onChange={(e) => setLength(e.target.value)}
                required
                placeholder="Wire Length (One Way)"
                className="md:w-full py-2 px-4 border border-[#e2e2e2] placeholder-gray-400 "
              />
              <div>
                <input
                  type="radio"
                  id="feet"
                  name="measure1"
                  checked={awg}
                  onClick={(e) => setAwg(true)}
                  className="radio-custom"
                />
                <label
                  htmlFor="feet"
                  className="ml-1 mr-6 pr-8 font-semibold text-[#808080] text-[14px] m radio-custom-label"
                >
                  Feet
                </label>
                <input
                  type="radio"
                  id="meter"
                  name="measure1"
                  checked={!awg}
                  onClick={(e) => setAwg(false)}
                  className="radio-custom"
                />
                <label
                  htmlFor="meter"
                  className="ml-1 font-semibold text-[#808080] text-[14px] radio-custom-label"
                >
                  Meters
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-left">
              <div>
                <select
                  className="md:w-full py-3 px-4 border border-[#e2e2e2] text-[14px] text-gray-400  "
                  type="number"
                  id="wiregauge"
                  name="wiregauge"
                  value={wiregauge}
                  onChange={(e) => setWireGauge(e.target.value)}
                  required
                >
                  {awg
                    ? AWG_VALUES.map((val) => {
                        return <option>{val}</option>;
                      })
                    : MM_VALUES.map((val) => {
                        return <option>{val}</option>;
                      })}
                </select>
              </div>

              <div>
                <input
                  type="radio"
                  id="awg"
                  name="measure"
                  checked={awg}
                  onClick={(e) => setAwg(true)}
                  className="radio-custom"
                />
                <label
                  htmlFor="awg"
                  className="ml-1 mr-6 pr-8  font-semibold text-[#808080] text-[14px] m radio-custom-label"
                >
                  AWG
                </label>
                <input
                  type="radio"
                  id="mm"
                  name="measure"
                  checked={!awg}
                  onClick={(e) => setAwg(false)}
                  className="radio-custom"
                />
                <label
                  htmlFor="mm"
                  className="ml-1 font-semibold text-[#808080] text-[14px] radio-custom-label"
                >
                  mm<sup>2</sup>
                </label>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="md:w-[122px] text-[14px] mt-1 py-2 px-4 border border-[#29abe0] text-[#29abe0] font-semibold "
              >
                CALCULATE
              </button>
              <button
                className="md:w-[122px] text-[14px] mt-1 py-2 px-4 border border-gray-500 text-gray-500 font-semibold "
                type="reset"
                onClick={() => resetForm()}
              >
                RESET
              </button>
            </div>
          </form>
          <div className=" flex w-1/2 flex-col gap-4 ">
            <div
              className={`flex w-full flex-col text-white h-32 font-semibold items-center justify-center align-middle ${
                toggleClass ? "bg-[#8dc63f]" : "bg-[#e81919]"
              }`}
            >
              <p>VOLTAGE DROP</p>
              {!isDrop ? (
                <p className="text-4xl font-mono font-extrabold">0.0</p>
              ) : (
                <p className="text-4xl font-mono font-extrabold">{drop}V</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-5">
        <img src={img} />
      </div>
    </>
  );
};

export default VoltageDrop;
