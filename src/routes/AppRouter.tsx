import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ChooseSource from "../components/ChooseSource";
import DataPage from "../components/DataPage";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/choose/:type" element={<ChooseSource />} />
                <Route path="/data/:source/:type" element={<DataPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
