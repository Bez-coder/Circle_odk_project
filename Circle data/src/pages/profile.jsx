import React from 'react';
import { Link } from 'react-router-dom';

const profile = () => {
  const userName = "Bezawit";
  const projects = [
    { id: 1, name: "Health Survey", description: "Collect health data in Ethiopia" },
    { id: 2, name: "Education Study", description: "Survey on school attendance" },
  ];
  const submissionCount = 123;
  const subscriptionStatus = "Active";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e3edf8] via-white to-[#f9f9ff] px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#203e7c] mb-2">Welcome back, {userName} 👋</h1>
        <p className="text-gray-600">Here’s an overview of your projects and activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h4 className="text-sm text-gray-500 mb-2">Total Projects</h4>
          <p className="text-3xl font-bold text-[#203e7c]">{projects.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h4 className="text-sm text-gray-500 mb-2">Submissions This Month</h4>
          <p className="text-3xl font-bold text-green-600">{submissionCount}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h4 className="text-sm text-gray-500 mb-2">Subscription Status</h4>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            subscriptionStatus === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}>
            {subscriptionStatus}
          </span>
        </div>
      </div>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#203e7c] mb-6">Your Projects</h2>
        {projects.length === 0 ? (
          <p className="text-gray-600">
            No projects yet.{" "}
            <Link to="/create-project" className="text-blue-600 hover:underline">
              Create one now
            </Link>.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-[#203e7c] mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block text-sm text-blue-600 hover:underline"
                >
                  ➤ View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-semibold text-[#203e7c] mb-6">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/create-project"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            + New Project
          </Link>
          <Link
            to="/forms"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            My Forms
          </Link>
          <Link
            to="/payments"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Payments
          </Link>
          <Link
            to="/support"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default profile;
