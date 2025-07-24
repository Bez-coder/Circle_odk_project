import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Ona from '../assets/ona.png';

const Dashboard = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-[#203e7c] text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Text */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Smart Data Collection for Everyone
            </h1>
            <p className="text-lg">
              Build, deploy, and manage forms with or without internet access. Empower your team with reliable tools.
            </p>
            <Link
              to="/signup"
              className="bg-white text-[#203e7c] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition mr-10"
            >
              Get Started
            </Link>
          
           <Link
              to="/login"
              className="bg-white text-[#203e7c] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={Ona} alt="Dashboard Illustration" className="w-full max-w-md" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#203e7c]">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Offline Support',
                desc: 'Collect and submit data even without internet access.',
              },
              {
                title: 'Secure Storage',
                desc: 'All your submissions are safely stored with encryption.',
              },
              {
                title: 'User Management',
                desc: 'Add your team, control access, and assign roles easily.',
              },
              {
                title: 'Real-time Monitoring',
                desc: 'Track submissions live and monitor field activity.',
              },
              {
                title: 'Customizable Forms',
                desc: 'Design surveys with logic, validations, and skip patterns.',
              },
              {
                title: 'ODK Integration',
                desc: 'Works smoothly with ODK and Central server.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2 text-[#203e7c]">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Explanation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img src={Ona} alt="Company Mission" className="rounded-xl shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-[#203e7c]">Why Choose Our Platform?</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to simplify and supercharge field data collection for individuals, NGOs, and enterprises. We provide tools that help you gather meaningful insights from any environment—urban or remote.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Easy-to-use dashboard interface</li>
              <li>Visualize data in real time</li>
              <li>Scalable for any team size</li>
              <li>Trusted by leading organizations globally</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="bg-[#203e7c] text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">Sign up now and simplify your data collection process.</p>
        <Link
          to="/signup"
          className="bg-white text-[#203e7c] px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
        >
          Create Free Account
        </Link>
      </section>
    </div>
  );
};

export default Dashboard;
