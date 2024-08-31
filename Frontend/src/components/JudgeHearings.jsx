import React, { useState } from "react";
import CreateCard from "./Createcard";
import contactsdata from "./Data/contactsdata";

const JudgeHearings = () => {
  const [activeContactId, setActiveContactId] = useState(null);
  const handleCardClick = (id) => {
    setActiveContactId(id === activeContactId ? null : id); // Toggle on click
  };
  return (
    <div className="flex-1 bg-gray-100 p-6">
      {contactsdata
        .filter((contact) => contact.accepted) // Filter contacts where accepted is true
        .map((contact) => (
          <CreateCard
            key={contact.id}
            contact={contact}
            onClick={() => handleCardClick(contact.id)}
            onAccept={() => handleAcceptClick(contact.id)}
            isActive={activeContactId === contact.id}
          />
        ))}
    </div>
  );
};

export default JudgeHearings;
