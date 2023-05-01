import React, { useState } from "react";
import { AWG_VALUES, MM_VALUES, MM_TRUE_VALUES } from "../constants/awg";
import classNames from "classnames";
import Header from "./Header";
// import img from "../assets/undraw_calculator_re_alsc.svg"
import img from "../assets/Group2.svg";

// mm2 to awg formula
// AWG = -10 * log10(Area/(0.127^2))

const WireSize = () => {
  const [voltage, setVoltage] = useState();
  const [current, setCurrent] = useState();
  const [wiregauge, setWireGauge] = useState();
  const [metricCross, setMetricCross] = useState();
  const [length, setLength] = useState();
  const [isDrop, setIsDrop] = useState(false);
  const [isMetric, setIsMetric] = useState(false);
  const [awg, setAwg] = useState(true);
  const [maxVoltageDrop, setMaxVoltageDrop] = useState();
  const [toggleClass, setToggleClass] = useState(true);

  const title = "WIRE SIZE CALCULATOR";
  const para1 =
    " Determines wire size to meet specific voltage drop limits for a specific conductor run.";
  const para2 =
    " When sizing conductors, calculations limits wire size to voltage drop  and NEC ampacity. Wire size calculator is designed for applications using AWG and mm2 sizes only. Enter your values in the calculator below!";
  // specific resistance for copper (ohmm2/m)
  // specific resistance for copper (ohmm2/m)
  const ro = 0.0175;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (awg) {
      let metric = 0.3048 * length;
      let alowableDrop = (voltage * maxVoltageDrop) / 100;
      console.log(alowableDrop);
      let resistance = alowableDrop / current;
      console.log(resistance);
      // added 2% to wire size
      let wire = 1.02*(2 * metric * (ro / resistance));
      console.log(wire);
      let x = MM_TRUE_VALUES.find((val) => {
        return val >= wire;
      });
      console.log("mm2 value is ", x);
      let y = MM_TRUE_VALUES.indexOf(x);
      // console.log(MM_VALUES.length);
      // console.log(y);
      // console.log(MM_VALUES.length-y);
      let awire = AWG_VALUES.at(AWG_VALUES.length - y);
      // console.log("awg value is", awire);
      if (wire > 120) {
        setWireGauge("4/0");
        setIsMetric(false);
        setIsDrop(true);
      }
      if (wire < 0.05) {
        setWireGauge("30");
        setIsMetric(false);
        setIsDrop(true);
      } else {
        setWireGauge(awire);
        setIsMetric(false);
        setIsDrop(true);
      }
    } else {
      let alowableDrop = (voltage * maxVoltageDrop) / 100;
      let resistance = alowableDrop / current;
      let wire = length * (ro / resistance);
      // console.log(wire);
      let x = MM_VALUES.find((val) => {
        return val >= wire;
      });
      // console.log("mm2 value is ", x);
      if (wire > 120) {
        setWireGauge("120");
        setIsMetric(true);
        setIsDrop(true);
      } else {
        setWireGauge(x);
        setIsMetric(true);
        setIsDrop(true);
      }
    }
  };

  const resetForm = () => {
    setCurrent("");
    setLength("");
    setVoltage("");
    setIsMetric(false);
    setMaxVoltageDrop("");
    setToggleClass(true);
    setIsMetric(false);
    setIsDrop(false);
    setWireGauge("");
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
              step="0.01"
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
              step="0.01"
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
              <div></div>
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
              <p>MINIMUM WIRE SIZE</p>

              {!isMetric ? (
                <p className="text-4xl font-mono font-extrabold">
                  {wiregauge}AWG
                </p>
              ) : (
                <p className="text-4xl font-mono font-extrabold">
                  {wiregauge}mm<sup>2</sup>
                </p>
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

export default WireSize;
