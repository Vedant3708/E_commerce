import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6  text-blue-800">Contact Us</h1>
      <p className="text-lg mb-6 text-gray-700">
        We are here to assist you with any questions or concerns you may have about bail procedures and legal advice. Feel free to reach out to us through the contact details below.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg w-2/5 mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Contact Information</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600">
            No. 1101<br/>
            Godrej One<br />
            Vikhroli (E), Mumbai <br />
            India
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600">
            +91 9876543210
          </p>
          <p className="text-gray-600">
            +91 1234567890
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600">
            <a href="mailto:support@bailreckoner.com" className="text-blue-600 hover:text-blue-800">
              support@bailreckoner.com
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
