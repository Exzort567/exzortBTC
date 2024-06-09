"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import compe from '../public/images/comp.jpg'
import certOne from '../public/images/cert8.jpg'
import certTwo from '../public/images/cert4.jpg'
import certThree from '../public/images/cert2.jpg'
import certFour from '../public/images/cert3.jpg'
import certFive from '../public/images/cert4.jpg'
import certSix from '../public/images/cert5.jpg'
import certSeven from '../public/images/cert6.jpg'
import certEight from '../public/images/cert7.jpg'
import certNine from '../public/images/cert8.jpg'


export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: compe,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: certOne,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: certTwo,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: certThree,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: certFour,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: certFive,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: certSix,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: certSeven,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: certEight,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: certNine,
  },
 
];
