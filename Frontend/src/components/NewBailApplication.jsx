import React, { useState } from "react";

const NewBailApplication = () => {
  const [firDetails, setFirDetails] = useState({
    bookNo: "",
    policeStation: "",
    district: "",
    occurrenceDateTime: "",
    reportDateTime: "",
    informerName: "",
    offenceDescription: "",
    occurrencePlace: "",
    criminalName: "",
    investigationSteps: "",
    dispatchDateTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirDetails({ ...firDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send `firDetails` to the backend
    console.log("FIR Details Submitted:", firDetails);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 p-6">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">New Bail Application</h2>
        
        {/* FIR Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">FIR Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Book No.</label>
              <input type="text" name="bookNo" value={firDetails.bookNo} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Police Station</label>
              <input type="text" name="policeStation" value={firDetails.policeStation} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">District</label>
              <input type="text" name="district" value={firDetails.district} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Date and Hour of Occurrence</label>
              <input type="datetime-local" name="occurrenceDateTime" value={firDetails.occurrenceDateTime} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Date and Hour When Reported</label>
              <input type="datetime-local" name="reportDateTime" value={firDetails.reportDateTime} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name and Residence of Informer</label>
              <input type="text" name="informerName" value={firDetails.informerName} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Brief Description of Offence</label>
              <textarea name="offenceDescription" value={firDetails.offenceDescription} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Place of Occurrence</label>
              <input type="text" name="occurrencePlace" value={firDetails.occurrencePlace} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name & Address of the Criminal</label>
              <input type="text" name="criminalName" value={firDetails.criminalName} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Steps Taken Regarding Investigation</label>
              <textarea name="investigationSteps" value={firDetails.investigationSteps} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Date and Time of Despatch from Police Station</label>
              <input type="datetime-local" name="dispatchDateTime" value={firDetails.dispatchDateTime} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit FIR Details</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBailApplication;
