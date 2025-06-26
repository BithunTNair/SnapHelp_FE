import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaCalendarAlt,
  FaClipboardList,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Navbar from "../../Reusable/Navbar"; // ✅ Navbar component

const HistoryPage = () => {
  return (
    <div className="bg-indigo-50 min-h-screen">
      <Navbar />

      {/* Main Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-indigo-800">Booking History & Reviews</h1>
          <p className="text-gray-600 mt-1">View your service history and feedback.</p>
        </div>

        {/* Past Bookings */}
        <Section title="Past Bookings" icon={<FaCalendarAlt />} color="indigo">
          {[
            {
              service: "Plumbing Service",
              date: "2025-06-01",
              status: "Completed",
              amount: "₹499",
            },
            {
              service: "Home Cleaning",
              date: "2025-05-24",
              status: "Completed",
              amount: "₹699",
            },
            {
              service: "Car Wash",
              date: "2025-05-16",
              status: "Completed",
              amount: "₹349",
            },
            {
              service: "Electrician Service",
              date: "2025-05-10",
              status: "Completed",
              amount: "₹599",
            },
          ].map((booking, i) => (
            <Card key={i}>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-800">{booking.service}</h4>
                  <p className="text-sm text-gray-600">Booked on: {booking.date}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {booking.status}
                  </span>
                  <div className="text-indigo-600 font-bold mt-1">{booking.amount}</div>
                </div>
              </div>
            </Card>
          ))}
        </Section>

        {/* Reviews */}
        <Section title="Your Reviews" icon={<FaStar />} color="yellow">
          {[
            {
              service: "Electrician Service",
              review: "Very prompt and professional!",
              rating: 4,
            },
            {
              service: "Car Wash",
              review: "Quick and spotless work!",
              rating: 5,
            },
            {
              service: "Home Cleaning",
              review: "Made the whole house shine. Great job!",
              rating: 5,
            },
          ].map((r, i) => (
            <Card key={i}>
              <h4 className="text-indigo-800 font-semibold mb-1">{r.service}</h4>
              <p className="text-sm text-gray-700">“{r.review}”</p>
              <div className="text-yellow-500 text-sm mt-2">
                {Array.from({ length: 5 }, (_, j) => (
                  <span key={j}>{j < r.rating ? "★" : "☆"}</span>
                ))}
              </div>
            </Card>
          ))}
        </Section>

        {/* Customer Feedback */}
        <Section title="Feedback from Customers" icon={<FaClipboardList />} color="blue">
          {[
            {
              feedback: "Fixed my tap quickly and cleanly.",
              date: "2025-05-28",
              rating: 4,
            },
            {
              feedback: "Painter was skilled and used premium material. Loved the outcome!",
              date: "2025-05-22",
              rating: 5,
            },
            {
              feedback: "Appliance technician resolved the issue quickly and politely.",
              date: "2025-05-18",
              rating: 5,
            },
          ].map((f, i) => (
            <Card key={i}>
              <p className="text-indigo-800 font-medium">“{f.feedback}”</p>
              <div className="text-sm text-gray-600 flex justify-between mt-2">
                <span>Rated {f.rating}/5</span>
                <span>{f.date}</span>
              </div>
            </Card>
          ))}
        </Section>
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
          &copy; {new Date().getFullYear()} SnapHelp. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HistoryPage;

// Reusable Section Wrapper
const Section = ({ title, icon, color = "indigo", children }) => (
  <section className="mb-12">
    <h2 className={`text-xl font-semibold text-${color}-700 mb-4 flex items-center gap-2`}>
      {icon} {title}
    </h2>
    <div className="bg-white p-4 rounded-xl shadow space-y-4">{children}</div>
  </section>
);

// Reusable Card Wrapper
const Card = ({ children }) => (
  <div className="border-b pb-3 last:border-none">{children}</div>
);
