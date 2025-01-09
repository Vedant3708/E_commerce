import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      // Pass the navigate function itself, not calling it directly
      await login({ username: values.username, password: values.password }, navigate);
    } catch (error) {
      console.error("Error during login:", error);
      setStatus("Failed to log in. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="mx-auto w-2/5 h-3/5 mt-0 mb-10 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, status, isSubmitting }) => (
          <Form>
            <FormInput label="Username" name="username" type="text" />
            <FormInput label="Password" name="password" type="password" />
            {status && (
              <div className="text-red-500 text-center text-sm mb-4">
                {status}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mx-auto block mt-4 w-1/2 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              {isSubmitting ? "Submitting..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
