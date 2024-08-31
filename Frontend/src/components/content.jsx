import React, { useState } from "react";
import { Link } from "react-router-dom";

import prisonersData from "./prisonerdata"; // Adjust the import path as necessary

const Content = () => {
  const [selectedPrisoner, setSelectedPrisoner] = useState(prisonersData[0]);

  const handleChangePrisoner = (event) => {
    const prisonerId = parseInt(event.target.value, 10);
    const prisoner = prisonersData.find((p) => p.id === prisonerId);
    setSelectedPrisoner(prisoner);
  };

  return (
    <div className="bg-gray-100 flex min-h-screen">
      <div className="w-full flex">
        {/* Left Side: Prisoner Information and Latest Updates */}
        <div className="w-1/3 bg-gray-100 p-6 flex flex-col space-y-6">
          {/* Prisoner Information Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              Prisoner Information
            </h2>
            <select
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              onChange={handleChangePrisoner}
              value={selectedPrisoner.id}
            >
              {prisonersData.map((prisoner) => (
                <option key={prisoner.id} value={prisoner.id}>
                  {prisoner.name}
                </option>
              ))}
            </select>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="font-semibold text-black">Name:</p>
                <p className="text-gray-900">{selectedPrisoner.name}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-black">ID Number:</p>
                <p className="text-gray-900">{selectedPrisoner.idNumber}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-black">Date of Birth:</p>
                <p className="text-gray-900">{selectedPrisoner.dob}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-black">City:</p>
                <p className="text-gray-900">{selectedPrisoner.city}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-black">State:</p>
                <p className="text-gray-900">{selectedPrisoner.state}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-black">Sentence:</p>
                <p className="text-gray-900">{selectedPrisoner.sentence}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-black">Cell Number:</p>
                <p className="text-gray-900">{selectedPrisoner.cellNumber}</p>
              </div>
            </div>
          </div>

          {/* Latest Updates Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
            <h2 className="text-xl font-bold mb-2">Latest Updates</h2>
            <p className="text-gray-700 text-sm mb-4">
              Stay informed with the latest news and updates on law and
              judiciary in India.
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  Supreme Court Ruling on Recent Case
                </a>
                <p className="text-gray-500 text-xs">August 28, 2024</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  New Amendments in the Criminal Code
                </a>
                <p className="text-gray-500 text-xs">August 25, 2024</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  Upcoming Legal Reforms Discussion
                </a>
                <p className="text-gray-500 text-xs">August 22, 2024</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Other Content */}
        <div className="w-2/3 p-6 space-y-6">
          {/* Hero Section */}

          {/* Information Sections */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Calculate Bail Amount</h2>
              <p className="text-gray-700 mb-4">
                Use our intuitive bail calculator to estimate the bail amount
                based on various factors.
              </p>
              <Link to="/bailcal">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition">
                  Try the Calculator
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">
                Understand Bail Procedures
              </h2>
              <p className="text-gray-700 mb-4">
                Learn about the steps involved in the bail process and what you
                need to prepare.
              </p>
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-400 transition">
                Learn More
              </button>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Jane Smith</p>
                <p className="text-gray-600">
                  "The bail calculator was a lifesaver! It made the process so
                  much easier to understand."
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Michael Johnson</p>
                <p className="text-gray-600">
                  "I appreciate the clear instructions and helpful resources.
                  The bail reckoner is a great tool."
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Content;
