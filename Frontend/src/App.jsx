import { useEffect, useState } from "react";
import { getStudents } from "./utils/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import Students from "./pages/Students";
import NotFound from "./pages/404Page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const {currTheme} = useSelector((state) => state.student);
    const routes = (
        <Router>
            <Routes>
                <Route path="/" element={<Students />} />
                <Route path="/dashboard" element={<NotFound />} />
                <Route path="/chapter" element={<NotFound />} />
                <Route path="/help" element={<NotFound />} />
                <Route path="/report" element={<NotFound />} />
                <Route path="/setting" element={<NotFound />} />
            </Routes>
        </Router>
    );

    return (
        <div className={`${currTheme} w-full min-h-screen overflow-x-hidden`}>
            {routes}
        </div>
    );
}

export default App;
