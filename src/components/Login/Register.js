// Register.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="bg-white p-8 rounded-xl shadow-soft w-full max-w-md">
        <h2 className="text-2xl font-heading text-primary mb-4">Sign Up</h2>
        <p className="text-neutral-700 mb-6">
          Already have an account?{" "}
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={handleLoginRedirect}
          >
            Login
          </span>
        </p>
        <form>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="px-2 w-full md:w-1/2 mb-4">
              <label
                className="block text-sm text-neutral-700 mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="px-2 w-full md:w-1/2 mb-4">
              <label
                className="block text-sm text-neutral-700 mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="px-2 w-full md:w-1/2 mb-4">
              <label
                className="block text-sm text-neutral-700 mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="px-2 w-full md:w-1/2 mb-4">
              <label
                className="block text-sm text-neutral-700 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="px-2 w-full md:w-1/2 mb-4">
              <label
                className="block text-sm text-neutral-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="px-2 w-full md:w-1/2 mb-4">
              <label
                className="block text-sm text-neutral-700 mb-1"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label className="text-sm text-neutral-700" htmlFor="terms">
              Accept the Terms and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 rounded-md bg-primary text-white hover:bg-purple-500 transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
