import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  KeyRound,
  ChevronLeft,
  ChevronRight,
  Star,
  BadgeCheck,
  Flame,
  Sparkles,
} from "lucide-react";

const SLIDE_DURATION_MS = 6500; // autoplay
const SWIPE_THRESHOLD = 50; // px

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1974&auto=format&fit=crop",
    tagline: "AutoFinds.in",
    title: "Buy & Sell Cars Easily",
    description:
      "Find verified new & used cars across India. Smart filters, fair prices, and a seamless experience from search to handshake.",
    button1: "Start Searching",
    button2: "Sell Your Car",
    badge: { text: "Verified Listings", icon: BadgeCheck },
    rating: 4.8,
    gradientFrom: "from-blue-50",
    gradientTo: "to-cyan-50",
    pill: "Hassle-free",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1592858167351-89c7f3f76d84?q=80&w=1974&auto=format&fit=crop",
    tagline: "Trust & Transparency",
    title: "Trusted by Car Lovers",
    description:
      "Connect with genuine buyers & verified dealers. Transparent history, price insights, and secure communication.",
    button1: "Explore Listings",
    button2: "Dealer Login",
    badge: { text: "Top Dealers", icon: Star },
    rating: 4.9,
    gradientFrom: "from-sky-50",
    gradientTo: "to-indigo-50",
    pill: "Trusted",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1974&auto=format&fit=crop",
    tagline: "Smart Choices",
    title: "Exclusive Deals Daily",
    description:
      "From budget hatchbacks to luxury SUVs—spot hot deals, compare prices, and lock the right one with confidence.",
    button1: "View Deals",
    button2: "Contact Support",
    badge: { text: "Hot Deal", icon: Flame },
    rating: 4.7,
    gradientFrom: "from-violet-50",
    gradientTo: "to-fuchsia-50",
    pill: "Best Value",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1974&auto=format&fit=crop",
    tagline: "Future Ready",
    title: "Go Electric with AutoFinds",
    description:
      "Explore EVs & hybrids with range, charging, and cost insights—built to make your next move future-proof.",
    button1: "Explore EVs",
    button2: "Compare Cars",
    badge: { text: "EV Specials", icon: Sparkles },
    rating: 4.8,
    gradientFrom: "from-emerald-50",
    gradientTo: "to-teal-50",
    pill: "Eco-Smart",
  },
];

export default function HeroCarouselPro() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0); // 0..100
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const startX = useRef(0);
  const deltaX = useRef(0);

  // Autoplay + progress
  useEffect(() => {
    if (paused) return;
    const startedAt = Date.now();
    setProgress(0);

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const pct = Math.min(100, (elapsed / SLIDE_DURATION_MS) * 100);
      setProgress(pct);
      if (elapsed >= SLIDE_DURATION_MS) {
        next();
      }
    }, 60);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused]);

  // Pause when tab not visible
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // Swipe (touch + mouse drag)
  const onPointerDown = (e) => {
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    deltaX.current = 0;
  };
  const onPointerMove = (e) => {
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    deltaX.current = x - startX.current;
  };
  const onPointerUp = () => {
    if (deltaX.current > SWIPE_THRESHOLD) prev();
    else if (deltaX.current < -SWIPE_THRESHOLD) next();
    startX.current = 0;
    deltaX.current = 0;
  };

  // Animation variants
  const bgVariants = {
    initial: { scale: 1.05, opacity: 0 },
    animate: { scale: 1.15, opacity: 1 },
    exit: { scale: 1.05, opacity: 0 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  const words = slides[index].title.split(" ");

  return (
    <section
      className={`relative w-full h-[68vh] sm:h-[76vh] md:h-[86vh] lg:h-[92vh] overflow-hidden rounded-b-3xl shadow-xl bg-gradient-to-b ${slides[index].gradientFrom} ${slides[index].gradientTo}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="AutoFinds featured"
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Background (Ken Burns) */}
          <motion.img
            src={slides[index].image}
            alt={slides[index].title}
            variants={bgVariants}
            transition={{ duration: 10, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          {/* Light overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-white/30" />

          {/* Content layer with parallax */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            variants={contentVariants}
          >
            {/* Pill */}
            <motion.span
              className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs sm:text-sm font-medium text-blue-700 shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
            >
              {slides[index].pill}
              <span className="h-1 w-1 rounded-full bg-blue-400 inline-block" />
              {slides[index].tagline}
            </motion.span>

            {/* Title (stagger each word) */}
            <motion.h1
              className="mx-auto max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
              aria-live="polite"
            >
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  initial={{ y: 24, opacity: 0, rotateX: 25 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    transition: { delay: 0.3 + i * 0.06, duration: 0.45 },
                  }}
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-3 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-700"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            >
              {slides[index].description}
            </motion.p>

            {/* Buttons + Badge + Rating */}
            <motion.div
              className="mt-7 flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            >
              <button className="px-7 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition transform">
                {slides[index].button1}
              </button>
              <button className="px-7 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition">
                {slides[index].button2}
              </button>

              {/* Badge */}
              <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-gray-700 shadow">
                {slides[index].badge.icon
                  ? (() => {
                      const Icon = slides[index].badge.icon;
                      return <Icon className="h-4 w-4 text-blue-600" />;
                    })()
                  : null}

                <span className="text-sm font-medium">
                  {slides[index].badge.text}
                </span>

                <span className="ml-2 inline-flex items-center gap-1 text-xs text-amber-500">
                  <Star className="h-3 w-3 fill-amber-500 stroke-amber-500" />
                  {slides[index].rating}
                </span>
              </span>
            </motion.div>

            {/* Quick Filters / Chips */}
            <motion.div
              className="mt-6 flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
            >
              {["SUV", "Hatchback", "Sedan", "Luxury", "EV", "Under ₹10L"].map(
                (chip, i) => (
                  <button
                    key={chip}
                    className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:shadow transition"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {chip}
                  </button>
                )
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div
        className="absolute inset-0"
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onMouseLeave={() => {
          startX.current = 0;
          deltaX.current = 0;
        }}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
      >
        {/* Left */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="group absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow hover:bg-white transition"
        >
          {/* Use Key icon to stay unique */}
          <KeyRound className="h-5 w-5 text-blue-600 group-hover:scale-110 transition" />
        </button>

        {/* Right */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="group absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow hover:bg-white transition"
        >
          <KeyRound className="h-5 w-5 text-blue-600 group-hover:scale-110 transition" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <div className="mx-auto mb-4 h-1 w-11/12 overflow-hidden rounded-full bg-white/60 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Thumbnails / Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`group relative h-4 w-4 rounded-full transition
              ${
                i === index
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
          >
            {/* Preview thumbnail on hover (desktop) */}
            <div className="pointer-events-none absolute -top-20 left-1/2 hidden -translate-x-1/2 rounded-lg border bg-white p-1 shadow-md group-hover:block">
              <img
                src={s.image}
                alt={s.title}
                className="h-16 w-28 rounded-md object-cover"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Trust Bar (below hero) */}
      <div className="absolute left-1/2 bottom-[-28px] -translate-x-1/2 w-[92%]">
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-2xl bg-white/80 p-3 shadow backdrop-blur">
          {[
            { icon: BadgeCheck, title: "Verified", sub: "Dealers & Listings" },
            { icon: Star, title: "4.8/5", sub: "User Ratings" },
            { icon: Flame, title: "Hot Deals", sub: "Daily Updates" },
            { icon: Sparkles, title: "Smart Match", sub: "AI Suggestions" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-gray-50 transition"
            >
              <item.icon className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
