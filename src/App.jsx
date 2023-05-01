import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import VoltageDrop from "./components/VoltageDrop";
import Battery from "./components/Battery";
import WireSize from "./components/WireSize";
import Layout2 from "./components/shared/Layout2";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VoltageDrop />} />

          <Route path="wire" element={<WireSize />} />
        </Route>
        <Route path="/" element={<Layout2 />}>
          <Route path="battery" element={<Battery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;