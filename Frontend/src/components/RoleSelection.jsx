// src/components/RoleSelection.jsx
import React from 'react';

const RoleSelection = ({ onRoleChange }) => {
  return (
    <div className="role-selection mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Select Your Role</h2>
      <label className="block mb-2">
        <input type="radio" name="role" value="undertrial" onChange={onRoleChange} className="mr-2" />
        <span className="text-gray-600">Undertrial Prisoner</span>
      </label>
      <label className="block mb-2">
        <input type="radio" name="role" value="legalAid" onChange={onRoleChange} className="mr-2" />
        <span className="text-gray-600">Legal Aid Provider</span>
      </label>
      <label className="block mb-2">
        <input type="radio" name="role" value="judicial" onChange={onRoleChange} className="mr-2" />
        <span className="text-gray-600">Judicial Authority</span>
      </label>
    </div>
  );
};

export default RoleSelection;
