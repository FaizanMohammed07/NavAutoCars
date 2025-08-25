// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Headset,
  Car,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

const linkHover =
  "relative inline-flex items-center gap-1 text-gray-600 hover:text-blue-700 transition-colors group";

const Underline = () => (
  <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
);

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200 mt-auto">
      {/* Value props ribbon */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
        >
          <ShieldCheck className="text-blue-600" />
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Verified Listings</p>
            <p className="text-sm text-gray-500">
              We screen cars for quality & documents
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
        >
          <Headset className="text-blue-600" />
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Dedicated Support</p>
            <p className="text-sm text-gray-500">
              Help with RC, loan, insurance & more
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
        >
          <Car className="text-blue-600" />
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Wide Selection</p>
            <p className="text-sm text-gray-500">Hatchbacks to luxury & EVs</p>
          </div>
        </motion.div>
      </div>

      {/* Main grid */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-10">
          {/* Brand + Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-blue-700 tracking-wide">
              AutoFinds
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Discover, compare and buy your next car. AutoFinds connects
              buyers, sellers and trusted partners with a clean, modern
              experience.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="shrink-0 text-blue-600" size={18} />
                <span>India • PAN-India operations</span>
              </div>
              <a href="tel:+919999999999" className="flex items-center gap-3">
                <Phone className="text-blue-600" size={18} />
                <span className="font-medium hover:text-blue-700 transition-colors">
                  +91 97035 88400
                </span>
              </a>
              <a
                href="mailto:support@autofinds.in"
                className="flex items-center gap-3"
              >
                <Mail className="text-blue-600" size={18} />
                <span className="hover:text-blue-700 transition-colors">
                  kamran@autofinds.in
                </span>
              </a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-blue-700 hover:border-blue-600 transition-colors transform hover:-translate-y-0.5"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Browse cars */}
          <nav aria-label="Browse cars">
            <p className="font-semibold text-gray-900 mb-3">Browse</p>
            <ul className="space-y-2">
              {[
                "Hatchback",
                "Sedan",
                "SUV & MUV",
                "Luxury & Sports",
                "Electric (EV)",
                "Vintage & Classic",
              ].map((txt) => (
                <li key={txt}>
                  <a href="#" className={`${linkHover} group`}>
                    <ChevronRight
                      size={16}
                      className="opacity-0 -ml-2 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                    {txt}
                    <Underline />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <p className="font-semibold text-gray-900 mb-3">Services</p>
            <ul className="space-y-2">
              {[
                "Sell Your Car",
                "Buy With Inspection",
                "Loan & EMI Calculator",
                "Insurance & Claims",
                "RC Transfer & RTO",
                "Price Trends",
              ].map((txt) => (
                <li key={txt}>
                  <a href="#" className={`${linkHover} group`}>
                    <ChevronRight
                      size={16}
                      className="opacity-0 -ml-2 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                    {txt}
                    <Underline />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Help & Legal */}
          <nav aria-label="Help & legal">
            <p className="font-semibold text-gray-900 mb-3">Help & Legal</p>
            <ul className="space-y-2">
              {[
                "Help Center",
                "Safety Tips",
                "Buyer Protection",
                "Seller Guide",
                "Privacy Policy",
                "Terms of Service",
              ].map((txt) => (
                <li key={txt}>
                  <a href="#" className={`${linkHover} group`}>
                    <ChevronRight
                      size={16}
                      className="opacity-0 -ml-2 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                    {txt}
                    <Underline />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter (spans on lg) */}
          <div className="lg:col-span-2">
            <p className="font-semibold text-gray-900 mb-3">Stay Updated</p>
            <p className="text-sm text-gray-600 mb-4">
              Get new arrivals, price drops & tips in your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-stretch rounded-xl border border-gray-300 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none outline-none text-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>

            {/* App badges / payment row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-xs text-gray-500">We accept</span>
              {/* Payment placeholders */}
              {["visa", "mc", "upi"].map((k) => (
                <div
                  key={k}
                  className="h-6 w-10 rounded bg-gray-200 hover:bg-gray-300 transition"
                  title={k.toUpperCase()}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA Row */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-gray-200 bg-white px-4 py-4">
          <div className="text-sm text-gray-600">
            Need help choosing? Talk to an AutoFinds expert.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919703588400"
              className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-white px-4 py-2 text-blue-700 font-medium hover:bg-blue-50 transition"
            >
              <Phone size={16} /> Call Us
            </a>
            <a
              href="#sell"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition"
            >
              <Car size={16} /> Sell Your Car
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} AutoFinds. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-blue-700 transition">
              Sitemap
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Cookies
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1 text-gray-600 hover:text-blue-700 transition"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
