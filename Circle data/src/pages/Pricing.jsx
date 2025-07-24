import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {/* Pricing Section */}
      <section className="bg-[#203e7c] text-white w-full py-16">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-8">
            Pricing Plans
          </h1>
          <p className="text-lg text-center mb-12">
            Choose the plan that best suits your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Individual Plan */}
            <div className="bg-white text-[#203e7c] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Individual</h2>
              <p className="text-3xl font-bold mb-4">$9<span className="text-lg">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li>Offline forms</li>
                <li>1 user</li>
                <li>Basic support</li>
              </ul>
              <Link
                to="/signup"
                className="bg-[#203e7c] text-white font-medium px-4 py-2 rounded hover:bg-blue-900 block text-center"
              >
                Get Started
              </Link>
            </div>
            {/* Team Plan */}
            <div className="bg-white text-[#203e7c] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Team</h2>
              <p className="text-3xl font-bold mb-4">$29<span className="text-lg">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li>Offline forms</li>
                <li>Up to 5 users</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
              </ul>
              <Link
                to="/signup"
                className="bg-[#203e7c] text-white font-medium px-4 py-2 rounded hover:bg-blue-900 block text-center"
              >
                Get Started
              </Link>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white text-[#203e7c] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="space-y-2 mb-6">
                <li>Offline forms</li>
                <li>Unlimited users</li>
                <li>24/7 support</li>
                <li>Custom integrations</li>
              </ul>
              <Link
                to="/contact"
                className="bg-[#203e7c] text-white font-medium px-4 py-2 rounded hover:bg-blue-900 block text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Need More Information?
          </h2>
          <p className="text-gray-700 mb-8">
            Contact our team for tailored pricing or additional features.
          </p>
          <Link
            to="/contact"
            className="bg-[#203e7c] text-white px-6 py-3 rounded-lg hover:bg-blue-900"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;