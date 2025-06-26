import React from "react";
import {
  FaWrench,
  FaUserTie,
  FaClipboardList,
  FaEdit,
  FaTrashAlt,
  FaStar,
  FaChartBar,
  FaPlusCircle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import Navbar from "../../Reusable/Navbar";
import { Link } from "react-router-dom";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const AdminPanel = () => {
  const handleEdit = (item) => {
    alert(`Edit clicked for: ${item}`);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete: ${item}?`)) {
      alert(`${item} deleted.`);
    }
  };

  const bookingChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Bookings per Day",
        data: [12, 19, 10, 15, 8, 16, 11],
        backgroundColor: "#6366f1", // Indigo
        borderRadius: 8,
        barThickness: 28,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Weekly Booking Activity",
        color: "#1e3a8a",
        font: { size: 18 },
        padding: { bottom: 10 },
      },
    },
    scales: {
      y: {
        ticks: { stepSize: 5, color: "#4b5563" },
        grid: { color: "#e5e7eb" },
      },
      x: {
        ticks: { color: "#4b5563" },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow px-6 md:px-16 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-800">Admin Dashboard</h2>
          <p className="text-gray-600">Manage services, providers, users, and bookings</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <SummaryCard title="Total Services" count="8" icon={<FaWrench />} />
          <SummaryCard title="Providers" count="25" icon={<FaUserTie />} />
          <SummaryCard title="Bookings" count="136" icon={<FaClipboardList />} />
          <SummaryCard title="Avg. Rating" count="4.5/5" icon={<FaStar />} />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-10">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center gap-2">
            <FaPlusCircle /> Add New Service
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center gap-2">
            <FaPlusCircle /> Add Provider
          </button>
        </div>

        {/* Chart */}
        <section className="mb-14">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
            <FaChartBar /> Booking Insights
          </h3>
          <div className="bg-white rounded-xl shadow p-6">
            <Bar data={bookingChartData} options={chartOptions} />
          </div>
        </section>

        {/* Tables */}
        <AdminSection
          title="Manage Services"
          columns={["Service", "Category"]}
          rows={[
            ["Plumbing", "Home Repair"],
            ["Electrician", "Home Repair"],
            ["Painting", "Interior"],
            ["Gardening", "Outdoor"],
          ]}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <AdminSection
          title="Manage Providers"
          columns={["Name", "Specialty", "Rating"]}
          rows={[
            ["Ravi Kumar", "Electrician", "4.7"],
            ["Sneha Rao", "Plumber", "4.5"],
            ["Amit Jain", "Painter", "4.8"],
          ]}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <AdminSection
          title="Manage Bookings"
          columns={["User", "Service", "Date", "Status"]}
          rows={[
            ["Aditya G", "Cleaning", "2025-06-21", "Completed"],
            ["Neha M", "Gardening", "2025-06-20", "Pending"],
            ["Ravi S", "Car Wash", "2025-06-18", "Cancelled"],
            ["Megha P", "Painting", "2025-06-15", "Completed"],
          ]}
          onEdit={handleEdit}
          onDelete={handleDelete}
          statusColors
        />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-10 px-6 md:px-16 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">SnapHelp</h4>
            <p className="text-sm text-gray-300">
              Empowering local professionals, simplifying home services.
            </p>
          </div>
          <div className="text-sm text-gray-300 space-y-2">
            <p><FaMapMarkerAlt className="inline mr-2" /> Bengaluru, India</p>
            <p><FaEnvelope className="inline mr-2" /> contact@snaphelp.com</p>
            <p><FaPhoneAlt className="inline mr-2" /> +91 98765 43210</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-100 mb-2">Quick Links</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><a href="/#services" className="hover:underline">Services</a></li>
              <li><a href="/#features" className="hover:underline">Why Us</a></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/history" className="hover:underline">History</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} SnapHelp Admin Panel. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Summary card
const SummaryCard = ({ title, count, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition">
    <div className="text-indigo-600 text-3xl">{icon}</div>
    <div>
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-xl font-bold text-indigo-900">{count}</p>
    </div>
  </div>
);

// Admin table section
const AdminSection = ({ title, columns, rows, onEdit, onDelete, statusColors }) => {
  const getStatusBadge = (status) => {
    const color =
      status === "Completed"
        ? "bg-green-100 text-green-700"
        : status === "Pending"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";

    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${color}`}>
        {status}
      </span>
    );
  };

  return (
    <section className="mb-14">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">{title}</h3>
      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-indigo-100 text-indigo-700">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="text-left px-4 py-2">{col}</th>
              ))}
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-t hover:bg-indigo-50 transition">
                {row.map((val, i) => (
                  <td key={i} className="px-4 py-2 text-gray-700">
                    {statusColors && i === row.length - 1 ? getStatusBadge(val) : val}
                  </td>
                ))}
                <td className="px-4 py-2 flex gap-3 text-indigo-700">
                  <button onClick={() => onEdit(row[0])} className="hover:text-yellow-500">
                    <FaEdit />
                  </button>
                  <button onClick={() => onDelete(row[0])} className="hover:text-red-600">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminPanel;
