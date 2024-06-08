"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "@/components/drop-down-menu";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full z-10">
      <FloatingNav navItems={navItems} />
      <Navbar />
    </div>
  );
}

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void; // Define scrollToServices function
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices, // Add scrollToServices to props
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
          <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">
            Home
          </div>
          <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">
            About
          </div>

          <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
            Gallery
          </div>
          <div onClick={scrollToBrands} className="hover:text-gray-50">
            Services
          </div>

          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
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
