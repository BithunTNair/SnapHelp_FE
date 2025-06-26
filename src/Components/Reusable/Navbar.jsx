import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);
  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-indigo-700 tracking-wide">
          SnapHelp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
          <Link to="/" state={{ scrollTo: "services" }} className="hover:text-indigo-600">Services</Link>
          <Link to="/" state={{ scrollTo: "features" }} className="hover:text-indigo-600">Why Us</Link>
          <NavLink to="/contact" className="hover:text-indigo-600">Contact</NavLink>
          <NavLink to="/history" className="hover:text-indigo-600">History</NavLink>
          <NavLink to="/admin" className="hover:text-indigo-600">Admin</NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/" state={{ scrollTo: "services" }}>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm">
              Get Started
            </button>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-indigo-700 text-2xl cursor-pointer" onClick={toggleMenu}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3 text-sm font-medium shadow">
          <NavLink to="/" onClick={closeMenu} className="block hover:text-indigo-600">Home</NavLink>
          <Link to="/" state={{ scrollTo: "services" }} onClick={closeMenu} className="block hover:text-indigo-600">Services</Link>
          <Link to="/" state={{ scrollTo: "features" }} onClick={closeMenu} className="block hover:text-indigo-600">Why Us</Link>
          <NavLink to="/contact" onClick={closeMenu} className="block hover:text-indigo-600">Contact</NavLink>
          <NavLink to="/history" onClick={closeMenu} className="block hover:text-indigo-600">History</NavLink>
          <NavLink to="/admin" onClick={closeMenu} className="block hover:text-indigo-600">Admin</NavLink>
          <Link to="/" state={{ scrollTo: "services" }} onClick={closeMenu}>
            <button className="w-full mt-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
