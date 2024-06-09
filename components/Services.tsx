"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import pepe from '../public/images/pepecoin.jpg';
import insight from '../public/images/insight.png';

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Services
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          We&apos;re dedicated to providing our members with essential tools and top-notch trading signals, helping them sharpen their competitive edge, maintain profitability, and reach their trading goals with confidence and precision.
          </p>
        </div>
        <Image
          src={pepe}
          width={500}
          height={500}
          alt="PEPE"
          className="absolute -right-4 -lg:right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Trading Signals
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Our trading signals provide clear entry prices, stop-loss levels, and take-profit targets, empowering informed decision-making.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Market Insights
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
           Get clear market analysis, insightful commentary, and unbiased updates on crypto and forex trends.
          </p>
        </div>
        <Image
          src={insight}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:right-[1%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
