import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaWrench, FaBolt, FaPaintRoller, FaTools,
  FaLeaf, FaPaw, FaCar, FaUserAlt, FaPhoneAlt
} from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";

// Service data
const serviceData = {
  plumbing: {
    icon: <FaWrench />,
    image: "https://source.unsplash.com/1000x400/?plumbing",
    desc: "Our plumbing experts are equipped to handle everything from leaks and pipe repairs to full bathroom fittings.",
    checklist: ["Leak Fixing", "Tap & Faucet Repairs", "Drain Cleaning", "Pipe Fitting"],
  },
  electrician: {
    icon: <FaBolt />,
    image: "https://source.unsplash.com/1000x400/?electrician",
    desc: "Certified electricians for safe and reliable installation, repair, and maintenance work.",
    checklist: ["Wiring & Rewiring", "Light Fixture Installation", "Switch/Socket Repairs", "Safety Checks"],
  },
  painting: {
    icon: <FaPaintRoller />,
    image: "https://source.unsplash.com/1000x400/?painting,interior",
    desc: "Transform your space with fresh, high-quality painting services for interiors & exteriors.",
    checklist: ["Interior/Exterior Walls", "Texture Finishing", "Color Consultation", "Waterproof Coating"],
  },
  "appliance-repair": {
    icon: <FaTools />,
    image: "https://source.unsplash.com/1000x400/?appliance,repair",
    desc: "We service and repair all types of home appliances including refrigerators, washing machines, and more.",
    checklist: ["AC Servicing", "Washing Machine Repair", "Fridge Maintenance", "Oven & Chimney Repair"],
  },
  gardening: {
    icon: <FaLeaf />,
    image: "https://source.unsplash.com/1000x400/?gardening,lawn",
    desc: "Professional gardening and landscaping services to keep your outdoor space green and beautiful.",
    checklist: ["Lawn Mowing", "Weeding & Cleanup", "Planting", "Fertilization"],
  },
  "pet-care": {
    icon: <FaPaw />,
    image: "https://source.unsplash.com/1000x400/?pet,grooming",
    desc: "Pamper your furry friends with our expert pet grooming and wellness care.",
    checklist: ["Bath & Grooming", "Nail Clipping", "Tick/Flea Treatment", "On-call Vet Help"],
  },
  "home-cleaning": {
    icon: <GiVacuumCleaner />,
    image: "https://source.unsplash.com/1000x400/?home,cleaning",
    desc: "Deep cleaning and sanitization services for every corner of your home.",
    checklist: ["Bathroom/Kitchen Cleaning", "Sofa & Carpet Shampoo", "Sanitization", "Move-In Cleaning"],
  },
  "car-wash": {
    icon: <FaCar />,
    image: "https://source.unsplash.com/1000x400/?car,wash",
    desc: "Get your car cleaned inside and out at your doorstep with eco-friendly products.",
    checklist: ["Exterior Foam Wash", "Interior Vacuum", "Tire Polish", "Dashboard Cleaning"],
  },
};

export default function ServiceDetail() {
  const { serviceName } = useParams();
  const data = serviceData[serviceName];

  if (!data) {
    return (
      <div className="min-h-screen px-6 py-20 text-center text-red-600 font-semibold">
        Service not found: {serviceName}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-indigo-50">
      {/* Banner */}
      <img
        src={data.image}
        alt={`${serviceName} banner`}
        className="w-full h-[300px] object-cover"
      />

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm mb-4 text-gray-600">
          <Link to="/" className="hover:underline text-indigo-700">Home</Link> /{" "}
          <Link to="/#services" className="hover:underline text-indigo-700">Services</Link> /{" "}
          <span className="capitalize">{serviceName.replace("-", " ")}</span>
        </div>

        {/* Title */}
        <div className="flex items-center justify-center gap-4 mb-6 text-indigo-600">
          <span className="text-4xl">{data.icon}</span>
          <h1 className="text-3xl font-bold capitalize text-indigo-900">
            {serviceName.replace("-", " ")}
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-8 text-center text-lg leading-relaxed">{data.desc}</p>

        {/* What's Included */}
        <h2 className="text-xl font-semibold mb-4 text-indigo-900 text-center">What’s Included:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-12 list-disc list-inside">
          {data.checklist.map((item, i) => (
            <li key={i} className="animate-fade-in delay-75">{item}</li>
          ))}
        </ul>

        {/* Why Choose This Service */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-indigo-900 text-center mb-6">Why Choose This Service?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-indigo-700 font-bold text-lg mb-2">Experienced Professionals</h4>
              <p className="text-sm text-gray-600">All experts are background-verified and highly rated.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-indigo-700 font-bold text-lg mb-2">Affordable Pricing</h4>
              <p className="text-sm text-gray-600">Starting at just ₹199. Transparent estimates always.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-indigo-700 font-bold text-lg mb-2">Quick Turnaround</h4>
              <p className="text-sm text-gray-600">Same-day service available in most areas.</p>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-indigo-900 text-center mb-6">Service Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="bg-indigo-50 p-4 rounded-md border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-800 mb-1">Price Range</h4>
              <p>₹199 – ₹999 depending on service complexity</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-md border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-800 mb-1">Service Duration</h4>
              <p>Approx. 30–90 minutes</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-md border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-800 mb-1">Availability</h4>
              <p>Available 7 days a week, 8 AM – 8 PM</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-md border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-800 mb-1">Payment Options</h4>
              <p>UPI, Credit/Debit Card, COD (in select areas)</p>
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <div className="text-center mb-14">
          <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition">
            Book This Service
          </button>
        </div>

        {/* Reviews */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-indigo-900 text-center mb-6">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map(i => (
              <div key={i} className="bg-white p-6 rounded-xl shadow text-left">
                <div className="flex items-center gap-3 mb-2 text-indigo-600">
                  <FaUserAlt />
                  <p className="font-semibold text-indigo-900">Customer {i}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The service was fantastic! Very professional and arrived on time. Highly recommend for anyone needing quick help at home.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Support CTA */}
        <section className="text-center py-8 border-t border-gray-300">
          <p className="text-gray-700 mb-3 text-sm">Have questions or need help with booking?</p>
          <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">
            <FaPhoneAlt /> Contact Support
          </button>
        </section>
      </div>
    </div>
  );
}
