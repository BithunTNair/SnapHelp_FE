import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearchLocation } from "react-icons/fa";

const LocationSearch = () => {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const handleSearch = () => {
    alert(`Searching "${service}" services near "${location}"...`);
    // Later: fetch nearby providers from backend
  };

  return (
    <section className="bg-white py-14 px-6 md:px-16 shadow-inner">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-2">
          Find Services Near You
        </h2>
        <p className="text-gray-600 mb-6">Enter your location to discover local professionals</p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Location Input */}
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

          {/* Service Dropdown */}
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

          {/* Search Button */}
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
  );
};

export default LocationSearch;
