import Image from "next/image";
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
  return (
    <div className="w-full -screen md:items-center bg-black/[0.86] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <FloatingNavDemo />
      <Spotlight className="hidden md:flex md:left-80 md:-top-80" fill="white" />

      <HeroSection />
      <StickyScrollRevealDemo/>
      <HeroParallaxDemo/>
      <WobbleCardDemo/>
      <Pricing/>
      <FAQS/>
      <Footer/>
    </div>
  );
}
