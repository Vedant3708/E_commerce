import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';

const Signup = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <Formik
        initialValues={{
          aadhaar: '',
          phone: '',
          firstName: '',
          middleName: '',
          lastName: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          aadhaar: Yup.string()
            .matches(/^\d{12}$/, 'Aadhaar number must be a 12-digit number')
            .required('Required'),
          phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be a 10-digit number')
            .required('Required'),
          firstName: Yup.string()
            .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
            .max(50, 'First name must be 50 characters or less')
            .required('Required'),
          middleName: Yup.string()
            .matches(/^[A-Za-z]*$/, 'Middle name must contain only letters')
            .max(50, 'Middle name must be 50 characters or less')
            .nullable(),
          lastName: Yup.string()
            .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
            .max(50, 'Last name must be 50 characters or less')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/\d/, 'Password must contain at least one digit')
            .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <FormInput label="Aadhaar Number" name="aadhaar" type="text" />
            <FormInput label="Phone Number" name="phone" type="text" />
            <FormInput label="First Name" name="firstName" type="text" />
            <FormInput label="Middle Name" name="middleName" type="text" />
            <FormInput label="Last Name" name="lastName" type="text" />
            <FormInput label="Password" name="password" type="password" />
            <FormInput label="Confirm Password" name="confirmPassword" type="password" />
            <button
              type="submit"
              className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
