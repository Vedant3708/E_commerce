import React, { useState } from "react";
import NewBailApplication from "./NewBailApplication";

const LegalAidProviderDashboard = ({ userRole }) => {
  const [currentView, setCurrentView] = useState("dashboard");

  if (userRole !== "Legal Aid Provider") {
    return <p>You do not have access to this page.</p>;
  }

  // Mock Data for Ongoing Cases
  const cases = [
    {
      id: 1,
      caseName: "State vs. John Doe",
      status: "In Progress",
      nextHearing: "12th September 2024",
    },
    {
      id: 2,
      caseName: "State vs. Jane Doe",
      status: "Awaiting Documents",
      nextHearing: "20th September 2024",
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white rounded-lg">
        <div className="p-4 font-bold text-xl">Bail Reckoner</div>
        <ul className="space-y-4 p-4">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={() => setCurrentView("dashboard")}>
            Home
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={() => setCurrentView("dashboard")}>
            My Cases
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={() => setCurrentView("newBailApplication")}>
            New Bail Application
          </li>
          
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Profile Settings
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome, Advocate Kranti</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
        </div>

        {/* Conditional Rendering based on currentView */}
        {currentView === "dashboard" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Ongoing Cases</h2>
            <div className="grid grid-cols-2 gap-4">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="bg-gray-200 p-4 rounded shadow">
                  <h3 className="text-xl font-semibold">{caseItem.caseName}</h3>
                  <p className="text-gray-600">Status: {caseItem.status}</p>
                  <p className="text-gray-600">Next Hearing: {caseItem.nextHearing}</p>
                  <button className="mt-4 bg-green-500 text-white px-3 py-1 rounded">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === "newBailApplication" && (
          <NewBailApplication />
        )}
      </div>
    </div>
  );
};

export default LegalAidProviderDashboard;
