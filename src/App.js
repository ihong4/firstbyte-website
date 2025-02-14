import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Homepage from './homepage/page';
import MeetTeam from './meetTeam/meetTeam';


const App = () => (
    <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/meetTeam" element={<MeetTeam />} />
        {/* <Route path="/team" element={<Homepage />} />
        <Route path="/curricula" element={<Homepage />} />
        <Route path="/for-educators" element={<Homepage />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default App;
