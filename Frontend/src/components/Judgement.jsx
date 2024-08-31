// File: FormModal.jsx
import React, {useState} from "react";

function Judgement({ isOpen, onClose }) {
    const [selectedOption, setSelectedOption] = useState(""); // State to track selected radio button
    const [decision, setDecision] = useState(""); // State to track radio button (Accepted or Rejected) for Not Convicted
    const [textareaValue, setTextareaValue] = useState(""); // State to track textarea input

    // Function to handle radio button change
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    // Function to handle decision radio button change
    const handleDecisionChange = (event) => {
      setDecision(event.target.value);
    };

    // Function to handle textarea change
    const handleTextareaChange = (event) => {
      setTextareaValue(event.target.value);
    };
  
    if (!isOpen) return null; // Do not render anything if the modal is not open
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Result Form</h2>
          {/* Form content */}
          <form>
            {/* Radio buttons for "Convicted" and "Not Convicted" */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Status:</label>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="convicted"
                  name="status"
                  value="convicted"
                  checked={selectedOption === "convicted"}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <label htmlFor="convicted" className="text-gray-700">Convicted</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="notConvicted"
                  name="status"
                  value="notConvicted"
                  checked={selectedOption === "notConvicted"}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <label htmlFor="notConvicted" className="text-gray-700">Not Convicted</label>
              </div>
            </div>
  
            {/* Conditionally render fields based on the selected radio button */}
            {selectedOption === "convicted" && (
              <div className="mb-4">
                <label className="block text-gray-700">Sections (Convicted):</label>
                <textarea className="w-full px-4 py-2 border rounded-md" />

                <label className="block text-gray-700">Total Sentence (Convicted):</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md" />

                {/* <label className="block text-gray-700 mb-2">Select Sections:</label>
                <select className="w-full px-4 py-2 border rounded-md">
                  <option value="" disabled>Select an option</option>
                  <option value="option1">IPC</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select> */}
              </div>
              
            )}
  
            {selectedOption === "notConvicted" && (
              <div className="mb-4">
                {/* Radio buttons for "Accepted" and "Rejected" */}
                <label className="block text-gray-700 mb-2">Bail:</label>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="accepted"
                    name="decision"
                    value="accepted"
                    checked={decision === "accepted"}
                    onChange={handleDecisionChange}
                    className="mr-2"
                  />
                  <label htmlFor="accepted" className="text-gray-700">Accepted</label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="rejected"
                    name="decision"
                    value="rejected"
                    checked={decision === "rejected"}
                    onChange={handleDecisionChange}
                    className="mr-2"
                  />
                  <label htmlFor="rejected" className="text-gray-700">Rejected</label>
                </div>

                {/* Text area */}
                <label className="block text-gray-700 mb-2">Remarks:</label>
                <textarea
                  value={textareaValue}
                  onChange={handleTextareaChange}
                  className="w-full px-4 py-2 border rounded-md"
                  rows="4"
                  placeholder="Enter your remarks here..."
                ></textarea>

                <label className="block text-gray-700 mb-2">Next Hearing :</label>
                <input type="date" name="nexthearing" id="" />
              </div>
            )}
          {/* Add more fields as needed */}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
            <button
              type="submit"
              className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Judgement;
