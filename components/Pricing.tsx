"use client";

import { useState } from "react";
import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";

const plans = [
  {
    index: 0,
    name: "Monthly",
    price: "$25",
    features: ["1-5 Trading Signals per day"],
    style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description: "Ideal for consistent traders seeking daily signals with flexibility",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Lifetime",
    price: "$125",
    features: [
      "1-5 Trading Signals per day",
      "Learning Resources",
      "Lifetime access to the private channel",
    ],
    style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description: "Perfect for long-term traders looking for continuous support and resources.",
    button: "Buy Now",
  },
];

const PaymentModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
      <p>BEP20: 0x2cf234470471efc87a12b2d03acd5d9d9c0a3cfd</p>
      <p>TRC20: TWfcZHfzA484n8wYSjqyjBXp892uggbZcK</p>
      <p>ERC20: 0x2cf234470471efc87a12b2d03acd5d9d9c0a3cfd</p>
      <p className="mt-4">After successful payment, take a screenshot and send it to us on <a target="_blank" href="https://t.me/exzort567" className="text-blue-400 underline">Telegram</a>.</p>
      <button onClick={onClose} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Close
      </button>
    </div>
  </div>
);

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyNowClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="w-full md:items-center md:justify-center mt-12 bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex items-center justify-center flex-col ">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          <br /> Choose your plan
        </div>
        <div className="grid md:grid-cols-2 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start ">
          {plans.map((plan) => (
            <div key={plan.name} className="h-full flex flex-col justify-between border rounded-3xl px-6">
              <div className={plan.style}>
                <div className="text-4xl flex items-center font-medium">
                  {plan.name}
                </div>
                <div className="text-3xl pt-6 ">{plan.price}</div>
                <div className="py-6">{plan.description}</div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-lg py-2 flex space-x-2 items-center">
                      <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={handleBuyNowClick} className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && <PaymentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Pricing;
