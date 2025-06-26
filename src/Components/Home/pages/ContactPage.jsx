import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../../Reusable/Navbar";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been recorded. We'll get back to you soon!");
    e.target.reset();
  };

  return (
    <div className="bg-indigo-50 min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            We're here to help. Reach out for any questions or support.
          </p>
        </div>

        {/* Contact Info + Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <ContactItem
              icon={<FaMapMarkerAlt className="text-indigo-700 text-xl" />}
              title="Our Location"
              detail="Bengaluru, Karnataka, India"
            />
            <ContactItem
              icon={<FaEnvelope className="text-indigo-700 text-xl" />}
              title="Email Us"
              detail="contact@snaphelp.com"
            />
            <ContactItem
              icon={<FaPhoneAlt className="text-indigo-700 text-xl" />}
              title="Call Us"
              detail="+91 98765 43210"
            />
            <div className="mt-8">
              <h4 className="font-semibold text-indigo-900 mb-1">Support Hours</h4>
              <p className="text-sm">Mon–Sun: 8:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg space-y-5 border border-indigo-100"
          >
            <h3 className="text-xl font-bold text-indigo-800 text-center">Send a Message</h3>

            <FormField label="Full Name" type="text" name="name" placeholder="John Doe" />
            <FormField label="Email Address" type="email" name="email" placeholder="john@example.com" />
            <div>
              <label className="block text-sm font-medium text-indigo-800 mb-1">Service Required</label>
              <select
                name="service"
                required
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select a service</option>
                <option>Plumbing</option>
                <option>Electrician</option>
                <option>Painting</option>
                <option>Gardening</option>
                <option>Home Cleaning</option>
                <option>Pet Care</option>
                <option>Car Wash</option>
                <option>Appliance Repair</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-indigo-800 mb-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-indigo-500"
                placeholder="How can we assist you?"
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
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

// 🔹 Contact info display box
const ContactItem = ({ icon, title, detail }) => (
  <div className="flex items-start gap-4">
    {icon}
    <div>
      <h4 className="font-semibold text-indigo-900">{title}</h4>
      <p>{detail}</p>
    </div>
  </div>
);

// 🔹 Form input field component
const FormField = ({ label, type, name, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-indigo-800 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      required
      className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-indigo-500"
      placeholder={placeholder}
    />
  </div>
);

export default ContactPage;
