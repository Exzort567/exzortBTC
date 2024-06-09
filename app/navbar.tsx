"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "@/components/drop-down-menu";

interface FloatingNavDemoProps {
  scrollToHero: () => void;
  scrollToAbout: () => void;
  scrollToGallery: () => void;
  scrollToServices: () => void;
  scrollToPricing: () => void;
}

export function FloatingNavDemo({
  scrollToHero,
  scrollToAbout,
  scrollToGallery,
  scrollToServices,
  scrollToPricing,
}: FloatingNavDemoProps) {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: scrollToHero,
    },
    {
      name: "About",
      link: "#",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: scrollToAbout,
    },
    {
      name: "Gallery",
      link: "#",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: scrollToGallery,
    },
    {
      name: "Services",
      link: "#",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: scrollToServices,
    },
    {
      name: "Pricing",
      link: "#",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: scrollToPricing,
    },
  ];
  return (
    <div className="relative w-full z-10">
      <FloatingNav navItems={navItems} />
      <Navbar
        scrollToHero={scrollToHero}
        scrollToAbout={scrollToAbout}
        scrollToGallery={scrollToGallery}
        scrollToServices={scrollToServices}
        scrollToPricing={scrollToPricing}
      />
    </div>
  );
}

interface NavbarProps {
  scrollToHero: () => void;
  scrollToAbout: () => void;
  scrollToGallery: () => void;
  scrollToServices: () => void;
  scrollToPricing: () => void;
}

const Navbar = ({
  scrollToHero,
  scrollToAbout,
  scrollToGallery,
  scrollToServices,
  scrollToPricing,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50 bg-transparent">
        <div>
          <Link className="cursor-pointer" href="/">
            <h2 className="text-slate-100">ExzortBTC</h2>
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
              md:flex space-x-10 items-center
               text-slate-300 text-center 
               bg-clip-text text-transparent 
               bg-gradient-to-b from-neutral-50
                to bg-neutral-400 bg-opacity-50"
        >
          <div onClick={scrollToHero} className="hover:text-gray-50">
            Home
          </div>
          <div onClick={scrollToAbout} className="hover:text-gray-50">
            About
          </div>
          <div onClick={scrollToGallery} className="hover:text-gray-50">
            Gallery
          </div>
          <div onClick={scrollToServices} className="hover:text-gray-50">
            Services
          </div>
          <div onClick={scrollToPricing} className="hover:text-gray-50">
            Pricing
          </div>
        </div>

        

        <div className="hidden md:flex">
          <Link
            target="_blank"
            href="https://t.me/exzort567"
            className="
              inline-flex h-12 animate-shimmer items-center justify-center 
              rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
               focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
                focus:ring-offset-slate-50
  
              "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
