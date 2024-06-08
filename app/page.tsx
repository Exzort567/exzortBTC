import Image from "next/image";
import { FloatingNavDemo } from "./navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "../components/ui/flip-words";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  const words = ["Forex", "Crypto"];
  return (
    <div className="w-full -screen md:items-center bg-black/[0.86] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <FloatingNavDemo/>
      <Spotlight className="hidden md:flex md:left-80 md:-top-80" fill="white"/>

      <div className="h-[40rem] flex flex-col justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-400 dark:text-neutral-400 text-center">
          <div className="flex justify-center">
            <FlipWords words={words} />
            <p className="text-white ml-2">Trader</p>
          </div>
          <p className="mt-4">
            Expert Insights & Level-Headed<br />
            Analysis on Crypto and Forex Markets
          </p>
        </div>
        
        <div className="mt-8 w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-300 to-gray-400 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black/[0.87] border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
    
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Join our Telegram Channel
            </h1>
    
            <p className="font-normal text-base text-slate-200 mb-4 relative z-50">
            Join us to discover valuable insights, strategies, and support to excel in the exciting world of trading. 
            </p>
            
            <a href="https://t.me/exzortBTC" target="_blank"> <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Join here!
            </button></a>
           
    
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
