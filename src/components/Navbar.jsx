import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* TOP NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        {/* LOGO */}
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-blue-600 tracking-wide cursor-pointer"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          AutoFinds
        </motion.h1>

        {/* LOCATION BOX */}
        <div className="hidden md:flex items-center bg-white border-2 border-gray-200 rounded-full px-4 py-2 ml-6 shadow-sm hover:shadow-md focus-within:border-blue-500 focus-within:shadow-lg transition-all duration-300 w-56 md:w-72 lg:w-96">
          <MapPin className="text-blue-500 w-6 h-6 mr-3" />
          <input
            type="text"
            placeholder="Search location..."
            className="outline-none text-base md:text-lg w-full text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* RIGHT SIDE OPTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition">
            Sell Car
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition">
            Buy Car
          </button>

          {/* Call Us Highlighted */}
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
            Call Us
          </button>

          {/* Divider */}
          <span className="text-gray-300">|</span>

          {/* User Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="flex items-center cursor-pointer px-3 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition">
              <User className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-700 font-medium">Hello, Sign In</span>
            </div>

            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-52 bg-white border shadow-lg rounded-xl py-3"
              >
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  My Profile
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  My Orders
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Wishlist
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* BIG SEARCH BAR */}
      <div className="w-full bg-gray-50 py-4">
        <div className="max-w-3xl mx-auto flex items-center border rounded-full shadow-md px-4 py-2 bg-white">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search cars, models, brands..."
            className="flex-1 outline-none text-gray-700 text-lg"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
