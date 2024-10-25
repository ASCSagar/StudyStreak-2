// Login.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="bg-white p-8 rounded-xl shadow-soft w-full max-w-md">
        <h2 className="text-2xl font-heading text-primary mb-4">Login</h2>
        <p className="text-neutral-700 mb-6">
          Don&apos;t have an account yet?{" "}
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={handleSignUpRedirect}
          >
            Sign up for free
          </span>
        </p>
        <form>
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label className="text-sm text-neutral-700" htmlFor="remember">
              Remember Me
            </label>
          </div>
          <p className="text-sm text-primary hover:underline cursor-pointer">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="w-full mt-4 py-2 rounded-md bg-primary text-white hover:bg-purple-700 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
