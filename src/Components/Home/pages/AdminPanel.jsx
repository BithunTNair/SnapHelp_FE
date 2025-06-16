import React from "react";
import {
  FaWrench,
  FaUserTie,
  FaClipboardList,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col">
      {/* HEADER */}
      <header className="bg-white shadow sticky top-0 z-50 px-6 md:px-16 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wide">SnapHelp Admin</h1>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          <Link to="/history" className="hover:text-indigo-600">History</Link>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow px-6 md:px-16 py-10">
        {/* Dashboard Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-800">Admin Dashboard</h2>
          <p className="text-gray-600 mt-1">Manage services, providers, and bookings</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <SummaryCard title="Total Services" count="8" icon={<FaWrench />} />
          <SummaryCard title="Registered Providers" count="25" icon={<FaUserTie />} />
          <SummaryCard title="Total Bookings" count="136" icon={<FaClipboardList />} />
        </div>

        {/* Manage Sections */}
        <AdminSection title="Manage Services" columns={["Service", "Category", "Actions"]} rows={[
          ["Plumbing", "Home Repair"],
          ["Electrician", "Home Repair"],
          ["Car Wash", "Auto"],
        ]} />

        <AdminSection title="Manage Providers" columns={["Name", "Specialty", "Actions"]} rows={[
          ["Ravi Kumar", "Electrician"],
          ["Sneha Rao", "Plumber"],
        ]} />

        <AdminSection title="Manage Bookings" columns={["User", "Service", "Date", "Status", "Actions"]} rows={[
          ["Aditya G", "Cleaning", "2025-06-21", "Completed"],
          ["Neha M", "Gardening", "2025-06-20", "Pending"],
        ]} />
      </main>

      {/* FOOTER */}
      <footer className="bg-indigo-900 text-white text-center py-6 px-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} SnapHelp Admin Panel. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// COMPONENTS

const SummaryCard = ({ title, count, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition">
    <div className="text-indigo-600 text-3xl">{icon}</div>
    <div>
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-xl font-bold text-indigo-900">{count}</p>
    </div>
  </div>
);

const AdminSection = ({ title, columns, rows }) => (
  <section className="mb-12">
    <h3 className="text-xl font-semibold text-indigo-700 mb-4">{title}</h3>
    <div className="bg-white rounded-xl shadow overflow-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-indigo-100 text-indigo-700">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="text-left px-4 py-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t hover:bg-indigo-50 transition">
              {row.map((val, i) => (
                <td key={i} className="px-4 py-2 text-gray-700">{val}</td>
              ))}
              <td className="px-4 py-2 flex gap-3 text-indigo-700">
                <button className="hover:text-yellow-500"><FaEdit /></button>
                <button className="hover:text-red-600"><FaTrashAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default AdminPanel;
