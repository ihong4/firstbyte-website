import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Homepage from "./pages/homepage/page";
import Team from "./pages/team/page";
import Curricula from "./pages/curricula/page";
import Educators from "./pages/educators/page";

const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/team" element={<Team />} />
    <Route path="/curricula" element={<Curricula />} />
    <Route path="/for-educators" element={<Educators />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default App;
