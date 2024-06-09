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
    title: "compe",
    link: "https://t.me/exzortBTC",
    thumbnail: compe,
  },
  {
    title: "Certificate 1",
    link: "https://t.me/exzortBTC",
    thumbnail: certOne,
  },
  {
    title: "Certificate 2",
    link: "https://t.me/exzortBTC",
    thumbnail: certTwo,
  },

  {
    title: "Certificate 3",
    link: "https://t.me/exzortBTC",
    thumbnail: certThree,
  },
  {
    title: "Certificate 4",
    link: "https://t.me/exzortBTC",
    thumbnail: certFour,
  },
  {
    title: "Certificate 5",
    link: "https://t.me/exzortBTC",
    thumbnail: certFive,
  },

  {
    title: "Certificate 6",
    link: "https://t.me/exzortBTC",
    thumbnail: certSix,
  },
  {
    title: "Certificate 7",
    link: "https://t.me/exzortBTC",
    thumbnail: certSeven,
  },
  {
    title: "Certificate 8",
    link: "https://t.me/exzortBTC",
    thumbnail: certEight,
  },
  {
    title: "Certificate 9",
    link: "https://t.me/exzortBTC",
    thumbnail: certNine,
  },
 
];
