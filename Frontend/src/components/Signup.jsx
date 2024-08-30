import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const [aadhaar, setAadhaar] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const validate = () => {
    let errors = {};
    const aadhaarRegex = /^\d{12}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/;

    if (!aadhaar.match(aadhaarRegex)) {
      errors.aadhaar = "Aadhaar number must be a 12-digit number";
    }

    if (!password.match(passwordRegex)) {
      errors.password =
        "Password must be at least 8 characters, with one uppercase, one lowercase, one digit, and one special character";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setServerError("");
    setIsSubmitting(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    let RoleId;
    switch (role) {
      case "Undertrial Prisoner":
        RoleId = 1;
        break;
      case "Legal Aid Provider":
        RoleId = 2;
        break;
      case "Judicial Authority":
        RoleId = 3;
        break;
      default:
        RoleId = 0;
        break;
    }

    try {
      const data = await signup({
        adharNo: aadhaar,
        password: password,
        userRole: RoleId,
      });
      console.log("Signup successful:", data);
      alert("SignUp Successful!");

      if (data.user.userRole === 1) {
        navigate("/content");
      } else if (data.user.userRole === 2) {
        navigate("/LegalAid");
      } else if (data.user.userRole === 3) {
        navigate("/prisoners");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setServerError("Failed to sign up. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select your role</option>
            <option value="Undertrial Prisoner">Undertrial Prisoner</option>
            <option value="Legal Aid Provider">Legal Aid Provider</option>
            <option value="Judicial Authority">Judicial Authority</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="aadhaar"
            className="block text-sm font-medium text-gray-700"
          >
            Aadhaar Number
          </label>
          <input
            type="text"
            id="aadhaar"
            name="aadhaar"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.aadhaar && (
            <div className="text-red-500 text-sm mt-1">{errors.aadhaar}</div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.password && (
            <div className="text-red-500 text-sm mt-1">{errors.password}</div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </div>
          )}
        </div>

        {serverError && (
          <div className="text-red-500 text-center text-sm mb-4">
            {serverError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already registered?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
