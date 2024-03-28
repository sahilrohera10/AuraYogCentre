import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";

export default function LandingPg() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
