import React, { useState } from "react";
import JudgeHearings from "./JudgeHearings";
import CreateCard from "./Createcard";
import contactsdata from "./Data/contactsdata";

const Prisoners = ({ userRole }) => {
  const [activeContactId, setActiveContactId] = useState(null);
  const [currentView, setCurrentView] = useState("applications");

  const [contacts, setContacts] = useState(contactsdata);

  const handleCardClick = (id) => {
    setActiveContactId(id === activeContactId ? null : id); // Toggle on click
  };

  const handleAcceptClick = (id) => {
    // Update the 'accepted' property of the contact to true
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id ? { ...contact, accepted: true } : contact
      )
    );
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-64 bg-gray-800 text-white rounded-lg">
        <div className="p-4 font-bold text-xl">Bail Reckoner</div>
        <ul className="space-y-4 p-4">
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => setCurrentView("applications")}
          >
            Home
          </li>
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => setCurrentView("hearings")}
          >
            My Hearings
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Profile Settings
          </li>
        </ul>
      </div>
      {currentView === "applications" && (
        <div className="flex-1 bg-gray-100 p-6">
          {contacts
            .filter((contact) => !contact.accepted) // Filter out already accepted contacts
            .map((contact) => (
              <CreateCard
                key={contact.id}
                contact={contact}
                onClick={() => handleCardClick(contact.id)}
                onAccept={() => handleAcceptClick(contact.id)} // Pass the accept handler
                isActive={activeContactId === contact.id}
              />
            ))}
        </div>
      )}
      {currentView === "hearings" && <JudgeHearings />}
    </div>
  );
};

export default Prisoners;
