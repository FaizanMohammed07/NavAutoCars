import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // modern arrow icons

const slides = [
  {
    id: 1,

    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80",
    tagline: "AutoFinds.in",
    title: "Find Your Dream Car",
    description:
      "Browse thousands of verified cars – hatchbacks, SUVs, EVs & more. The smarter way to buy and sell cars.",
    button1: "Start Searching",
    button2: "Sell Your Car",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1920&q=80",
    tagline: "Trusted Dealers",
    title: "Verified & Transparent",
    description:
      "Trusted by millions across India. Genuine dealers, secure payments, and zero-hassle process.",
    button1: "Explore Listings",
    button2: "Dealer Login",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80",
    tagline: "Smart Choices",
    title: "Exclusive Offers",
    description:
      "Best deals on cars with financing & EMI options. Don’t just buy a car, get the best deal with AutoFinds.",
    button1: "View Deals",
    button2: "Contact Support",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagline: "Future Ready",
    title: "Go Electric",
    description:
      "Explore the widest EV collection – sustainable, powerful, and built for tomorrow.",
    button1: "Explore EVs",
    button2: "Compare Cars",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1920&q=80",

    tagline: "Luxury & Comfort",
    title: "Premium Cars",
    description:
      "Step into luxury with AutoFinds’ curated range of high-end cars designed for elegance and performance.",
    button1: "Discover Luxury",
    button2: "Request Test Drive",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1750780439483-16f092fe9d7b?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    tagline: "Wide Collection",
    title: "From Hatchbacks to SUVs",
    description:
      "Whether it’s your first car or your dream ride – AutoFinds has it all under one roof.",
    button1: "Browse Collection",
    button2: "Find Dealers",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // autoplay every 6s
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slideVariants = {
    initial: { opacity: 0, scale: 1.1, x: 100 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.95, x: -100 },
  };

  return (
    <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden rounded-b-3xl shadow-xl">
      {/* Slides */}
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="uppercase text-sm md:text-lg font-bold text-blue-400 tracking-widest"
            >
              {slides[current].tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-2 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-4 max-w-2xl text-base md:text-lg lg:text-xl text-gray-200"
            >
              {slides[current].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 flex flex-col sm:flex-row gap-4"
            >
              <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition hover:scale-105">
                {slides[current].button1}
              </button>
              <button className="px-6 py-3 rounded-full border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold shadow-lg transition hover:scale-105">
                {slides[current].button2}
              </button>
            </motion.div>

            {/* 🔍 Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-8 w-full max-w-xl bg-white rounded-full shadow-lg flex items-center px-4 py-2"
            >
              <input
                type="text"
                placeholder="Search by car model, brand..."
                className="flex-grow px-3 py-2 rounded-l-full outline-none text-gray-700"
              />
              <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Search
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-blue-200 text-gray-900 shadow-md z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-blue-200 text-gray-900 shadow-md z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              current === idx
                ? "bg-blue-600 scale-125"
                : "bg-gray-400/70 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
