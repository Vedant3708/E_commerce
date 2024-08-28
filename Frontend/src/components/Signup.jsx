import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Signup() {
  const [role, setRole] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const validationSchema = Yup.object({
    aadhaar: Yup.string()
      .matches(/^\d{12}$/, 'Aadhaar number must be a 12-digit number')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
      .required('Required'),
    prisonerId: role === 'Undertrial Prisoner' ? Yup.string().required('Required') : Yup.string(),
    contact: role === 'Undertrial Prisoner' || role === 'Legal Aid Provider' || role === 'Judicial Authority'
      ? Yup.string()
          .matches(/^\d{10}$/, 'Phone number must be a 10-digit number')
          .required('Required')
      : Yup.string(),
    email: role === 'Undertrial Prisoner' || role === 'Legal Aid Provider' || role === 'Judicial Authority'
      ? Yup.string().email('Invalid email address').required('Required')
      : Yup.string(),
    organization: role === 'Legal Aid Provider' ? Yup.string().required('Required') : Yup.string(),
    barId: role === 'Legal Aid Provider' ? Yup.string().required('Required') : Yup.string(),
    courtName: role === 'Judicial Authority' ? Yup.string().required('Required') : Yup.string(),
    judicialId: role === 'Judicial Authority' ? Yup.string().required('Required') : Yup.string(),
  });

  const initialValues = {
    aadhaar: '',
    password: '',
    prisonerId: '',
    contact: '',
    email: '',
    organization: '',
    barId: '',
    courtName: '',
    judicialId: '',
  };

  const renderFormFields = () => {
    return (
      <>

        {role === 'Undertrial Prisoner' && (
          <>
            <div className="mb-4">
              <label htmlFor="prisonerId" className="block text-sm font-medium text-gray-700">Prisoner ID/Registration Number</label>
              <Field type="text" id="prisonerId" name="prisonerId" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="prisonerId" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Information</label>
              <Field type="text" id="contact" name="contact" placeholder="Phone Number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="contact" component="div" className="text-red-500 text-sm mt-1" />
              <Field type="email" id="email" name="email" placeholder="Email Address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="caseInfo" className="block text-sm font-medium text-gray-700">Current Case Information (Optional)</label>
              <Field as="textarea" id="caseInfo" name="caseInfo" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </>
        )}

        {role === 'Legal Aid Provider' && (
          <>
            <div className="mb-4">
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Law Firm/Organization Name</label>
              <Field type="text" id="organization" name="organization" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="organization" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="barId" className="block text-sm font-medium text-gray-700">Bar Council ID/Legal Registration Number</label>
              <Field type="text" id="barId" name="barId" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="barId" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Information</label>
              <Field type="text" id="contact" name="contact" placeholder="Phone Number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="contact" component="div" className="text-red-500 text-sm mt-1" />
              <Field type="email" id="email" name="email" placeholder="Email Address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </>
        )}

        {role === 'Judicial Authority' && (
          <>
            <div className="mb-4">
              <label htmlFor="courtName" className="block text-sm font-medium text-gray-700">Court/Judiciary Name</label>
              <Field type="text" id="courtName" name="courtName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="courtName" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="judicialId" className="block text-sm font-medium text-gray-700">Judicial ID Number</label>
              <Field type="text" id="judicialId" name="judicialId" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="judicialId" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Information</label>
              <Field type="text" id="contact" name="contact" placeholder="Phone Number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="contact" component="div" className="text-red-500 text-sm mt-1" />
              <Field type="email" id="email" name="email" placeholder="Email Address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </>
        )}

        <div className="mb-4">
          <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
          <Field type="text" id="aadhaar" name="aadhaar" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <ErrorMessage name="aadhaar" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div className="mb-4">
        <label htmlFor="aadhaarCard" className="block text-sm font-medium text-gray-700">Upload Aadhaar Card</label>
        <input 
          type="file" 
          id="aadhaarCard" 
          name="aadhaarCard" 
          accept="image/*,application/pdf"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <ErrorMessage name="aadhaarCard" component="div" className="text-red-500 text-sm mt-1" />
      </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <Field type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
        </div>

      </>
    );
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Signup</h1>
      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Role</label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={handleRoleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select your role</option>
          <option value="Undertrial Prisoner">Undertrial Prisoner</option>
          <option value="Legal Aid Provider">Legal Aid Provider</option>
          <option value="Judicial Authority">Judicial Authority</option>
        </select>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          // Handle form submission
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {renderFormFields()}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;