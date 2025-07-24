import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Animation lib
import Ona from "../assets/ona.png";
import { FaDatabase, FaHeadset, FaSyncAlt, FaUserFriends, FaFileInvoiceDollar } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const userName = "Bezawit"; // Replace with real user info

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#203e7c] text-white w-full pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Welcome back, {userName}! <br />
              Powerful forms — offline capable and on any device
            </h1>
            <p className="text-lg opacity-90">
              Collect data from the field, even without internet. Manage your
              projects, payments, and submissions all in one place.
            </p>
            <Link
              to="/create-project"
              className="inline-block bg-white text-[#203e7c] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
            >
              Create New Project
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={Ona}
              alt="Hero Illustration"
              className="w-full md:max-w-md transform scale-105 drop-shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg cursor-pointer transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaDatabase className="mx-auto text-5xl text-[#203e7c] mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-[#203e7c]">
            Powerful Forms
          </h2>
          <p className="text-gray-700">
            Build and manage complex surveys that work offline and online.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg cursor-pointer transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaHeadset className="mx-auto text-5xl text-[#203e7c] mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-[#203e7c]">
            World Class Support
          </h2>
          <p className="text-gray-700">
            Multilingual support team available across 14 time zones.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg cursor-pointer transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaSyncAlt className="mx-auto text-5xl text-[#203e7c] mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-[#203e7c]">
            Redefine Workflow
          </h2>
          <p className="text-gray-700">
            Streamline your data collection process with seamless integrations.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f0f4ff] py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#203e7c]">
            Why Choose Circle Research?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer">
              <FaUserFriends className="text-4xl text-[#203e7c] mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p>Highly skilled researchers from Harvard and other top universities.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer">
              <FaFileInvoiceDollar className="text-4xl text-[#203e7c] mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p>Simple, clear pricing plans tailored for individuals and organizations.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer">
              <FaHeadset className="text-4xl text-[#203e7c] mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
              <p>Responsive multilingual support available whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#203e7c]">
          Quick Actions
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/create-project"
            className="bg-[#203e7c] text-white px-8 py-3 rounded shadow hover:bg-[#1a3261] transition"
          >
            Create Project
          </Link>
          <Link
            to="/forms"
            className="bg-[#203e7c] text-white px-8 py-3 rounded shadow hover:bg-[#1a3261] transition"
          >
            View Forms
          </Link>
          <Link
            to="/payments"
            className="bg-[#203e7c] text-white px-8 py-3 rounded shadow hover:bg-[#1a3261] transition"
          >
            Payments
          </Link>
          <Link
            to="/support"
            className="bg-[#203e7c] text-white px-8 py-3 rounded shadow hover:bg-[#1a3261] transition"
          >
            Support
          </Link>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#203e7c]">Need Help?</h2>
        <p className="text-gray-700 mb-8">
          Our multilingual support team is available across 14 time zones to assist you.
        </p>
        <Link
          to="/contactus"
          className="bg-[#203e7c] text-white px-8 py-3 rounded-lg hover:bg-[#1a3261] transition"
        >
          Visit Help Center
        </Link>
      </section>
    </div>
  );
};

export default Home;
