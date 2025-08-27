import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { PropertyDetails } from "@/components/PropertyDetails";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Pricing />
      <Amenities />
      <Gallery />
      <PropertyDetails />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;