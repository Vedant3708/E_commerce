import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';

const Login = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Formik
        initialValues={{ aadhaar: '', password: '' }}
        validationSchema={Yup.object({
          aadhaar: Yup.string().matches(/^\d{12}$/, 'Aadhaar number must be a 12-digit number').required('Required'),
          password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
          .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
          .matches(/\d/, 'Password must contain at least one digit')
          .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
          .required('Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <FormInput label="Aadhaar Number" name="aadhaar" type="text" />
            <FormInput label="Password" name="password" type="password" />
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

export default Login;
