import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar, FaCalendarAlt, FaClipboardList,
  FaTools, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt
} from "react-icons/fa";

const HistoryPage = () => {
  return (
    <div className="bg-indigo-50 min-h-screen">
      {/* HEADER */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-md">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-wide">SnapHelp</h1>
        <div className="hidden md:flex space-x-6 text-base font-medium">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <a href="/#services" className="hover:text-indigo-600 transition">Services</a>
          <a href="/#features" className="hover:text-indigo-600 transition">Why Us</a>
          <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          <Link to="/history" className="hover:text-indigo-600 transition">History</Link>
        </div>
        <a href="/#services">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
        </a>
      </nav>

      {/* MAIN SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-indigo-800">Booking History & Reviews</h1>
          <p className="text-gray-600 mt-1">View your service history and feedback.</p>
        </div>

        {/* Past Bookings */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
            <FaCalendarAlt /> Past Bookings
          </h2>
          <div className="bg-white p-4 rounded-xl shadow space-y-4">
            {[1, 2].map((b, i) => (
              <div key={i} className="border-b pb-3 last:border-none">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-indigo-800">Plumbing Service</h4>
                    <p className="text-sm text-gray-600">Booked on: 2025-06-01 | Status: Completed</p>
                  </div>
                  <span className="text-sm font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    ₹499
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Submitted */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
            <FaStar /> Your Reviews
          </h2>
          <div className="bg-white p-4 rounded-xl shadow space-y-4">
            {[1, 2].map((r, i) => (
              <div key={i} className="border-b pb-3 last:border-none">
                <h4 className="text-indigo-800 font-medium">Electrician Service</h4>
                <p className="text-sm text-gray-700">“Very prompt and professional!”</p>
                <div className="text-yellow-500 text-sm mt-1">
                  {Array(5).fill("★").map((s, j) => (
                    <span key={j}>{j < 4 ? s : "☆"}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback from Users (for providers) */}
        <section>
          <h2 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
            <FaClipboardList /> Feedback from Customers
          </h2>
          <div className="bg-white p-4 rounded-xl shadow space-y-4">
            {[1].map((f, i) => (
              <div key={i} className="border-b pb-3 last:border-none">
                <h4 className="text-indigo-800 font-medium">“Fixed my tap quickly and cleanly.”</h4>
                <p className="text-sm text-gray-600">Rated 4/5 by user - 2025-05-28</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-10 px-6 md:px-16 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">SnapHelp</h4>
            <p className="text-sm text-gray-300">Empowering local professionals, simplifying home services.</p>
          </div>
          <div className="text-sm text-gray-300 space-y-2">
            <p>📍 Bengaluru, India</p>
            <p>📧 contact@snaphelp.com</p>
            <p>📞 +91 98765 43210</p>
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
        <p className="mt-6 text-sm text-gray-500 text-center">&copy; {new Date().getFullYear()} SnapHelp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HistoryPage;
