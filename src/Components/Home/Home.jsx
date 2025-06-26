import React, { useState } from "react";
import {
    FaMapMarkerAlt, FaLock, FaHistory, FaCreditCard, FaTools,
    FaMobileAlt, FaWrench, FaBolt, FaPaintRoller, FaPaw, FaCar,
    FaLeaf, FaSearchLocation
} from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { Link } from "react-router-dom";

import heroBanner from "../../assets/Images/banner.jpg";

const HomePage = () => {
    const [location, setLocation] = useState("");
    const [service, setService] = useState("");

    const handleSearch = () => {
        if (!location || !service) {
            alert("Please enter your location and select a service.");
        } else {
            alert(`Finding "${service}" service providers near "${location}"...`);
        }
    };

    return (
        <div className="font-sans text-gray-800 bg-white">
            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-md">
                <h1 className="text-3xl font-extrabold text-indigo-700 tracking-wide">SnapHelp</h1>
                <div className="hidden md:flex space-x-6 text-base font-medium">
                    <a href="/" className="hover:text-indigo-600 transition">Home</a>
                    <a href="#services" className="hover:text-indigo-600 transition">Services</a>
                    <a href="#features" className="hover:text-indigo-600 transition">Why Us</a>
                    <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
                    <Link to="/history" className="hover:text-indigo-600 transition">History</Link>
                    <Link to="/admin" className="hover:text-indigo-600 transition">Admin</Link>
                    <Link to="/registerUser" className="hover:text-indigo-600 transition">Account</Link>
                </div>
                <a href="#services">
                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                        Get Started
                    </button>
                </a>
            </nav>

            {/* HERO BANNER */}
            <section
                className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center px-6 md:px-16"
                style={{ backgroundImage: `url(${heroBanner})` }}
            >
                <div className="max-w-2xl text-white space-y-5 z-10">
                    <span className="text-xs bg-indigo-500/70 text-white font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                        Trusted Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
                        Book Verified Experts <br /> for Home Services
                    </h2>
                    <p className="text-lg font-medium drop-shadow-sm">
                        Plumbing, electrical, painting, gardening, cleaning, and more — all from verified local professionals.
                    </p>
                    <a href="#services">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg transition shadow">
                            Explore Services
                        </button>
                    </a>
                </div>
                <div className="absolute inset-0 bg-black/30 z-0" />
            </section>

            {/* LOCATION-AWARE SEARCH */}
            <section className="bg-white py-14 px-6 md:px-16 shadow-inner">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-2">Find Services Near You</h2>
                    <p className="text-gray-600 mb-6">Enter your location to discover local professionals</p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center border border-gray-300 rounded px-4 py-2 w-full md:w-auto">
                            <FaMapMarkerAlt className="text-indigo-600 mr-2" />
                            <input
                                type="text"
                                placeholder="Enter your city or area"
                                className="w-full focus:outline-none"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 w-full md:w-auto"
                        >
                            <option value="">Select Service</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="electrician">Electrician</option>
                            <option value="painting">Painting</option>
                            <option value="cleaning">Cleaning</option>
                            <option value="gardening">Gardening</option>
                            <option value="car-wash">Car Wash</option>
                        </select>

                        <button
                            onClick={handleSearch}
                            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
                        >
                            <FaSearchLocation className="inline mr-2" />
                            Find Services
                        </button>
                    </div>
                </div>
            </section>

            {/* ✅ SERVICE CATEGORIES */}
            <section id="services" className="py-20 px-6 md:px-16 bg-white text-center">
                <h3 className="text-3xl font-semibold mb-10 text-indigo-700">Popular Service Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <Link to="/services/plumbing"><ServiceCard icon={<FaWrench />} title="Plumbing" /></Link>
                    <Link to="/services/electrician"><ServiceCard icon={<FaBolt />} title="Electrician" /></Link>
                    <Link to="/services/painting"><ServiceCard icon={<FaPaintRoller />} title="Painting" /></Link>
                    <Link to="/services/appliance-repair"><ServiceCard icon={<FaTools />} title="Appliance Repair" /></Link>
                    <Link to="/services/gardening"><ServiceCard icon={<FaLeaf />} title="Gardening" /></Link>
                    <Link to="/services/pet-care"><ServiceCard icon={<FaPaw />} title="Pet Care" /></Link>
                    <Link to="/services/home-cleaning"><ServiceCard icon={<GiVacuumCleaner />} title="Home Cleaning" /></Link>
                    <Link to="/services/car-wash"><ServiceCard icon={<FaCar />} title="Car Wash" /></Link>
                </div>
            </section>
            {/* ✅ FEATURES */}
            <section id="features" className="py-20 px-6 md:px-16 bg-indigo-50 text-center">
                <h3 className="text-3xl font-semibold mb-10 text-indigo-700">Why Choose SnapHelp?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard icon={<FaLock />} title="Secure OTP Login" desc="Extra safe user registration & login." />
                    <FeatureCard icon={<FaMapMarkerAlt />} title="Nearby Bookings" desc="Get experts near your location." />
                    <FeatureCard icon={<FaHistory />} title="Booking History" desc="Track past bookings & ratings." />
                    <FeatureCard icon={<FaCreditCard />} title="Secure Payments" desc="Razorpay, Stripe & COD available." />
                    <FeatureCard icon={<FaTools />} title="Admin Dashboard" desc="Manage services, users & data." />
                    <FeatureCard icon={<FaMobileAlt />} title="Responsive Design" desc="Perfect on mobile & desktop." />
                </div>
            </section>

            {/* ✅ CTA SECTION */}
            <section className="py-20 px-6 md:px-16 bg-indigo-600 text-white text-center rounded-t-xl">
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 text-lg">Book your first service today and enjoy hassle-free help at home.</p>
                <a href="#services">
                    <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                        Book a Service
                    </button>
                </a>
            </section>

            {/* ✅ FOOTER */}
            <footer className="bg-gray-900 text-white py-10 px-6 md:px-16 text-center md:text-left">
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
                        <h4 className="font-semibold text-white mb-2">Quick Links</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                            <li><a href="#services" className="hover:underline">Services</a></li>
                            <li><a href="#features" className="hover:underline">Why Us</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <p className="mt-6 text-sm text-gray-400 text-center">&copy; {new Date().getFullYear()} SnapHelp. All rights reserved.</p>
            </footer>
        </div>
    );
};

// Reusable Component: Service Card
const ServiceCard = ({ icon, title }) => (
    <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center">
        <div className="text-indigo-600 text-4xl mb-4">{icon}</div>
        <h4 className="text-lg font-semibold text-indigo-900">{title}</h4>
    </div>
);

// Reusable Component: Feature Card
const FeatureCard = ({ icon, title, desc }) => (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center flex flex-col items-center">
        <div className="text-indigo-600 text-4xl mb-3">{icon}</div>
        <h4 className="text-xl font-semibold mb-2 text-indigo-900">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
    </div>
);

export default HomePage;
