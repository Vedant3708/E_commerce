import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';

const Login = () => {
  return (
    <div className=" mx-auto w-2/5 h-3/5 mt-10 mb-10 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <FormInput label="Email" name="email" type="email" />
            <FormInput label="Password" name="password" type="password" />
            <button
              type="submit"
              className="mx-auto block mt-4 w-1/2 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
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
