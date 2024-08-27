import React from 'react';

const RoleSelection = ({ selectedRole, setSelectedRole }) => {
    return (
        <div>
            <h2>Select Your Role</h2>
            <button onClick={() => setSelectedRole('Prisoner')}>Undertrial Prisoner</button>
            <button onClick={() => setSelectedRole('Legal Aid')}>Legal Aid Provider</button>
            <button onClick={() => setSelectedRole('Judicial Authority')}>Judicial Authority</button>
        </div>
    );
};

export default RoleSelection;
