import React from 'react';
import { Link } from 'react-router-dom';
import Nav2 from './nav2';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Signup Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#203e7c] mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600">
            Join us to access powerful form solutions today.
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-[#203e7c] focus:border-[#203e7c]"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-[#203e7c] focus:border-[#203e7c]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-[#203e7c] focus:border-[#203e7c]"
              placeholder="Create a password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-[#203e7c] focus:border-[#203e7c]"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#203e7c] text-white font-medium py-2 rounded-md hover:bg-blue-900 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-[#203e7c] hover:underline">
            Log in
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Signup;