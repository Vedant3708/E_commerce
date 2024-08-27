import React, { useState } from 'react';

function SignupPage() {
  const [role, setRole] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const renderFormFields = () => {
    switch (role) {
      case 'Undertrial Prisoner':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="prisonerId" className="block text-sm font-medium text-gray-700">Prisoner ID/Registration Number</label>
              <input type="text" id="prisonerId" name="prisonerId" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Information</label>
              <input type="text" id="contact" name="contact" placeholder="Phone Number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <input type="email" id="email" name="email" placeholder="Email Address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="caseInfo" className="block text-sm font-medium text-gray-700">Current Case Information (Optional)</label>
              <textarea id="caseInfo" name="caseInfo" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </>
        );

      case 'Legal Aid Provider':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Law Firm/Organization Name</label>
              <input type="text" id="organization" name="organization" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="barId" className="block text-sm font-medium text-gray-700">Bar Council ID/Legal Registration Number</label>
              <input type="text" id="barId" name="barId" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Information</label>
              <input type="text" id="contact" name="contact" placeholder="Phone Number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <input type="email" id="email" name="email" placeholder="Email Address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </>
        );

      case 'Judicial Authority':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="courtName" className="block text-sm font-medium text-gray-700">Court/Judiciary Name</label>
              <input type="text" id="courtName" name="courtName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="judicialId" className="block text-sm font-medium text-gray-700">Judicial ID Number</label>
              <input type="text" id="judicialId" name="judicialId" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Information</label>
              <input type="text" id="contact" name="contact" placeholder="Phone Number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <input type="email" id="email" name="email" placeholder="Email Address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center h-full">
      <div className="container mt-10 mb-10 mx-auto p-2 bg-white rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Role</label>
            <select id="role" name="role" value={role} onChange={handleRoleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="">Choose your role</option>
              <option>Undertrial Prisoner</option>
              <option>Legal Aid Provider</option>
              <option>Judicial Authority</option>
            </select>
          </div>

          {renderFormFields()}

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <button type="submit" className="w-1/2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-auto block">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;