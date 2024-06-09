import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import Killua from "../public/images/sad.jpg";
import Compe from "../public/images/comp.jpg";
import Social from "../public/images/social.jpg";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTradingview } from "react-icons/si";

const content = [
  {
    title: "About me",
    description:
      "Hello, I'm Exzort, and I'm from the Philippines. I began my trading journey in December 2021. My main strategy revolves around Price Action, supplemented with indicators for additional confluence in my trades.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image 
            src={Killua}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Achievements",
    description: (
      <>
        I achieved notable success by winning a trading competition hosted by My Funded FX prop firm. You can check out the details{" "}
        <a
          href="https://x.com/myfundedfx/status/1652684119313199109"
          className="font-bold text-white underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . Additionally, I passed four funded account evaluations with My Funded FX and received some payouts. However, I couldn&apos;t maintain those accounts due to academic commitments at the time. Now, I&apos;ve shifted my focus back to crypto trading.
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image 
            src={Compe}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Socials",
    description: (
      <>
        Stay connected with us on various social platforms for real-time updates and insights. Follow us to stay in the loop and never miss out on any important information.
        <div className="flex space-x-4 mt-4">
          <a href="https://t.me/exzortBTC" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-2xl text-white" />
          </a>
          <a href="https://x.com/exzortSanity" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-2xl text-white" />
          </a>
          <a href=" https://www.tradingview.com/u/Exzort/" target="_blank" rel="noopener noreferrer">
            <SiTradingview className="text-2xl text-white" />
          </a>
        </div>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image 
            src={Social}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
