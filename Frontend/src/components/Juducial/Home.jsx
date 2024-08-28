import React, { useState } from "react";
import contacts from "./contacts";

function CreateCard({ contact, onClick, isActive }) {
  return (
    <div
      className={`p-4 max-w-lg mx-auto bg-white rounded-xl shadow-md flex items-center space-y-4 my-4 cursor-pointer ${isActive ? "bg-blue-200" : ""}`}
      onClick={onClick}
    >
      <img
        className="h-24 w-24 rounded-full"
        src={contact.imgURL}
        alt={contact.name}
      />
      <div className="ml-4">
        <h2 className="text-xl font-semibold text-gray-900">{contact.name}</h2>
        <p className="text-gray-500">{contact.email}</p>
        <p className="text-gray-500">{contact.phone}</p>

        {isActive && (
          <div className="mt-2">
            {/* Show additional information here */}
            <p className="text-gray-700">Address : {contact.address}</p>
            <p className="text-gray-700">Police Station : {contact.police_station}</p>
            <p className="text-gray-700">Date & Hour : {contact.date_and_hour}</p>
            <p className="text-gray-700">informer : {contact.name_informer}</p>
            <p className="text-gray-700">Residence : {contact.residence_informer}</p>
            <p className="text-gray-700">Complaint : {contact.complaint}</p>
            <p className="text-gray-700">Description : {contact.description}</p>
            <p className="text-gray-700">Property : {contact.property}</p>
            <p className="text-gray-700">Place : {contact.place}</p>
            <p className="text-gray-700">Distance : {contact.distance}</p>
            <p className="text-gray-700">Direction : {contact.direction}</p>
            {/* Add more fields as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

function Home() {
  const [activeContactId, setActiveContactId] = useState(null);

  const handleCardClick = (id) => {
    setActiveContactId(id === activeContactId ? null : id); // Toggle on click
  };

  return (
    <div>
      {contacts.map((contact) => (
        <CreateCard
          key={contact.id}
          contact={contact}
          onClick={() => handleCardClick(contact.id)}
          isActive={activeContactId === contact.id}
        />
      ))}
    </div>
  );
}

export default Home;
