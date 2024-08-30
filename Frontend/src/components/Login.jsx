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
      const data = await login({
        adharNo: values.aadhaar,
        password: values.password,
      });

      console.log("Login successful:", data);
      alert("Login successful!");

      if (data.user.userRole === 1) {
        navigate("/content");
      } else if (data.user.userRole === 2) {
        navigate("/LegalAid");
      } else if (data.user.userRole === 3) {
        navigate("/prisoners");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setStatus("Failed to log in. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-2/5 h-3/5 mt-0 mb-10 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <Formik
        initialValues={{ aadhaar: "", password: "" }}
        validationSchema={Yup.object({
          aadhaar: Yup.string()
            .matches(/^\d{12}$/, "Aadhaar number must be a 12-digit number")
            .required("Required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .matches(
              /[A-Z]/,
              "Password must contain at least one uppercase letter"
            )
            .matches(
              /[a-z]/,
              "Password must contain at least one lowercase letter"
            )
            .matches(/\d/, "Password must contain at least one digit")
            .matches(
              /[@$!%*?&#]/,
              "Password must contain at least one special character"
            )
            .required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, status, isSubmitting }) => (
          <Form>
            <FormInput label="Aadhaar Number" name="aadhaar" type="text" />
            <FormInput label="Password" name="password" type="password" />
            {errors.server && (
              <div className="text-red-500 text-center text-sm mb-4">
                {errors.server}
              </div>
            )}
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
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm">
                Not registered?{" "}
                <a href="/signup" className="text-indigo-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
