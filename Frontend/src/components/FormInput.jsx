// src/components/FormInput.jsx
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormInput = ({ label, name, type }) => (
  <div className="form-input mb-4">
    <label htmlFor={name} className="block text-gray-700 font-medium mb-2">{label}:</label>
    <Field id={name} name={name} type={type} className="block w-full border border-gray-300 rounded-lg p-2 text-sm" />
    <ErrorMessage name={name} component="div" className="error-message mt-1" />
  </div>
);

export default FormInput;
