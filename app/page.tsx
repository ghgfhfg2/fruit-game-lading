"use client";

import Hero from "./components/Hero";
import GamePreview from "./components/GamePreview";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
