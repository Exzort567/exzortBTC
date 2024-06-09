"use client";

import { useRef } from "react";
import { FloatingNavDemo } from "./navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { HeroSection } from "@/components/HeroSection";
import { StickyScrollRevealDemo } from "@/components/About";
import { HeroParallaxDemo } from "@/components/Gallery";
import { WobbleCardDemo } from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQS from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);

  return (
    <div className="w-full screen md:items-center bg-black/[0.86] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <FloatingNavDemo 
        scrollToHero={() => heroRef.current.scrollIntoView({ behavior: "smooth" })}
        scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
        scrollToGallery={() => galleryRef.current.scrollIntoView({ behavior: "smooth" })}
        scrollToServices={() => servicesRef.current.scrollIntoView({ behavior: "smooth" })}
        scrollToPricing={() => pricingRef.current.scrollIntoView({ behavior: "smooth" })}
      />
      <Spotlight className="hidden md:flex md:left-80 md:-top-80" fill="white" />

      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={aboutRef}>
        <StickyScrollRevealDemo />
      </div>
      <div ref={galleryRef}>
        <HeroParallaxDemo />
      </div>
      <div ref={servicesRef}>
        <WobbleCardDemo />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <FAQS />
      <Footer />
    </div>
  );
}
