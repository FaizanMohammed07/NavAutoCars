import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroCarousel from "./pages/Home";
import CarListing from "./components/Listings";

function App() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <CarListing />
      {/* Other components can be added here */}
      <Footer />
    </div>
  );
}

export default App;
