import React, {useState} from "react";
import Judgement from './Judgement';


function CreateCard({ contact, onClick, onAccept, isActive }) {
    // State to control the visibility of the form modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => setIsModalOpen(true);
  
    // Function to close the modal
    const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div
        className={`p-4 max-w-lg mx-auto bg-white rounded-xl shadow-md flex items-center space-y-4 my-4 cursor-pointer ${
          isActive ? "bg-blue-200" : ""
        }`}
        onClick={onClick}
      >
        <div className="flex items-center flex-grow">
          <img
            className="h-24 w-24 rounded-full"
            src={contact.imgURL}
            alt={contact.name}
          />
          <div className="mx-4">
            <h2 className="text-xl font-semibold text-gray-900">{contact.name}</h2>
            <p className="text-gray-500">{contact.email}</p>
            <p className="text-gray-500">{contact.phone}</p>

            {isActive && (
              <div className="mt-2">
                {/* Show additional information here */}
                <p className="text-gray-700">Address: {contact.address}</p>
                <p className="text-gray-700">Police Station: {contact.police_station}</p>
                <p className="text-gray-700">Date & Hour: {contact.date_and_hour}</p>
                <p className="text-gray-700">Informer: {contact.name_informer}</p>
                <p className="text-gray-700">Residence: {contact.residence_informer}</p>
                <p className="text-gray-700">Complaint: {contact.complaint}</p>
                <p className="text-gray-700">Description: {contact.description}</p>
                <p className="text-gray-700">Property: {contact.property}</p>
                <p className="text-gray-700">Place: {contact.place}</p>
                <p className="text-gray-700">Distance: {contact.distance}</p>
                <p className="text-gray-700">Direction: {contact.direction}</p>
              </div>
            )}
          </div>
        </div>

        {/* Conditionally render buttons based on the 'accepted' state */}
        {!contact.accepted && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent div's onClick
              onAccept(); // Call the handler passed from the parent
            }}
            className="bg-green-500 text-white mx-2 px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none max-w-20"
          >
            Accept
          </button>
        )}
        {contact.accepted && (
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent div's onClick
              openModal(); // Open the modal when clicked
            }}
            className="bg-blue-500 text-white mx-2 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none max-w-28"
          >
            Judgement
          </button>
        )}
      </div>

      {/* Use the imported FormModal component */}
      <Judgement isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default CreateCard;

