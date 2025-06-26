import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../../Reusable/Navbar"; // ✅ Import the shared Navbar

const ContactPage = () => {
  return (
    <div className="bg-indigo-50 min-h-screen">
      <Navbar /> {/* ✅ Use Navbar component */}

      {/* MAIN SECTION */}
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            Have questions or need help? Our team is here to assist you.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CONTACT INFO */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-indigo-700 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-indigo-900">Our Location</h4>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-indigo-700 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-indigo-900">Email Us</h4>
                <p>contact@snaphelp.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-indigo-700 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-indigo-900">Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-indigo-900 mb-1">Support Hours</h4>
              <p className="text-sm">Monday to Sunday: 8:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-indigo-800 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-indigo-800 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-indigo-800 mb-1">Your Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

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
        <p className="mt-6 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} SnapHelp. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
