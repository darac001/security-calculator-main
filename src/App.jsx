import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import VoltageDrop from "./components/VoltageDrop";
import Battery from "./components/Battery";
import AcSchedules from "./components/AcSchedules";
import WireSize from "./components/WireSize";
import Layout2 from "./components/shared/Layout2";
import Layout3 from "./components/shared/Layout3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="voltagedrop" element={<VoltageDrop />} />

          <Route path="wire" element={<WireSize />} />
        </Route>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Battery />} />
    
        </Route>
        <Route path="/" element={<Layout3 />}>
          
          <Route path="acschedules" index element={<AcSchedules />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
