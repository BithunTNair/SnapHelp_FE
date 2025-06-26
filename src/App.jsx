import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/Home";
import ServiceDetail from "./Components/Home/pages/ServiceDetail";
import ContactPage from "./Components/Home/pages/ContactPage";
import HistoryPage from "./Components/Home/pages/HistoryPage";
import AdminPanel from "./Components/Home/pages/AdminPanel";




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceName" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/admin" element={<AdminPanel />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
