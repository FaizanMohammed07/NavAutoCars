// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Search, User } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-full shadow-md bg-white sticky top-0 z-50">
//       {/* TOP NAVBAR */}
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
//         {/* LOGO */}
//         <motion.h1
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-extrabold text-blue-600 tracking-wide cursor-pointer"
//           style={{ fontFamily: "Poppins, sans-serif" }}
//         >
//           AutoFinds
//         </motion.h1>

//         {/* LOCATION BOX */}
//         <div className="hidden md:flex items-center bg-white border-2 border-gray-200 rounded-full px-4 py-2 ml-6 shadow-sm hover:shadow-md focus-within:border-blue-500 focus-within:shadow-lg transition-all duration-300 w-56 md:w-72 lg:w-96">
//           <MapPin className="text-blue-500 w-6 h-6 mr-3" />
//           <input
//             type="text"
//             placeholder="Search location..."
//             className="outline-none text-base md:text-lg w-full text-gray-700 placeholder-gray-400"
//           />
//         </div>

//         {/* RIGHT SIDE OPTIONS */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition">
//             Sell Car
//           </button>
//           <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition">
//             Buy Car
//           </button>

//           {/* Call Us Highlighted */}
//           <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
//             Call Us
//           </button>

//           {/* Divider */}
//           <span className="text-gray-300">|</span>

//           {/* User Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <div className="flex items-center cursor-pointer px-3 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition">
//               <User className="w-5 h-5 text-gray-600 mr-2" />
//               <span className="text-gray-700 font-medium">Hello, Sign In</span>
//             </div>

//             {open && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute right-0 mt-2 w-52 bg-white border shadow-lg rounded-xl py-3"
//               >
//                 <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   My Profile
//                 </a>
//                 <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   My Orders
//                 </a>
//                 <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Wishlist
//                 </a>
//                 <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Logout
//                 </a>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* BIG SEARCH BAR */}
//       <div className="w-full bg-gray-50 py-4">
//         <div className="max-w-3xl mx-auto flex items-center border rounded-full shadow-md px-4 py-2 bg-white">
//           <Search className="w-5 h-5 text-gray-400 mr-3" />
//           <input
//             type="text"
//             placeholder="Search cars, models, brands..."
//             className="flex-1 outline-none text-gray-700 text-lg"
//           />
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// new nav

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Search,
  User,
  Heart,
  Bell,
  Menu,
  X,
  Phone,
  ChevronDown,
  Car,
} from "lucide-react";

import logo from "../assets/auto_transparent.png";

export default function Navbar() {
  const [userOpen, setUserOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setOnTop(window.scrollY < 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dropVariants = {
    initial: { opacity: 0, y: -8, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
    exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.12 } },
  };

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-shadow ${
        onTop ? "shadow-none" : "shadow-md"
      }`}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="h-20 flex items-center justify-between gap-3">
          {/* Left: Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="AutoFinds"
              className="h-60 w-auto object-contain select-none"
              draggable="false"
            />
          </motion.a>

          {/* Center: Location (desktop) */}
          <div className="hidden md:flex items-center bg-white border-2 border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md focus-within:border-blue-600 focus-within:shadow-md transition-all duration-200 w-56 lg:w-80">
            <MapPin className="text-blue-600 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Select location"
              className="w-full outline-none text-sm lg:text-base placeholder-gray-400"
            />
          </div>

          {/* Right: Actions (desktop) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Buy dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBuyOpen(true)}
              onMouseLeave={() => setBuyOpen(false)}
            >
              <button className="group inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-700 transition">
                Buy Car
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>
              <AnimatePresence>
                {buyOpen && (
                  <motion.div
                    variants={dropVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute right-0 mt-2 w-56 rounded-xl bg-white border shadow-lg overflow-hidden"
                  >
                    {[
                      "New Cars",
                      "Used Cars",
                      "Certified Cars",
                      "By Budget",
                      "By Brand",
                    ].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-700 transition"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sell dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSellOpen(true)}
              onMouseLeave={() => setSellOpen(false)}
            >
              <button className="group inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-700 transition">
                Sell Car
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>
              <AnimatePresence>
                {sellOpen && (
                  <motion.div
                    variants={dropVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute right-0 mt-2 w-56 rounded-xl bg-white border shadow-lg overflow-hidden"
                  >
                    {[
                      "Post an Ad",
                      "Instant Sell (Dealer)",
                      "Free Valuation",
                      "RC Transfer / RTO Help",
                      "Inspection at Home",
                    ].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-700 transition"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Call Us (CTA) */}
            <a
              href="tel:+91 97035 88400"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-sm hover:shadow-md hover:opacity-95 transition"
            >
              Call Us
            </a>

            {/* Divider */}
            <span className="mx-1 text-gray-300">|</span>

            {/* Wishlist & Notifications */}
            <button
              className="relative p-2 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-700 transition"
              aria-label="Wishlist"
            >
              <Heart size={18} />
              <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-blue-600 text-white">
                3
              </span>
            </button>
            <button
              className="relative p-2 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-700 transition"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-blue-600 text-white">
                5
              </span>
            </button>

            {/* User menu */}
            <div
              className="relative"
              onMouseEnter={() => setUserOpen(true)}
              onMouseLeave={() => setUserOpen(false)}
            >
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-700 transition">
                <User size={18} />
                <span className="hidden lg:inline">Hello, Sign In</span>
              </button>
              <AnimatePresence>
                {userOpen && (
                  <motion.div
                    variants={dropVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute right-0 mt-2 w-56 rounded-xl bg-white border shadow-lg overflow-hidden"
                  >
                    {[
                      "My Profile",
                      "Saved Cars",
                      "Bookings",
                      "Messages",
                      "Settings",
                      "Logout",
                    ].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-700 transition"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* BIG SEARCH BAR — always visible (also on mobile) */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            {/* Location on mobile (since we hid it above) */}
            <div className="md:hidden flex items-center bg-white border-2 border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:border-blue-600 focus-within:shadow-md transition w-full">
              <MapPin className="text-blue-600 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Select location"
                className="w-full outline-none text-sm placeholder-gray-400"
              />
            </div>

            {/* Main search */}
            <div className="flex-1 flex items-center bg-white border rounded-full shadow-sm hover:shadow-md transition px-3 py-2">
              <Search className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search cars, models, brands…"
                className="flex-1 outline-none text-gray-800 text-base"
              />
              <button className="ml-2 rounded-full bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t bg-white"
          >
            <div className="px-4 py-3 grid gap-2">
              {/* Buy accordion */}
              <details className="border rounded-lg">
                <summary className="list-none px-3 py-2 flex items-center justify-between cursor-pointer">
                  <span className="font-medium">Buy Car</span>
                  <ChevronDown className="shrink-0" size={16} />
                </summary>
                <div className="px-3 pb-2 grid gap-1 pt-1">
                  {[
                    "New Cars",
                    "Used Cars",
                    "Certified Cars",
                    "Electric (EV)",
                    "By Budget",
                    "By Brand",
                  ].map((i) => (
                    <a
                      key={i}
                      href="#"
                      className="px-2 py-2 rounded hover:bg-gray-50"
                    >
                      {i}
                    </a>
                  ))}
                </div>
              </details>

              {/* Sell accordion */}
              <details className="border rounded-lg">
                <summary className="list-none px-3 py-2 flex items-center justify-between cursor-pointer">
                  <span className="font-medium">Sell Car</span>
                  <ChevronDown className="shrink-0" size={16} />
                </summary>
                <div className="px-3 pb-2 grid gap-1 pt-1">
                  {[
                    "Post an Ad",
                    "Instant Sell (Dealer)",
                    "Free Valuation",
                    "RC Transfer / RTO Help",
                    "Inspection at Home",
                  ].map((i) => (
                    <a
                      key={i}
                      href="#"
                      className="px-2 py-2 rounded hover:bg-gray-50"
                    >
                      {i}
                    </a>
                  ))}
                </div>
              </details>

              {/* Call / Contact */}
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 justify-center rounded-lg bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition"
              >
                <Phone size={16} />
                Call Us
              </a>

              {/* Quick actions */}
              <div className="grid grid-cols-3 gap-2">
                <button className="border rounded-lg py-2 hover:border-blue-600 hover:text-blue-700 transition">
                  <Heart size={18} className="mx-auto" />
                  <div className="text-xs mt-1">Wishlist</div>
                </button>
                <button className="border rounded-lg py-2 hover:border-blue-600 hover:text-blue-700 transition">
                  <Bell size={18} className="mx-auto" />
                  <div className="text-xs mt-1">Alerts</div>
                </button>
                <button className="border rounded-lg py-2 hover:border-blue-600 hover:text-blue-700 transition">
                  <User size={18} className="mx-auto" />
                  <div className="text-xs mt-1">Account</div>
                </button>
              </div>

              {/* Sign in / up */}
              <div className="flex gap-2">
                <a
                  href="#login"
                  className="flex-1 border rounded-lg py-2 text-center hover:border-blue-600 hover:text-blue-700 transition"
                >
                  Log In
                </a>
                <a
                  href="#signup"
                  className="flex-1 rounded-lg py-2 text-center bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Sign Up
                </a>
              </div>

              {/* Mini banner */}
              <div className="mt-1 rounded-lg border bg-gray-50 p-3 text-sm">
                <div className="font-medium flex items-center gap-2">
                  <Car size={16} className="text-blue-600" /> Sell your car
                  fast!
                </div>
                <p className="text-gray-600 mt-1">
                  Free valuation & doorstep inspection across major cities.
                </p>
                <a
                  href="#sell"
                  className="text-blue-700 font-medium mt-1 inline-block"
                >
                  Get Started →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
